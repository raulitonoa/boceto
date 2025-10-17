'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react'

// Base de datos de servicios
const servicesDB = {
  impresiones: {
    'impresion-digital-gran': {
      title: 'Impresión Digital Gran Formato',
      description: 'Soluciones de impresión de alta calidad para grandes formatos',
      icon: '🖼️',
      features: [
        'Lonas publicitarias',
        'Vallas publicitarias', 
        'Cartelería de gran formato',
        'Banners y pancartas',
        'Impresión en PVC',
        'Lonas microperforadas'
      ],
      benefits: [
        'Alta resolución y calidad',
        'Resistencia a la intemperie',
        'Colores vibrantes y duraderos',
        'Entrega rápida',
        'Asesoramiento personalizado'
      ],
      price: 'Desde 15€/m²',
      delivery: '2-3 días laborables'
    },
    'impresion-digital-mediano': {
      title: 'Impresión Digital Mediano Formato',
      description: 'Material publicitario y promocional de mediano tamaño',
      icon: '📄',
      features: [
        'Posters y carteles',
        'Folletos y catálogos',
        'Material POP',
        'Dípticos y trípticos',
        'Impresión en papel y cartulina'
      ],
      benefits: [
        'Calidad fotográfica',
        'Múltiples acabados',
        'Opciones ecológicas',
        'Cantidades variables',
        'Precios competitivos'
      ],
      price: 'Desde 0.50€/unidad',
      delivery: '1-2 días laborables'
    },
    'impresion-digital-pequeno': {
      title: 'Impresión Digital Pequeño Formato',
      description: 'Impresión de alta precisión para pequeños formatos',
      icon: '📇',
      features: [
        'Tarjetas de presentación',
        'Flyers y folletos',
        'Stickers personalizados',
        'Etiquetas adhesivas',
        'Impresión de pegatinas'
      ],
      benefits: [
        'Alta definición',
        'Cortes precisos',
        'Materiales premium',
        'Entrega inmediata',
        'Diseño incluido'
      ],
      price: 'Desde 0.10€/unidad',
      delivery: 'Mismo día disponible'
    },
    'impresion-textil': {
      title: 'Impresión Textil',
      description: 'Personalización de ropa y textiles con la mejor calidad',
      icon: '👕',
      features: [
        'Personalización de ropa',
        'Uniformes empresariales',
        'Camisetas personalizadas',
        'Gorras y sombreros',
        'Bolsas de tela'
      ],
      benefits: [
        'Durabilidad garantizada',
        'Colores intensos',
        'Lavado sin deterioro',
        'Técnicas variadas',
        'Tallas para todos'
      ],
      price: 'Desde 5€/pieza',
      delivery: '3-5 días laborables'
    },
    'fotografia': {
      title: 'Fotografía y Fotocuadros',
      description: 'Impresión fotográfica profesional y encuadernación',
      icon: '📷',
      features: [
        'Impresión fotográfica',
        'Encuadernación de álbumes',
        'Marcos personalizados',
        'Impresión en lienzo',
        'Restauración de fotos'
      ],
      benefits: [
        'Calidad de galería',
        'Colores exactos',
        'Materiales de archivo',
        'Vida útil prolongada',
        'Formatos personalizados'
      ],
      price: 'Desde 2€/impresión',
      delivery: '2-4 días laborables'
    },
    'vinilos': {
      title: 'Vinilos Rotulados',
      description: 'Soluciones de rotulación y vinilos decorativos',
      icon: '🎨',
      features: [
        'Vinilos decorativos',
        'Señalética corporativa',
        'Rotulación de vehículos',
        'Vinilos de seguridad',
        'Letreros adhesivos'
      ],
      benefits: [
        'Instalación profesional',
        'Materiales duraderos',
        'Diseño personalizado',
        'Remoción sin residuos',
        'Garantía de calidad'
      ],
      price: 'Desde 20€/m²',
      delivery: '1-3 días laborables'
    },
    'ceramica': {
      title: 'Impresión en Cerámica',
      description: 'Personalización de objetos cerámicos de alta calidad',
      icon: '☕',
      features: [
        'Tazas personalizadas',
        'Platos decorativos',
        'Objetos cerámicos',
        'Juegos de café',
        'Regalos corporativos'
      ],
      benefits: [
        'Alta durabilidad',
        'Lavavajillas seguro',
        'Microondas compatible',
        'Colores permanentes',
        'Empaque elegante'
      ],
      price: 'Desde 8€/pieza',
      delivery: '3-5 días laborables'
    }
  },
  hosteleria: {
    'envases': {
      title: 'Envases para Hostelería',
      description: 'Soluciones de packaging para el sector hostelero',
      icon: '📦',
      features: [
        'Contenedores para alimentos',
        'Envases térmicos',
        'Packaging especializado',
        'Soluciones ecológicas',
        'Diseño personalizado'
      ],
      benefits: [
        'Materiales food grade',
        'Conservación óptima',
        'Presentación profesional',
        'Sostenibles',
        'Precios mayoristas'
      ],
      price: 'Desde 0.20€/unidad',
      delivery: '2-3 días laborables'
    },
    'cajas-pizzas': {
      title: 'Cajas de Pizzas',
      description: 'Cajas especializadas para pizzerías',
      icon: '🍕',
      features: [
        'Diferentes tamaños',
        'Calidades premium',
        'Impresión personalizada',
        'Ventilación adecuada',
        'Resistencia al calor'
      ],
      benefits: [
        'Mantiene temperatura',
        'No absorbe grasa',
        'Apilable',
        'Montaje fácil',
        'Imagen profesional'
      ],
      price: 'Desde 0.30€/unidad',
      delivery: '1-2 días laborables'
    },
    'cajas-alimentos': {
      title: 'Cajas para Alimentos',
      description: 'Packaging especializado para comida para llevar',
      icon: '🥡',
      features: [
        'Comida para llevar',
        'Cajas térmicas',
        'Divisores incluidos',
        'Cierre seguro',
        'Materiales seguros'
      ],
      benefits: [
        'Mantiene calor',
        'Evita fugas',
        'Presentación atractiva',
        'Fácil transporte',
        'Reciclable'
      ],
      price: 'Desde 0.25€/unidad',
      delivery: '2-3 días laborables'
    },
    'bolsas': {
      title: 'Bolsas Comerciales',
      description: 'Soluciones de embolsado para todo tipo de negocios',
      icon: '🛍️',
      features: [
        'Bolsas de papel',
        'Bolsas de plástico',
        'Opciones ecológicas',
        'Diseño personalizado',
        'Diferentes tamaños'
      ],
      benefits: [
        'Resistencia garantizada',
        'Imagen de marca',
        'Opciones sostenibles',
        'Asas cómodas',
        'Impresión de calidad'
      ],
      price: 'Desde 0.15€/unidad',
      delivery: '1-3 días laborables'
    },
    'pajillas': {
      title: 'Pajillas y Sorbetes',
      description: 'Soluciones de bebidas sostenibles y funcionales',
      icon: '🥤',
      features: [
        'Pajillas de papel',
        'Pajillas de plástico',
        'Alternativas ecológicas',
        'Colores variados',
        'Tamaños múltiples'
      ],
      benefits: [
        'Seguras para bebidas',
        'Biodegradables',
        'No alteran sabor',
        'Resistentes',
        'Presentación elegante'
      ],
      price: 'Desde 0.02€/unidad',
      delivery: 'Entrega inmediata'
    }
  },
  asesoria: {
    'citas': {
      title: 'Gestión de Citas',
      description: 'Sistema profesional de agendamiento y gestión',
      icon: '📅',
      features: [
        'Agendamiento online',
        'Recordatorios automáticos',
        'Gestión de cancelaciones',
        'Calendario integrado',
        'Estadísticas de asistencia'
      ],
      benefits: [
        'Reduce ausencias',
        'Optimiza tiempo',
        'Mejora experiencia',
        'Acceso 24/7',
        'Informes detallados'
      ],
      price: 'Desde 29€/mes',
      delivery: 'Implementación inmediata'
    },
    'lineas-telefonicas': {
      title: 'Líneas Telefónicas Empresariales',
      description: 'Soluciones de comunicación profesional',
      icon: '📞',
      features: [
        'Números empresariales',
        'Desvío de llamadas',
        'Buzón de voz',
        'Menú automático',
        'Estadísticas de llamadas'
      ],
      benefits: [
        'Imagen profesional',
        'Nunca pierdas llamadas',
        'Atención 24/7',
        'Escalable',
        'Costos controlados'
      ],
      price: 'Desde 19€/mes',
      delivery: 'Activación en 24h'
    },
    'software': {
      title: 'Asesoramiento de Software',
      description: 'Consultoría tecnológica e implementación',
      icon: '💻',
      features: [
        'Análisis de necesidades',
        'Selección de software',
        'Implementación',
        'Capacitación',
        'Soporte continuo'
      ],
      benefits: [
        'Optimización de procesos',
        'Ahorro de tiempo',
        'Mejora productividad',
        'ROI garantizado',
        'Soporte experto'
      ],
      price: 'Desde 50€/hora',
      delivery: 'Consulta inicial gratuita'
    },
    'redes-sociales': {
      title: 'Gestión de Redes Sociales',
      description: 'Manejo profesional de redes sociales y aplicaciones',
      icon: '📱',
      features: [
        'Gestión de perfiles',
        'Creación de contenido',
        'Programación de posts',
        'Análisis de métricas',
        'Interacción con seguidores'
      ],
      benefits: [
        'Presencia constante',
        'Contenido de calidad',
        'Crecimiento medible',
        'Ahorro de tiempo',
        'Estrategia profesional'
      ],
      price: 'Desde 199€/mes',
      delivery: 'Inicio inmediato'
    },
    'locutorio': {
      title: 'Servicios de Locutorio',
      description: 'Comunicación internacional y servicios de llamadas',
      icon: '📠',
      features: [
        'Llamadas internacionales',
        'Tarifas competitivas',
        'Cabina privada',
        'Venta de tarjetas',
        'Asistencia técnica'
      ],
      benefits: [
        'Calidad superior',
        'Precios bajos',
        'Conexión segura',
        'Atención personalizada',
        'Disponibilidad total'
      ],
      price: 'Tarifas por minuto',
      delivery: 'Servicio disponible'
    },
    'capacitaciones': {
      title: 'Capacitaciones Profesionales',
      description: 'Formación y desarrollo de habilidades',
      icon: '🎓',
      features: [
        'Cursos presenciales',
        'Formación online',
        'Material didáctico',
        'Certificación',
        'Seguimiento post-curso'
      ],
      benefits: [
        'Instructores expertos',
        'Contenido actualizado',
        'Metodología práctica',
        'Certificado válido',
        'Apoyo continuo'
      ],
      price: 'Desde 99€/curso',
      delivery: 'Calendario mensual'
    }
  },
  marketing: {
    'diseno-grafico': {
      title: 'Diseño Gráfico',
      description: 'Soluciones creativas de diseño visual',
      icon: '🎨',
      features: [
        'Identidad corporativa',
        'Branding completo',
        'Diseño de logotipos',
        'Material publicitario',
        'Diseño web'
      ],
      benefits: [
        'Imagen profesional',
        'Diferenciación',
        'Reconocimiento de marca',
        'Consistencia visual',
        'Impacto memorable'
      ],
      price: 'Desde 150€/proyecto',
      delivery: '5-7 días laborables'
    },
    'modelismo': {
      title: 'Modelismo en Papel',
      description: 'Maquetas y prototipos en papel',
      icon: '📐',
      features: [
        'Maquetas arquitectónicas',
        'Prototipos en papel',
        'Modelos 3D',
        'Diseño personalizado',
        'Montaje incluido'
      ],
      benefits: [
        'Precisión detallada',
        'Material económico',
        'Fácil manipulación',
        'Presentación impactante',
        'Modificable'
      ],
      price: 'Desde 50€/modelo',
      delivery: '3-5 días laborables'
    },
    'corner-latino': {
      title: 'Corner Latino',
      description: 'Productos y servicios para la comunidad latina',
      icon: '🌎',
      features: [
        'Productos latinos',
        'Servicios especializados',
        'Atención bilingüe',
        'Envíos a América',
        'Asesoría cultural'
      ],
      benefits: [
        'Autenticidad garantizada',
        'Conexión cultural',
        'Atención personalizada',
        'Variedad de productos',
        'Precios competitivos'
      ],
      price: 'Variable por producto',
      delivery: '2-5 días laborables'
    }
  },
  interiorismo: {
    'interiores': {
      title: 'Proyecto de Interiores',
      description: 'Diseño y planificación de espacios interiores',
      icon: '🏠',
      features: [
        'Diseño de espacios',
        'Planificación funcional',
        'Selección de materiales',
        'Iluminación',
        'Decoración'
      ],
      benefits: [
        'Espacios optimizados',
        'Estilo personalizado',
        'Funcionalidad máxima',
        'Valor agregado',
        'Bienestar mejorado'
      ],
      price: 'Desde 500€/proyecto',
      delivery: '2-3 semanas'
    },
    'exteriores': {
      title: 'Proyecto de Exteriores',
      description: 'Diseño de jardines y espacios exteriores',
      icon: '🌳',
      features: [
        'Diseño de jardines',
        'Terrazas y patios',
        'Paisajismo',
        'Mobiliario exterior',
        'Sistemas de riego'
      ],
      benefits: [
        'Espacios disfrutables',
        'Bajo mantenimiento',
        'Valor inmobiliario',
        'Sostenibilidad',
        'Privacidad y confort'
      ],
      price: 'Desde 750€/proyecto',
      delivery: '3-4 semanas'
    },
    'modelado-3d': {
      title: 'Modelación 3D de Proyectos',
      description: 'Visualización 3D y recorridos virtuales',
      icon: '🎮',
      features: [
        'Modelos 3D realistas',
        'Renderings de alta calidad',
        'Recorridos virtuales',
        'Visualización VR',
        'Animaciones'
      ],
      benefits: [
        'Visualización previa',
        'Decisiones informadas',
        'Marketing inmobiliario',
        'Correcciones tempranas',
        'Impacto visual'
      ],
      price: 'Desde 300€/vista',
      delivery: '1-2 semanas'
    },
    'asesoria-ejecutiva': {
      title: 'Asesoría Ejecutiva de Proyectos',
      description: 'Consultoría y gestión integral de proyectos',
      icon: '👥',
      features: [
        'Gestión de proyectos',
        'Coordinación de equipos',
        'Control de calidad',
        'Presupuestos',
        'Plazos de entrega'
      ],
      benefits: [
        'Proyectos exitosos',
        'Estrés reducido',
        'Control total',
        'Resultados garantizados',
        'Profesionalismo'
      ],
      price: 'Desde 100€/hora',
      delivery: 'Disponibilidad inmediata'
    }
  },
  tienda: {
    'diseno-digital': {
      title: 'Diseño Gráfico Digital',
      description: 'Plantillas y recursos de diseño digital',
      icon: '🖥️',
      features: [
        'Plantillas premium',
        'Logos prediseñados',
        'Material de branding',
        'Recursos gráficos',
        'Licencias comerciales'
      ],
      benefits: [
        'Descarga inmediata',
        'Calidad profesional',
        'Economía de tiempo',
        'Personalizable',
        'Uso comercial'
      ],
      price: 'Desde 10€/archivo',
      delivery: 'Descarga instantánea'
    },
    'modelismo-digital': {
      title: 'Modelismo Digital en Papel',
      description: 'Maquetas descargables y modelos para imprimir',
      icon: '📄',
      features: [
        'Maquetas descargables',
        'Modelos para imprimir',
        'Instrucciones detalladas',
        'Diferentes niveles',
        'Actualizaciones gratuitas'
      ],
      benefits: [
        'Acceso inmediato',
        'Impresión local',
        'Costo reducido',
        'Variety ilimitada',
        'Soporte técnico'
      ],
      price: 'Desde 5€/modelo',
      delivery: 'Descarga instantánea'
    },
    'corner-digital': {
      title: 'Corner Latino Digital',
      description: 'Productos digitales para la comunidad latina',
      icon: '💻',
      features: [
        'E-books culturales',
        'Plantillas bilingües',
        'Recursos educativos',
        'Material cultural',
        'Guías prácticas'
      ],
      benefits: [
        'Contenido auténtico',
        'Accesibilidad',
        'Aprendizaje continuo',
        'Conexión cultural',
        'Actualizaciones regulares'
      ],
      price: 'Desde 3€/producto',
      delivery: 'Descarga instantánea'
    }
  },
  ayuda: {
    'centro-ayuda': {
      title: 'Centro de Ayuda',
      description: 'Recursos de ayuda y documentación',
      icon: '❓',
      features: [
        'Tutoriales completos',
        'Guías paso a paso',
        'Documentación técnica',
        'Videos explicativos',
        'FAQs actualizadas'
      ],
      benefits: [
        'Auto-suficiencia',
        'Aprendizaje continuo',
        'Resolución rápida',
        'Disponibilidad 24/7',
        'Contenido gratuito'
      ],
      price: 'Gratis',
      delivery: 'Acceso inmediato'
    },
    'contacto-tecnico': {
      title: 'Contacto Técnico',
      description: 'Soporte técnico especializado',
      icon: '🔧',
      features: [
        'Soporte técnico',
        'Diagnóstico de problemas',
        'Soluciones rápidas',
        'Asistencia remota',
        'Seguimiento de casos'
      ],
      benefits: [
        'Resolución experta',
        'Tiempo mínimo',
        'Garantía de solución',
        'Comunicación clara',
        'Satisfacción garantizada'
      ],
      price: 'Según servicio',
      delivery: 'Respuesta en 2h'
    },
    'faqs': {
      title: 'Preguntas Frecuentes',
      description: 'Respuestas rápidas a dudas comunes',
      icon: '💬',
      features: [
        'Preguntas comunes',
        'Respuestas detalladas',
        'Búsqueda inteligente',
        'Categorización',
        'Actualización constante'
      ],
      benefits: [
        'Respuestas inmediatas',
        'Información clara',
        'Ahorro de tiempo',
        'Auto-ayuda',
        'Disponibilidad total'
      ],
      price: 'Gratis',
      delivery: 'Acceso inmediato'
    },
    'tutoriales': {
      title: 'Tutoriales',
      description: 'Videos tutoriales y guías prácticas',
      icon: '📹',
      features: [
        'Videos tutoriales',
        'Guías paso a paso',
        'Demostraciones prácticas',
        'Tips y trucos',
        'Progresión de aprendizaje'
      ],
      benefits: [
        'Aprendizaje visual',
        'Ritmo personalizado',
        'Práctica guiada',
        'Resultados medibles',
        'Acceso reutilizable'
      ],
      price: 'Gratis',
      delivery: 'Acceso inmediato'
    },
    'soporte-remoto': {
      title: 'Soporte Remoto',
      description: 'Asistencia técnica a distancia',
      icon: '🖥️',
      features: [
        'Conexión remota segura',
        'Diagnóstico en vivo',
        'Resolución directa',
        'Capacitación remota',
        'Registro de sesiones'
      ],
      benefits: [
        'Sin desplazamiento',
        'Resolución inmediata',
        'Aprendizaje activo',
        'Seguridad garantizada',
        'Documentación automática'
      ],
      price: 'Desde 30€/sesión',
      delivery: 'Agendamiento flexible'
    }
  }
}

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const [service, setService] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { category, service: serviceId } = params
    
    if (category && serviceId) {
      const categoryData = servicesDB[category as keyof typeof servicesDB]
      if (categoryData && categoryData[serviceId as keyof typeof categoryData]) {
        setService(categoryData[serviceId as keyof typeof categoryData])
      }
    }
    setLoading(false)
  }, [params])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando información del servicio...</p>
        </div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <p className="text-gray-600 mb-6">El servicio que buscas no está disponible.</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </button>
            
            <h1 className="text-xl font-bold text-gray-900">
              Boceto SL <span className="text-red-600">Illes Balears</span>
            </h1>
            
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{service.icon}</div>
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Features */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Características</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pricing & CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-red-600 mb-2">{service.price}</div>
                <div className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{service.delivery}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600">Calidad</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600">Soporte</span>
                  <span className="text-green-600 font-medium">24/7</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600">Garantía</span>
                  <span className="text-blue-600 font-medium">100%</span>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium mb-4">
                Solicitar información
              </button>

              <button className="w-full border border-red-600 text-red-600 py-3 rounded-lg hover:bg-red-50 transition-colors font-medium">
                Contactar ahora
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">¿Necesitas más información?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Llámanos</h3>
              <p className="text-gray-600">+34 971 123 456</p>
              <p className="text-sm text-gray-500">Lun-Vie 9:00-18:00</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Escríbenos</h3>
              <p className="text-gray-600">info@bocetoslillesbalears.com</p>
              <p className="text-sm text-gray-500">Respuesta en 24h</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visítanos</h3>
              <p className="text-gray-600">Illes Balears</p>
              <p className="text-sm text-gray-500">Cita previa recomendada</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}