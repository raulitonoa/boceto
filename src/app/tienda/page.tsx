'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Filter, Grid, List, Heart, Star, X, Package, Truck, Shield, RefreshCw } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  badge?: string
  rating: number
  reviews: number
  description: string
  features: string[]
  inStock: boolean
}

const products: Product[] = [
  {
    id: '1',
    name: 'Caja de Pizza 40x40',
    price: 12.50,
    originalPrice: 15.00,
    image: '/pizza-box.jpg',
    category: 'packaging',
    badge: 'Más vendido',
    rating: 4.8,
    reviews: 124,
    description: 'Perfecta para pizzerías, resistente y de calidad superior',
    features: ['Material resistente', 'Tamaño 40x40cm', 'Base reforzada'],
    inStock: true
  },
  {
    id: '2',
    name: 'Taza Personalizada Premium',
    price: 8.95,
    image: '/custom-mug.jpg',
    category: 'personalization',
    badge: 'Personalizable',
    rating: 4.9,
    reviews: 89,
    description: 'Tazas cerámica premium con tus diseños personalizados',
    features: ['Cerámica de alta calidad', 'Impresión duradera', 'Lavavajillas seguro'],
    inStock: true
  },
  {
    id: '3',
    name: 'Revista/Modelo Avión',
    price: 15.00,
    image: '/airplane-model.jpg',
    category: 'printing',
    badge: 'Nuevo',
    rating: 4.7,
    reviews: 56,
    description: 'Modelos detallados para entusiastas de la aviación',
    features: ['Papel de alta calidad', 'Detalles precisos', 'Fácil montaje'],
    inStock: true
  },
  {
    id: '4',
    name: 'Tarjetas de Visita Profesionales',
    price: 25.00,
    originalPrice: 35.00,
    image: '/business-cards.jpg',
    category: 'printing',
    badge: 'Oferta',
    rating: 4.6,
    reviews: 203,
    description: 'Tarjetas de visita de alta calidad con acabado profesional',
    features: ['Papel grueso 300g', 'Acabado mate o brillante', 'Diseño personalizado'],
    inStock: true
  },
  {
    id: '5',
    name: 'Folletos y Trípticos',
    price: 45.00,
    image: '/flyers.jpg',
    category: 'printing',
    rating: 4.5,
    reviews: 167,
    description: 'Material publicitario profesional para tu negocio',
    features: ['Papel brillante', 'Impresión a doble cara', 'Varios tamaños'],
    inStock: true
  },
  {
    id: '6',
    name: 'Banners Publicitarios',
    price: 75.00,
    image: '/banners.jpg',
    category: 'printing',
    badge: 'Popular',
    rating: 4.8,
    reviews: 94,
    description: 'Banners de gran formato para eventos y publicidad',
    features: ['Material resistente', 'Impresión UV', 'Ojales incluidos'],
    inStock: true
  },
  {
    id: '7',
    name: 'Pósters Decorativos',
    price: 18.00,
    image: '/posters.jpg',
    category: 'printing',
    rating: 4.4,
    reviews: 78,
    description: 'Pósters de alta calidad para decoración o publicidad',
    features: ['Papel fotográfico', 'Colores vivos', 'Varios tamaños'],
    inStock: true
  },
  {
    id: '8',
    name: 'Vinilos Adhesivos Personalizados',
    price: 22.00,
    image: '/stickers.jpg',
    category: 'personalization',
    badge: 'Trending',
    rating: 4.7,
    reviews: 112,
    description: 'Vinilos adhesivos para negocios, vehículos o decoración',
    features: ['Vinilo de alta calidad', 'Resistente al agua', 'Corte preciso'],
    inStock: true
  }
]

const categories = [
  { id: 'all', name: 'Todos los productos', icon: Grid },
  { id: 'printing', name: 'Impresión', icon: Package },
  { id: 'packaging', name: 'Packaging', icon: Package },
  { id: 'personalization', name: 'Personalización', icon: Heart }
]

const sortOptions = [
  { id: 'featured', name: 'Destacados' },
  { id: 'price-low', name: 'Precio: Menor a mayor' },
  { id: 'price-high', name: 'Precio: Mayor a menor' },
  { id: 'rating', name: 'Mejor valorados' },
  { id: 'newest', name: 'Más nuevos' }
]

export default function TiendaPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [cartItems, setCartItems] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    )

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        // Featured - keep original order
        break
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory, sortBy, priceRange])

  const addToCart = (product: Product) => {
    setCartItems(prev => prev + 1)
    // In a real app, this would add to a cart state/context
    console.log('Added to cart:', product.name)
  }

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <div className="aspect-square">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.badge && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xl font-bold text-red-600">€{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                €{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setSelectedProduct(product)}
            className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Ver detalles
          </button>
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm flex items-center justify-center gap-1"
          >
            <ShoppingCart className="w-4 h-4" />
            Añadir
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://github.com/raulitonoa/boceto/raw/main/public/3.jpeg" 
                alt="Boceto SL Logo" 
                className="h-10 w-auto rounded-lg"
              />
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors">
                Boceto SL <span className="text-red-600">Tienda</span>
              </Link>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Cart */}
            <div className="flex items-center space-x-4">
              <Link href="/tienda" className="text-sm font-medium text-red-600 hover:text-red-700">
                Tienda
              </Link>
              <button className="relative p-2 text-gray-600 hover:text-red-600">
                <ShoppingCart className="w-6 h-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tienda Online Boceto SL
            </h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Productos profesionales de impresión y personalización para tu negocio
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Envío gratis en pedidos +50€</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Garantía de calidad</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                <span>Devoluciones 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Filtros</h2>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-6`}>
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-red-50 text-red-600 font-medium'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Rango de precio</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600">Mínimo: €{priceRange.min}</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Máximo: €{priceRange.max}</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Mostrando {filteredProducts.length} productos
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
                <p className="text-gray-600">Intenta ajustar los filtros o términos de búsqueda</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full rounded-lg"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-gray-400">({selectedProduct.reviews} reseñas)</span>
                    {selectedProduct.badge && (
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                        {selectedProduct.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Características:</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-red-600">€{selectedProduct.price.toFixed(2)}</span>
                      {selectedProduct.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          €{selectedProduct.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={() => addToCart(selectedProduct)}
                        className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Añadir al carrito
                      </button>
                      <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <Truck className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm text-gray-600">Envío gratis</span>
                      </div>
                      <div>
                        <Shield className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm text-gray-600">Garantía</span>
                      </div>
                      <div>
                        <RefreshCw className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm text-gray-600">Devoluciones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}