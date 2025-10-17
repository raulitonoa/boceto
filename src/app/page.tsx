'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, ShoppingCart, User, Phone, Mail, ChevronDown, Package, Store, Image, FileText, Printer, Shirt, Camera, Sticker, Coffee, Box, ShoppingBag, Home, Trees, Cpu, Users, Palette } from 'lucide-react'

export default function BocetoSLLanding() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [menuPositions, setMenuPositions] = useState<Record<string, { top: number; left: number }>>({})
  const menuRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null)
    } else {
      // Calcular posición del menú
      const button = menuRefs.current[menu]
      if (button) {
        const rect = button.getBoundingClientRect()
        setMenuPositions(prev => ({
          ...prev,
          [menu]: {
            top: rect.bottom,
            left: rect.left
          }
        }))
      }
      setActiveMenu(menu)
    }
  }

  const closeAllMenus = () => {
    setActiveMenu(null)
  }

  // Servicios de impresión
  const impresionesItems = [
    { icon: <Image className="w-4 h-4" />, label: 'Impresión digital gran formato', id: 'gran-formato' },
    { icon: <FileText className="w-4 h-4" />, label: 'Impresión digital mediano formato', id: 'mediano-formato' },
    { icon: <Printer className="w-4 h-4" />, label: 'Impresión digital pequeño formato', id: 'pequeno-formato' },
    { icon: <Shirt className="w-4 h-4" />, label: 'Impresión textil', id: 'textil' },
    { icon: <Camera className="w-4 h-4" />, label: 'Fotografía y fotocuadros', id: 'fotografia' },
    { icon: <Sticker className="w-4 h-4" />, label: 'Vinilos rotulados', id: 'vinilos' },
    { icon: <Coffee className="w-4 h-4" />, label: 'Impresión en cerámica', id: 'ceramica' }
  ]

  // Servicios de hostelería
  const hosteleriaItems = [
    { icon: <Box className="w-4 h-4" />, label: 'Envases', id: 'envases' },
    { icon: <Package className="w-4 h-4" />, label: 'Cajas de pizzas', id: 'cajas-pizzas' },
    { icon: <Box className="w-4 h-4" />, label: 'Cajas de alimentos', id: 'cajas-alimentos' },
    { icon: <ShoppingBag className="w-4 h-4" />, label: 'Bolsas', id: 'bolsas' },
    { icon: <Coffee className="w-4 h-4" />, label: 'Pajillas', id: 'pajillas' }
  ]



  // Servicios de interiorismo
  const interiorismoItems = [
    { icon: <Home className="w-4 h-4" />, label: 'Proyecto de interiores', id: 'interiores' },
    { icon: <Trees className="w-4 h-4" />, label: 'Proyecto de exteriores', id: 'exteriores' },
    { icon: <Cpu className="w-4 h-4" />, label: 'Modelación 3D de proyectos', id: 'modelado-3d' },
    { icon: <Users className="w-4 h-4" />, label: 'Asesoría ejecutiva de proyectos', id: 'asesoria-ejecutiva' }
  ]

  // Tienda online
  const tiendaItems = [
    { icon: <Palette className="w-4 h-4" />, label: 'Diseño gráfico', id: 'diseno-digital' },
    { icon: <FileText className="w-4 h-4" />, label: 'Modelismo en papel', id: 'modelismo-digital' },
    { icon: <Store className="w-4 h-4" />, label: 'Corner Latino', id: 'corner-digital' }
  ]



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex space-x-6">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +34 971 123 456
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@bocetoslillesbalears.com
              </span>
            </div>
            <span>Illes Balears</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/boceto-logo.png" 
                alt="Boceto SL Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Boceto SL <span className="text-red-600">Illes Balears</span>
                </h1>
              </div>
            </div>

            {/* Search */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar productos, servicios..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cart and User */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-red-600">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white">
                <User className="w-4 h-4" />
                <span className="hidden md:inline">Iniciar sesión</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-200 relative">
            <div className="flex items-center justify-center space-x-6 py-3 overflow-x-auto">
              
              {/* IMPRESIONES */}
              <div className="relative">
                <button
                  ref={(el) => menuRefs.current['impresiones'] = el}
                  onClick={() => toggleMenu('impresiones')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <span>IMPRESIONES</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeMenu === 'impresiones' && menuPositions.impresiones && (
                  <div 
                    className="w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                    style={{
                      position: 'fixed',
                      top: `${menuPositions.impresiones.top}px`,
                      left: `${menuPositions.impresiones.left}px`
                    }}
                  >
                    {impresionesItems.map((item) => (
                      <button
                        key={item.id}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* HOSTELERÍA */}
              <div className="relative">
                <button
                  ref={(el) => menuRefs.current['hosteleria'] = el}
                  onClick={() => toggleMenu('hosteleria')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <span>HOSTELERÍA</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeMenu === 'hosteleria' && menuPositions.hosteleria && (
                  <div 
                    className="w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                    style={{
                      position: 'fixed',
                      top: `${menuPositions.hosteleria.top}px`,
                      left: `${menuPositions.hosteleria.left}px`
                    }}
                  >
                    {hosteleriaItems.map((item) => (
                      <button
                        key={item.id}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>



              {/* INTERIORISMO */}
              <div className="relative">
                <button
                  ref={(el) => menuRefs.current['interiorismo'] = el}
                  onClick={() => toggleMenu('interiorismo')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <span>INTERIORISMO</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeMenu === 'interiorismo' && menuPositions.interiorismo && (
                  <div 
                    className="w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                    style={{
                      position: 'fixed',
                      top: `${menuPositions.interiorismo.top}px`,
                      left: `${menuPositions.interiorismo.left}px`
                    }}
                  >
                    {interiorismoItems.map((item) => (
                      <button
                        key={item.id}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* TIENDA */}
              <div className="relative">
                <button
                  ref={(el) => menuRefs.current['tienda'] = el}
                  onClick={() => toggleMenu('tienda')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <span>TIENDA</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeMenu === 'tienda' && menuPositions.tienda && (
                  <div 
                    className="w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                    style={{
                      position: 'fixed',
                      top: `${menuPositions.tienda.top}px`,
                      left: `${menuPositions.tienda.left}px`
                    }}
                  >
                    {tiendaItems.map((item) => (
                      <button
                        key={item.id}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

  

            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Professional business workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-700/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones Integrales para tu Negocio
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Impresión digital, hostelería, interiorismo y mucho más. Todo lo que necesitas en un solo lugar con calidad profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Ver Servicios
            </button>
            <button className="px-8 py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors shadow-lg">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nuestros <span className="text-red-600">Servicios</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* IMPRESIONES */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-square">
                <img 
                  src="/printing-service.jpg" 
                  alt="Servicios de Impresión"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">IMPRESIONES</h4>
                  <p className="text-sm opacity-90">Digital, gran formato, textil y más</p>
                </div>
              </div>
            </div>

            {/* HOSTELERÍA */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-square">
                <img 
                  src="/hospitality-service.jpg" 
                  alt="Servicios de Hostelería"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">HOSTELERÍA</h4>
                  <p className="text-sm opacity-90">Envases, cajas y suministros</p>
                </div>
              </div>
            </div>

            {/* INTERIORISMO */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-square">
                <img 
                  src="/interior-design.jpg" 
                  alt="Servicios de Interiorismo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">INTERIORISMO</h4>
                  <p className="text-sm opacity-90">Diseño 3D y proyectos</p>
                </div>
              </div>
            </div>

            {/* TIENDA */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-square">
                <img 
                  src="/online-store.jpg" 
                  alt="Tienda Online"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">TIENDA</h4>
                  <p className="text-sm opacity-90">Productos digitales y más</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Otros Servicios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Otros <span className="text-red-600">Servicios</span>
          </h3>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3]">
                <img 
                  src="/latin-products.jpg" 
                  alt="Espacio de productos latinos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-center">Espacio de productos latinos</h4>
                <p className="text-gray-600 text-center">Variedad de productos latinoamericanos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Lo más <span className="text-red-600">destacado</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/pizza-box.jpg" 
                  alt="Caja de Pizza 40x40"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Caja de Pizza 40x40</h4>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">Más vendido</span>
                </div>
                <p className="text-gray-600 mb-4">Perfecta para pizzerías, resistente y de calidad superior</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">12.50€</span>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/custom-mug.jpg" 
                  alt="Taza Personalizada"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Taza Personalizada</h4>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">Personalizable</span>
                </div>
                <p className="text-gray-600 mb-4">Tazas cerámica premium con tus diseños personalizados</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">8.95€</span>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/airplane-model.jpg" 
                  alt="Revista/Modelo Avión"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Revista/Modelo Avión</h4>
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">Nuevo</span>
                </div>
                <p className="text-gray-600 mb-4">Modelos detallados para entusiastas de la aviación</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">15.00€</span>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a más de 5000 clientes que ya confían en Boceto SL para sus soluciones integrales de negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg">
              Solicitar Presupuesto
            </button>
            <button className="px-8 py-4 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors shadow-lg text-lg">
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Sobre <span className="text-red-600">Boceto SL</span>
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Con más de 15 años de experiencia en el sector, Boceto SL se ha consolidado como líder en soluciones integrales para empresas en Illes Balears. Nuestro compromiso con la calidad y la innovación nos permite ofrecer servicios adaptados a las necesidades de cada cliente.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Contamos con un equipo de profesionales altamente cualificados que combinan creatividad y tecnología para entregar resultados excepcionales en impresión digital, hostelería, interiorismo y servicios digitales.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
                  <div className="text-gray-600">Clientes satisfechos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/team-meeting.jpg" 
                alt="Equipo profesional de Boceto SL"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold mb-1">Calidad Garantizada</div>
                <div className="text-sm">Certificación ISO 9001</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Boceto SL</h4>
              <p className="text-gray-400">Soluciones integrales para empresas y particulares en Illes Balears.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +34 971 123 456
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@bocetoslillesbalears.com
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Soporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-white">Contacto técnico</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Sobre Nosotros</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Nuestra historia</a></li>
                <li><a href="#" className="hover:text-white">Misión y visión</a></li>
                <li><a href="#" className="hover:text-white">Trabaja con nosotros</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Boceto SL Illes Balears. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Click outside to close menus */}
      {activeMenu && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={closeAllMenus}
        />
      )}
    </div>
  )
}