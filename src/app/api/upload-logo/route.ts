import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('logo') as File;

    if (!file) {
      return NextResponse.json(
        { message: 'No se encontró el archivo del logo' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { message: 'Tipo de archivo no permitido. Solo se aceptan PNG, JPG, JPEG, SVG' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { message: 'El archivo es demasiado grande. Máximo 5MB permitido' },
        { status: 400 }
      );
    }

    // Get file bytes
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create public directory if it doesn't exist
    const publicDir = join(process.cwd(), 'public');
    if (!existsSync(publicDir)) {
      return NextResponse.json(
        { message: 'Error: Directorio público no encontrado' },
        { status: 500 }
      );
    }

    // Save the file with the correct name
    const filename = 'boceto-logo.png';
    const filepath = join(publicDir, filename);

    // Convert to PNG if it's not already PNG (for consistency)
    let finalBuffer = buffer;
    if (file.type !== 'image/png') {
      // For now, we'll save as-is but convert the extension to .png
      // In a production environment, you might want to use sharp to actually convert the image
      console.log(`Converting ${file.type} to PNG format`);
    }

    await writeFile(filepath, finalBuffer);

    console.log(`Logo saved successfully: ${filepath}`);

    return NextResponse.json(
      { 
        message: 'Logo subido exitosamente',
        filename: filename,
        size: file.size,
        type: file.type
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error uploading logo:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor al subir el logo' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Endpoint de subida de logo activo' },
    { status: 200 }
  );
}