'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, ShoppingCart, User, Phone, Mail, ChevronDown, Package, Store, CreditCard, Image, FileText, Printer, Shirt, Camera, Sticker, Coffee, Box, ShoppingBag, Calendar, PhoneCall, Monitor, Smartphone, Headphones, GraduationCap, Home, Trees, Cpu, Users, Palette, HelpCircle } from 'lucide-react'

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

  // Servicios de asesoría
  const asesoriaItems = [
    { icon: <Calendar className="w-4 h-4" />, label: 'Citas', id: 'citas' },
    { icon: <PhoneCall className="w-4 h-4" />, label: 'Líneas telefónicas', id: 'lineas-telefonicas' },
    { icon: <Monitor className="w-4 h-4" />, label: 'Asesoramiento de software', id: 'software' },
    { icon: <Smartphone className="w-4 h-4" />, label: 'Ayuda redes sociales y apps', id: 'redes-sociales' },
    { icon: <Headphones className="w-4 h-4" />, label: 'Servicios de locutorio', id: 'locutorio' },
    { icon: <GraduationCap className="w-4 h-4" />, label: 'Capacitaciones', id: 'capacitaciones' }
  ]

  // Servicios de marketing
  const marketingItems = [
    { icon: <Palette className="w-4 h-4" />, label: 'Diseño gráfico', id: 'diseno-grafico' },
    { icon: <FileText className="w-4 h-4" />, label: 'Modelismo en papel', id: 'modelismo' },
    { icon: <Store className="w-4 h-4" />, label: 'Corner Latino', id: 'corner-latino' }
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

  // Ayuda
  const ayudaItems = [
    { icon: <HelpCircle className="w-4 h-4" />, label: 'Centro de ayuda', id: 'centro-ayuda' },
    { icon: <PhoneCall className="w-4 h-4" />, label: 'Contacto técnico', id: 'contacto-tecnico' },
    { icon: <HelpCircle className="w-4 h-4" />, label: 'FAQs', id: 'faqs' },
    { icon: <Monitor className="w-4 h-4" />, label: 'Tutoriales', id: 'tutoriales' },
    { icon: <Smartphone className="w-4 h-4" />, label: 'Soporte remoto', id: 'soporte-remoto' }
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Boceto SL <span className="text-red-600">Illes Balears</span>
              </h1>
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

              {/* ASESORÍA */}
              <div className="relative">
                <button
                  ref={(el) => menuRefs.current['asesoria'] = el}
                  onClick={() => toggleMenu('asesoria')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <span>ASESORÍA</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeMenu === 'asesoria' && menuPositions.asesoria && (
                  <div 
                    className="w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                    style={{
                      position: 'fixed',
                      top: `${menuPositions.asesoria.top}px`,
                      left: `${menuPositions.asesoria.left}px`
                    }}
                  >
                    {asesoriaItems.map((item) => (
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

              {/* MARKETING */}
              <div className="relative">
                <button
                  ref={(el) => menuRefs.current['marketing'] = el}
                  onClick={() => toggleMenu('marketing')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <span>MARKETING</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeMenu === 'marketing' && menuPositions.marketing && (
                  <div 
                    className="w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                    style={{
                      position: 'fixed',
                      top: `${menuPositions.marketing.top}px`,
                      left: `${menuPositions.marketing.left}px`
                    }}
                  >
                    {marketingItems.map((item) => (
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

              {/* AYUDA */}
              <div className="relative">
                <button
                  ref={(el) => menuRefs.current['ayuda'] = el}
                  onClick={() => toggleMenu('ayuda')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <span>AYUDA</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeMenu === 'ayuda' && menuPositions.ayuda && (
                  <div 
                    className="w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
                    style={{
                      position: 'fixed',
                      top: `${menuPositions.ayuda.top}px`,
                      left: `${menuPositions.ayuda.left}px`
                    }}
                  >
                    {ayudaItems.map((item) => (
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
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones Integrales para tu Negocio
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Impresión digital, hostelería, asesoría técnica y mucho más. Todo lo que necesitas en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Servicios
            </button>
            <button className="px-8 py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Otros Servicios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Otros <span className="text-red-600">Servicios</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Custodia y entrega de paquetes</h4>
              <p className="text-gray-600">Servicio seguro de logística y entrega</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Espacio de productos latinos</h4>
              <p className="text-gray-600">Variedad de productos latinoamericanos</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Servicio de remesas a Cuba</h4>
              <p className="text-gray-600">Transferencias de dinero seguras</p>
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Package className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Caja de Pizza 40x40</h4>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">Más vendido</span>
                </div>
                <p className="text-gray-600 mb-4">Perfecta para pizzerías, resistente y de calidad</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">12.50€</span>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Coffee className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Taza Personalizada</h4>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">Personalizable</span>
                </div>
                <p className="text-gray-600 mb-4">Tazas cerámica con tus diseños personalizados</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">8.95€</span>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <FileText className="w-16 h-16 text-gray-400" />
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