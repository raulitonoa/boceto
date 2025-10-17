'use client'

import { useState } from 'react'
import { Search, ShoppingCart, Phone, Mail, MapPin, ChevronRight, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function ImpresionesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [email, setEmail] = useState('')

  const services = [
    {
      id: 1,
      title: 'GRAN FORMATO',
      description: 'Lonas, vinilos, cartelería de grandes dimensiones',
      image: '/large-format.jpg'
    },
    {
      id: 2,
      title: 'MEDIANO FORMATO',
      description: 'Posters, folletos, catálogos y más',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'PEQUEÑO FORMATO',
      description: 'Tarjetas, stickers, etiquetas personalizadas',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'VINILOS / ROTULADOS',
      description: 'Rotulación de vehículos, vinilos decorativos',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      title: 'TEXTIL',
      description: 'Camisetas, sudaderas, bordados personalizados',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      title: 'CERÁMICA',
      description: 'Tazas, platos, objetos cerámicos personalizados',
      image: '/ceramic-mug.jpg'
    },
    {
      id: 7,
      title: 'FOTOGRAFÍA',
      description: 'Impresión fotográfica de alta calidad',
      image: '/api/placeholder/300/200'
    }
  ]

  return (
    <div className="min-h-screen bg-white" lang="es">
      {/* Topbar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://github.com/raulitonoa/boceto/raw/main/public/3.jpeg" 
                  alt="Boceto SL Logo" 
                  className="h-12 w-auto rounded-lg"
                />
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>

            {/* Cart */}
            <div className="relative">
              <button className="relative p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Publicidad Banners */}
          <div className="flex items-center justify-between h-12 px-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center space-x-4 text-sm">
              <div className="px-3 py-1 border border-gray-300 rounded text-gray-600">
                espacio publicitario alquiler
              </div>
              <div className="px-3 py-1 border border-gray-300 rounded text-gray-600 flex items-center">
                <span className="text-xs mr-1">U1E</span>
                <span className="text-xs">💾</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="px-3 py-1 bg-blue-600 text-white rounded flex items-center">
                <span className="text-xs mr-1">🚚</span>
                PUBLICIDAD ONLINE
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* First line - MULTISERVICIOS */}
          <div className="flex items-center h-10">
            <span className="text-gray-600 font-medium border-b-2 border-red-600 pb-1">
              MULTISERVICIOS
            </span>
          </div>
          
          {/* Second line - Main menu */}
          <div className="bg-orange-500 border-b-2 border-orange-600">
            <div className="flex items-center justify-between h-10">
              <div className="hidden md:flex items-center space-x-8">
                <button className="text-white hover:underline font-medium text-sm uppercase tracking-wide">
                  IMPRESIONES Y VINILOS
                </button>
                <button className="text-white hover:underline font-medium text-sm uppercase tracking-wide">
                  HOSTELERÍA (insumos)
                </button>
                <button className="text-white hover:underline font-medium text-sm uppercase tracking-wide">
                  INTERIORISMO (modelaje 3D)
                </button>
              </div>
              <button className="text-white hover:underline font-medium text-sm uppercase tracking-wide border-b-2 border-white">
                TIENDA ONLINE
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            
            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-orange-600 border-t border-orange-700">
                <div className="py-2 space-y-1">
                  <button className="block w-full text-left px-4 py-2 text-white hover:bg-orange-700 text-sm">
                    IMPRESIONES Y VINILOS
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-white hover:bg-orange-700 text-sm">
                    HOSTELERÍA (insumos)
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-white hover:bg-orange-700 text-sm">
                    INTERIORISMO (modelaje 3D)
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-white hover:bg-orange-700 text-sm border-b-2 border-white">
                    TIENDA ONLINE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            {/* Red Ribbon */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-800 text-white p-6 shadow-lg z-10">
              <div className="max-w-3xl">
                <p className="text-lg leading-relaxed">
                  Los carteles o publicidad son parte de nuestra vida, están ahí y lo seguirán estando aunque pasen los años. 
                  Los encontrarás en muros, paradas de bus, puertas de comercios y en las casas. 
                  En Boceto SL garantizamos calidad y colores vibrantes para tus proyectos de impresión.
                </p>
              </div>
            </div>
            
            {/* Content */}
            <div className="pt-32 pb-8 px-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Servicios de Impresión Profesional
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Calidad, rapidez y precios competitivos para todos tus proyectos de impresión
                  </p>
                  <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Solicitar Presupuesto
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 rounded-lg h-80 overflow-hidden">
                    <img 
                      src="/printer-hero.jpg" 
                      alt="Impresora de alta calidad" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            imprime sencillamente con confianza
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-600 mb-4">01</div>
              <p className="text-gray-600 text-sm">
                Seleccione y suba sus documentos (sólo formato PDF)
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-red-600 mb-4">02</div>
              <p className="text-gray-600 text-sm">
                Defina las opciones de impresión
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-red-600 mb-4">03</div>
              <p className="text-gray-600 text-sm">
                ¡Paga y obtén tus trabajos en el tiempo deseado!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow hover:border-orange-300">
                <div className="bg-orange-500 h-8 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold uppercase">
                    IMPRESIÓN DIGITAL + {service.title}
                  </span>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 rounded-lg h-32 mb-4 overflow-hidden">
                    {service.image === '/api/placeholder/300/200' ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl">📄</span>
                      </div>
                    ) : (
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                    ver categorías
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contáctanos</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-red-600" />
                  <span>Llámanos: </span>
                  <span className="text-red-600 font-medium ml-1">+34 000 000 000</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-red-600 mt-1" />
                  <div className="text-sm">
                    <p>Carrer Escarrer 47, Colonia de Sant Jordi,</p>
                    <p>Ses Salines, Mallorca, Illes Balears, España.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-red-600" />
                  <span>boceto.direccion@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Soporte</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Política de Envíos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Política de Devoluciones</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Acerca de</h3>
              <p className="text-gray-600 mb-4">¿Quiere recibir nuestras promociones?</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Su email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-red-600"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded-r-lg font-medium hover:bg-red-700 transition-colors">
                  ir
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}