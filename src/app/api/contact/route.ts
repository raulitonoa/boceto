import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

interface ContactRequest {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  service?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json()
    
    const { name, email, phone, subject, message, service } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben ser completados' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del correo electrónico es inválido' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      )
    }

    // Generate contact reference
    const contactRef = `CNT-${Date.now().toString().slice(-6)}`

    // Create contact data object
    const contactData = {
      reference: contactRef,
      customer: {
        name,
        email,
        phone: phone || null
      },
      inquiry: {
        subject,
        message,
        service: service || null
      },
      createdAt: new Date().toISOString(),
      status: 'pending'
    }

    // In a real application, you would:
    // 1. Save the contact request to a database
    // 2. Send notification email to admin
    // 3. Send confirmation email to customer
    // 4. Create a task in CRM system

    // For demo purposes, we'll use AI to generate a response summary
    try {
      const zai = await ZAI.create()
      
      const aiResponse = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente de Boceto, una empresa de impresión personalizada. Genera un resumen profesional y amigable de la solicitud de contacto del cliente en español.'
          },
          {
            role: 'user',
            content: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || 'No proporcionado'}\nAsunto: ${subject}\nServicio de interés: ${service || 'No especificado'}\nMensaje: ${message}`
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      })

      const summary = aiResponse.choices[0]?.message?.content || 'Solicitud de contacto recibida'

      return NextResponse.json({
        success: true,
        contact: {
          ...contactData,
          aiSummary: summary
        },
        message: 'Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.'
      })

    } catch (aiError) {
      console.error('AI processing error:', aiError)
      
      // Fallback without AI processing
      return NextResponse.json({
        success: true,
        contact: contactData,
        message: 'Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.'
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el mensaje de contacto' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    services: [
      'sublimation',
      'textile-vinyl',
      'adhesive-vinyl',
      'interior-design',
      'digital-marketing'
    ],
    contactInfo: {
      email: 'hola@boceto.com',
      phone: '+52 123 456 7890',
      whatsapp: '+52 123 456 7890',
      instagram: '@boceto.studio'
    }
  })
}