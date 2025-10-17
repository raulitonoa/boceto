import { NextRequest, NextResponse } from 'next/server'

interface QuoteRequest {
  material: string
  size: string
  finish: string
  name: string
  email: string
  details?: string
}

const PRICING_MATRIX = {
  sublimation: {
    small: { standard: 50, premium: 65, luxury: 75 },
    medium: { standard: 75, premium: 98, luxury: 113 },
    large: { standard: 100, premium: 130, luxury: 150 }
  },
  'textile-vinyl': {
    small: { standard: 30, premium: 39, luxury: 45 },
    medium: { standard: 45, premium: 59, luxury: 68 },
    large: { standard: 60, premium: 78, luxury: 90 }
  },
  'adhesive-vinyl': {
    small: { standard: 25, premium: 33, luxury: 38 },
    medium: { standard: 38, premium: 49, luxury: 57 },
    large: { standard: 50, premium: 65, luxury: 75 }
  },
  interior: {
    small: { standard: 100, premium: 130, luxury: 150 },
    medium: { standard: 150, premium: 195, luxury: 225 },
    large: { standard: 200, premium: 260, luxury: 300 }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequest = await request.json()
    
    const { material, size, finish, name, email, details } = body

    // Validate required fields
    if (!material || !size || !finish || !name || !email) {
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

    // Calculate base price
    const materialPricing = PRICING_MATRIX[material as keyof typeof PRICING_MATRIX]
    if (!materialPricing) {
      return NextResponse.json(
        { error: 'Material no válido' },
        { status: 400 }
      )
    }

    const sizePricing = materialPricing[size as keyof typeof materialPricing]
    if (!sizePricing) {
      return NextResponse.json(
        { error: 'Tamaño no válido' },
        { status: 400 }
      )
    }

    const basePrice = sizePricing[finish as keyof typeof sizePricing]
    if (!basePrice) {
      return NextResponse.json(
        { error: 'Acabado no válido' },
        { status: 400 }
      )
    }

    // Add tax (16% IVA for Mexico)
    const taxRate = 0.16
    const totalPrice = Math.round(basePrice * (1 + taxRate))

    // Generate quote reference
    const quoteRef = `BCT-${Date.now().toString().slice(-6)}`

    // In a real application, you would:
    // 1. Save the quote to a database
    // 2. Send confirmation email
    // 3. Create a follow-up task

    const quoteData = {
      reference: quoteRef,
      customer: {
        name,
        email
      },
      specifications: {
        material,
        size,
        finish,
        details
      },
      pricing: {
        basePrice,
        tax: Math.round(basePrice * taxRate),
        total: totalPrice
      },
      createdAt: new Date().toISOString(),
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
    }

    return NextResponse.json({
      success: true,
      quote: quoteData,
      message: 'Cotización generada exitosamente'
    })

  } catch (error) {
    console.error('Quote calculation error:', error)
    return NextResponse.json(
      { error: 'Error al procesar la cotización' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    materials: Object.keys(PRICING_MATRIX),
    sizes: ['small', 'medium', 'large'],
    finishes: ['standard', 'premium', 'luxury']
  })
}