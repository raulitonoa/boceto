'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, ShoppingCart, User, Phone, Mail, MapPin, Package, Store, CreditCard, ChevronRight, Star, Truck, Printer, Utensils, Headphones, Palette, Home, ShoppingBag, HelpCircle, Image, FileText, Camera, Sticker, Coffee, Box, PhoneCall, Monitor, Smartphone, GraduationCap, Building, Trees, Cpu, Users, Shirt, Calendar, ChevronDown } from 'lucide-react'

export default function BocetoSLLanding() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [email, setEmail] = useState('')
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.nav-menu-item')) {
        setActiveSubmenu(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const otherServices = [
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Custodia y entrega de paquetes',
      description: 'Servicio seguro de logística y entrega',
      image: '/package-service.jpg',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: 'Espacio de productos latinos',
      description: 'Variedad de productos latinoamericanos',
      image: '/latin-products.jpg',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Servicio de remesas a Cuba',
      description: 'Transferencias de dinero seguras',
      image: '/remittance-service.jpg',
      color: 'bg-purple-50 text-purple-600'
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'Caja de Pizza 40x40',
      price: '12.50€',
      image: '/pizza-box.jpg',
      rating: 4.5,
      badge: 'Más vendido'
    },
    {
      id: 2,
      name: 'Taza Personalizada',
      price: '8.95€',
      image: '/custom-mug.jpg',
      rating: 4.8,
      badge: 'Personalizable'
    },
    {
      id: 3,
      name: 'Revista/Modelo Avión',
      price: '15.00€',
      image: '/magazine-model.jpg',
      rating: 4.3,
      badge: 'Nuevo'
    }
  ]

  // IMPRESIONES y vinilos
  const printingServices = [
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Impresión digital gran formato',
      description: 'Lonas, vallas publicitarias, cartelería de gran formato'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Impresión digital mediano formato',
      description: 'Posters, folletos, catálogos, material POP'
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: 'Impresión digital pequeño formato',
      description: 'Tarjetas, flyers, stickers, etiquetas adhesivas'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Impresión textil',
      description: 'Personalización de ropa, uniformes, textiles'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Fotografía y fotocuadros',
      description: 'Impresión fotográfica, encuadernación, marcos'
    },
    {
      icon: <Sticker className="w-8 h-8" />,
      title: 'Vinilos rotulados',
      description: 'Vinilos decorativos, señalética, rotulación de vehículos'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Impresión en cerámica',
      description: 'Tazas, platos, objetos cerámicos personalizados'
    }
  ]

  // HOSTELERÍA (insumos)
  const hospitalitySupplies = [
    {
      icon: <Box className="w-8 h-8" />,
      title: 'Envases',
      description: 'Contenedores para alimentos, envases térmicos'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Cajas de pizzas',
      description: 'Diferentes tamaños y calidades para pizzerías'
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: 'Cajas de alimentos',
      description: 'Packaging especializado para comida para llevar'
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Bolsas',
      description: 'Bolsas de papel, plástico y ecológicas'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Pajillas',
      description: 'Pajillas de papel, plástico y alternativas ecológicas'
    }
  ]

  // ASESORÍA y SOPORTE
  const advisoryServices = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Citas',
      description: 'Gestión de citas y agendamiento de servicios'
    },
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: 'Líneas telefónicas',
      description: 'Servicios de telefonía y comunicación empresarial'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Asesoramiento de software',
      description: 'Consultoría tecnológica y implementación de software'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Ayuda redes sociales y apps',
      description: 'Gestión de redes sociales y aplicaciones móviles'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Servicios de locutorio',
      description: 'Llamadas internacionales y servicios de comunicación'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Capacitaciones',
      description: 'Cursos de formación y capacitación profesional'
    }
  ]

  // MARKETING DIGITAL
  const marketingServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Diseño gráfico',
      description: 'Identidad corporativa, branding, diseño creativo'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Modelismo en papel',
      description: 'Maquetas, prototipos en papel, modelos 3D'
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Corner Latino',
      description: 'Productos y servicios para la comunidad latina'
    }
  ]

  // INTERIORISMO (modelaje 3D)
  const interiorServices = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Proyecto de interiores',
      description: 'Diseño y planificación de espacios interiores'
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: 'Proyecto de exteriores',
      description: 'Diseño de jardines, terrazas y espacios exteriores'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Modelación 3D de proyectos',
      description: 'Visualización 3D, renders, recorridos virtuales'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Asesoría ejecutiva de proyectos',
      description: 'Consultoría y gestión integral de proyectos'
    }
  ]

  // TIENDA ONLINE
  const onlineStoreProducts = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Diseño gráfico',
      description: 'Plantillas, logos, material de diseño digital'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Modelismo en papel',
      description: 'Maquetas descargables, modelos para imprimir'
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Corner Latino',
      description: 'Productos digitales para la comunidad latina'
    }
  ]

  // AYUDA
  const helpResources = [
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'Centro de ayuda',
      description: 'Tutoriales, guías y documentación'
    },
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: 'Contacto técnico',
      description: 'Soporte técnico especializado'
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'FAQs',
      description: 'Preguntas frecuentes y respuestas rápidas'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Tutoriales',
      description: 'Videos tutoriales y guías paso a paso'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Soporte remoto',
      description: 'Asistencia técnica a distancia'
    }
  ]

  const handleAddToCart = (productId: number) => {
    setCartCount(cartCount + 1)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`¡Gracias por suscribirte con el email: ${email}`)
      setEmail('')
    }
  }

  const handleServiceClick = (serviceType: string, serviceId: string) => {
    // Navegar a la página específica del servicio
    router.push(`/servicios/${serviceType}/${serviceId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Top Navigation Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +34 971 123 456
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@bocetoslillesbalears.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Illes Balears</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Boceto SL <span className="text-red-600">Illes Balears</span>
              </h1>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos, servicios..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cart and User Icons */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-red-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                <User className="w-4 h-4" />
                <span className="hidden md:inline">Iniciar sesión</span>
              </button>
            </div>
          </div>

          {/* Navigation - Always Visible with Submenus */}
          <nav className="border-t border-gray-200 bg-white sticky top-0 z-40">
            <div className="flex items-center justify-center space-x-1 lg:space-x-6 py-2 lg:py-3 overflow-x-auto scrollbar-hide">
              {/* IMPRESIONES */}
              <div className="relative inline-block">
                <button 
                  className="text-xs lg:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap px-2 lg:px-3 py-2 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 flex items-center space-x-1"
                  onClick={() => setActiveSubmenu(activeSubmenu === 'impresiones' ? null : 'impresiones')}
                >
                  <span>IMPRESIONES</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {activeSubmenu === 'impresiones' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <div className="py-1">
                    <button 
                      onClick={() => handleServiceClick('impresiones', 'impresion-digital-gran')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Image className="w-4 h-4" />
                        <span>Impresión digital gran formato</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('impresiones', 'impresion-digital-mediano')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>Impresión digital mediano formato</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('impresiones', 'impresion-digital-pequeno')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Printer className="w-4 h-4" />
                        <span>Impresión digital pequeño formato</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('impresiones', 'impresion-textil')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Shirt className="w-4 h-4" />
                        <span>Impresión textil</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('impresiones', 'fotografia')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Camera className="w-4 h-4" />
                        <span>Fotografía y fotocuadros</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('impresiones', 'vinilos')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Sticker className="w-4 h-4" />
                        <span>Vinilos rotulados</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('impresiones', 'ceramica')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Coffee className="w-4 h-4" />
                        <span>Impresión en cerámica</span>
                      </div>
                    </button>
                  </div>
                </div>
                )}
              </div>

              {/* HOSTELERÍA */}
              <div className="relative inline-block">
                <button 
                  className="text-xs lg:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap px-2 lg:px-3 py-2 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 flex items-center space-x-1"
                  onClick={() => setActiveSubmenu(activeSubmenu === 'hosteleria' ? null : 'hosteleria')}
                >
                  <span>HOSTELERÍA</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {activeSubmenu === 'hosteleria' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <div className="py-1">
                      <button 
                        onClick={() => handleServiceClick('hosteleria', 'envases')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Box className="w-4 h-4" />
                          <span>Envases</span>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleServiceClick('hosteleria', 'cajas-pizzas')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4" />
                          <span>Cajas de pizzas</span>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleServiceClick('hosteleria', 'cajas-alimentos')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Box className="w-4 h-4" />
                          <span>Cajas de alimentos</span>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleServiceClick('hosteleria', 'bolsas')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <ShoppingBag className="w-4 h-4" />
                          <span>Bolsas</span>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleServiceClick('hosteleria', 'pajillas')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Coffee className="w-4 h-4" />
                          <span>Pajillas</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* ASESORÍA */}
              <div 
                className="relative nav-menu-item"
                onMouseEnter={() => setActiveSubmenu('asesoria')}
              >
                <button 
                  className="text-xs lg:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap px-2 lg:px-3 py-2 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 flex items-center space-x-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveSubmenu(activeSubmenu === 'asesoria' ? null : 'asesoria')
                  }}
                >
                  <span>ASESORÍA</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {/* Submenú posicionado debajo del botón */}
                <div 
                  className={`absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                    activeSubmenu === 'asesoria' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setActiveSubmenu('asesoria')}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <div className="py-1">
                    <button 
                      onClick={() => handleServiceClick('asesoria', 'citas')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Citas</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('asesoria', 'lineas-telefonicas')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <PhoneCall className="w-4 h-4" />
                        <span>Líneas telefónicas</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('asesoria', 'software')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Monitor className="w-4 h-4" />
                        <span>Asesoramiento de software</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('asesoria', 'redes-sociales')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4" />
                        <span>Ayuda redes sociales y apps</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('asesoria', 'locutorio')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Headphones className="w-4 h-4" />
                        <span>Servicios de locutorio</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('asesoria', 'capacitaciones')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>Capacitaciones</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* MARKETING */}
              <div 
                className="relative nav-menu-item"
                onMouseEnter={() => setActiveSubmenu('marketing')}
              >
                <button 
                  className="text-xs lg:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap px-2 lg:px-3 py-2 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 flex items-center space-x-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveSubmenu(activeSubmenu === 'marketing' ? null : 'marketing')
                  }}
                >
                  <span>MARKETING</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {/* Submenú posicionado debajo del botón */}
                <div 
                  className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                    activeSubmenu === 'marketing' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setActiveSubmenu('marketing')}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <div className="py-1">
                    <button 
                      onClick={() => handleServiceClick('marketing', 'diseno-grafico')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Palette className="w-4 h-4" />
                        <span>Diseño gráfico</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('marketing', 'modelismo')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>Modelismo en papel</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('marketing', 'corner-latino')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Store className="w-4 h-4" />
                        <span>Corner Latino</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* INTERIORISMO */}
              <div 
                className="relative nav-menu-item"
                onMouseEnter={() => setActiveSubmenu('interiorismo')}
              >
                <button 
                  className="text-xs lg:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap px-2 lg:px-3 py-2 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 flex items-center space-x-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveSubmenu(activeSubmenu === 'interiorismo' ? null : 'interiorismo')
                  }}
                >
                  <span>INTERIORISMO</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {/* Submenú posicionado debajo del botón */}
                <div 
                  className={`absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                    activeSubmenu === 'interiorismo' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setActiveSubmenu('interiorismo')}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <div className="py-1">
                    <button 
                      onClick={() => handleServiceClick('interiorismo', 'interiores')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Home className="w-4 h-4" />
                        <span>Proyecto de interiores</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('interiorismo', 'exteriores')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Trees className="w-4 h-4" />
                        <span>Proyecto de exteriores</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('interiorismo', 'modelado-3d')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-4 h-4" />
                        <span>Modelación 3D de proyectos</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('interiorismo', 'asesoria-ejecutiva')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>Asesoría ejecutiva</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* TIENDA */}
              <div 
                className="relative nav-menu-item"
                onMouseEnter={() => setActiveSubmenu('tienda')}
              >
                <button 
                  className="text-xs lg:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap px-2 lg:px-3 py-2 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 flex items-center space-x-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveSubmenu(activeSubmenu === 'tienda' ? null : 'tienda')
                  }}
                >
                  <span>TIENDA</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {/* Submenú posicionado debajo del botón */}
                <div 
                  className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                    activeSubmenu === 'tienda' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setActiveSubmenu('tienda')}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <div className="py-1">
                    <button 
                      onClick={() => handleServiceClick('tienda', 'diseno-digital')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Palette className="w-4 h-4" />
                        <span>Diseño gráfico</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('tienda', 'modelismo-digital')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>Modelismo en papel</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('tienda', 'corner-digital')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Store className="w-4 h-4" />
                        <span>Corner Latino</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* AYUDA */}
              <div 
                className="relative nav-menu-item"
                onMouseEnter={() => setActiveSubmenu('ayuda')}
              >
                <button 
                  className="text-xs lg:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap px-2 lg:px-3 py-2 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 flex items-center space-x-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveSubmenu(activeSubmenu === 'ayuda' ? null : 'ayuda')
                  }}
                >
                  <span>AYUDA</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {/* Submenú posicionado debajo del botón */}
                <div 
                  className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                    activeSubmenu === 'ayuda' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setActiveSubmenu('ayuda')}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <div className="py-1">
                    <button 
                      onClick={() => handleServiceClick('ayuda', 'centro-ayuda')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <HelpCircle className="w-4 h-4" />
                        <span>Centro de ayuda</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('ayuda', 'contacto-tecnico')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <PhoneCall className="w-4 h-4" />
                        <span>Contacto técnico</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('ayuda', 'faqs')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <HelpCircle className="w-4 h-4" />
                        <span>FAQs</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('ayuda', 'tutoriales')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Monitor className="w-4 h-4" />
                        <span>Tutoriales</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleServiceClick('ayuda', 'soporte-remoto')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4" />
                        <span>Soporte remoto</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/banner-bg.jpg" 
            alt="Servicios de impresión"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="bg-red-600 inline-block px-8 py-6 rounded-lg shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Especialistas en cartelería, impresiones, asesoría, marketing digital, sublimación, modelado 3D e interiorismo
              </h2>
              <p className="text-xl lg:text-2xl">
                Transformamos tus ideas en experiencias únicas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPRESIONES y vinilos Section */}
      <section id="impresiones" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              IMPRESIONES y <span className="text-red-600">vinilos</span>
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones de impresión digital de alta calidad para todas tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printingServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSTELERÍA Section */}
      <section id="hosteleria" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              HOSTELERÍA <span className="text-red-600">(insumos)</span>
            </h2>
            <p className="text-lg text-gray-600">
              Productos y suministros especializados para el sector hostelero
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalitySupplies.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASESORÍA y SOPORTE Section */}
      <section id="asesoria" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ASESORÍA y <span className="text-red-600">SOPORTE</span>
            </h2>
            <p className="text-lg text-gray-600">
              Servicios profesionales de consultoría y soporte técnico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETING DIGITAL Section */}
      <section id="marketing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              MARKETING <span className="text-red-600">DIGITAL</span>
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones creativas de marketing y diseño digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERIORISMO Section */}
      <section id="interiorismo" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              INTERIORISMO <span className="text-red-600">(modelaje 3D)</span>
            </h2>
            <p className="text-lg text-gray-600">
              Diseño de interiores y visualización 3D profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interiorServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIENDA ONLINE Section */}
      <section id="tienda" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              TIENDA <span className="text-red-600">ONLINE</span>
            </h2>
            <p className="text-lg text-gray-600">
              Productos digitales y servicios disponibles online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onlineStoreProducts.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AYUDA Section */}
      <section id="ayuda" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-red-600">AYUDA</span>
            </h2>
            <p className="text-lg text-gray-600">
              Recursos y soporte para resolver todas tus dudas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpResources.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Otros <span className="text-red-600">Servicios</span>
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones integrales para todas tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-lg ${service.color}`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <button className="flex items-center text-red-600 font-medium hover:text-red-700 transition-colors">
                    Más información
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lo más <span className="text-red-600">Destacado</span>
            </h2>
            <p className="text-lg text-gray-600">
              Productos populares de nuestra tienda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.rating})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-600">
                      {product.price}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Truck className="w-4 h-4 mr-1" />
                      Envío gratis
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleAddToCart(product.id)}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors transform hover:scale-105"
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-red-400">Contáctanos</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-red-400" />
                  <span>+34 971 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-red-400" />
                  <span>info@bocetoslillesbalears.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-red-400 mt-1" />
                  <span>Calle Principal 123, 07001 Palma de Mallorca, Illes Balears</span>
                </div>
              </div>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-red-400">Soporte</h3>
              <div className="space-y-3">
                <a href="#" className="block hover:text-red-400 transition-colors">
                  Política de privacidad
                </a>
                <a href="#" className="block hover:text-red-400 transition-colors">
                  Política de devoluciones
                </a>
                <a href="#" className="block hover:text-red-400 transition-colors">
                  Términos y condiciones
                </a>
                <a href="#" className="block hover:text-red-400 transition-colors">
                  Preguntas frecuentes
                </a>
                <a href="#" className="block hover:text-red-400 transition-colors">
                  Centro de ayuda
                </a>
              </div>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-red-400">Nosotros</h3>
              <p className="mb-6 text-gray-300">
                Suscríbete a nuestro boletín para recibir las últimas noticias y ofertas exclusivas.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Boceto SL Illes Balears. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}