'use client'

import { useState } from 'react'
import { ShoppingCart, Star, Heart, Filter, Search, Package } from 'lucide-react'

const products = [
  // Kits Profissionais
  {
    id: 1,
    name: 'Kit Podal Nano Completo',
    description: 'Kit profissional completo com produtos nano tecnológicos para tratamento completo dos pés.',
    price: 'R$ 189,90',
    originalPrice: 'R$ 249,90',
    rating: 4.9,
    image: '/placeholder-product.jpg',
    category: 'Kits',
    bestseller: true,
    discount: 24
  },
  {
    id: 2,
    name: 'Kit Iniciante Podologia',
    description: 'Kit básico para quem está começando os cuidados podológicos profissionais.',
    price: 'R$ 89,90',
    originalPrice: 'R$ 119,90',
    rating: 4.7,
    image: '/placeholder-product.jpg',
    category: 'Kits',
    discount: 25
  },
  {
    id: 3,
    name: 'Kit Nano Hidratação',
    description: 'Kit especializado em hidratação profunda com tecnologia nano cosmética.',
    price: 'R$ 129,90',
    rating: 4.8,
    image: '/placeholder-product.jpg',
    category: 'Kits'
  },
  // Para Unhas
  {
    id: 4,
    name: 'Nano Fortalecedor de Unhas',
    description: 'Fórmula nano tecnológica para fortalecimento e crescimento saudável das unhas.',
    price: 'R$ 45,90',
    rating: 4.8,
    image: '/placeholder-product.jpg',
    category: 'Para Unhas'
  },
  {
    id: 5,
    name: 'Óleo Nano Cutículas',
    description: 'Óleo com nano partículas para hidratação e tratamento das cutículas.',
    price: 'R$ 32,90',
    rating: 4.6,
    image: '/placeholder-product.jpg',
    category: 'Para Unhas'
  },
  {
    id: 6,
    name: 'Base Nano Proteção',
    description: 'Base protetora com nano tecnologia para unhas mais resistentes.',
    price: 'R$ 38,90',
    rating: 4.7,
    image: '/placeholder-product.jpg',
    category: 'Para Unhas'
  },
  // Para a Pele
  {
    id: 7,
    name: 'Nano Creme Anti-Aging Pés',
    description: 'Creme com nano peptídeos para rejuvenescimento da pele dos pés.',
    price: 'R$ 69,90',
    rating: 4.9,
    image: '/placeholder-product.jpg',
    category: 'Para a Pele',
    bestseller: true
  },
  {
    id: 8,
    name: 'Nano Esfoliante Renovador',
    description: 'Esfoliante com nano cristais para renovação celular profunda.',
    price: 'R$ 54,90',
    rating: 4.7,
    image: '/placeholder-product.jpg',
    category: 'Para a Pele'
  },
  {
    id: 9,
    name: 'Sérum Nano Hidratante',
    description: 'Sérum concentrado com nano hialurônico para hidratação intensa.',
    price: 'R$ 78,90',
    rating: 4.8,
    image: '/placeholder-product.jpg',
    category: 'Para a Pele'
  },
  // Para os Pés
  {
    id: 10,
    name: 'Nano Spray Refrescante',
    description: 'Spray com nano mentol para alívio imediato e sensação refrescante.',
    price: 'R$ 35,90',
    rating: 4.6,
    image: '/placeholder-product.jpg',
    category: 'Para os Pés'
  },
  {
    id: 11,
    name: 'Nano Creme Anti-Rachaduras',
    description: 'Creme especializado com nano reparadores para calcanhares rachados.',
    price: 'R$ 49,90',
    rating: 4.8,
    image: '/placeholder-product.jpg',
    category: 'Para os Pés'
  },
  {
    id: 12,
    name: 'Nano Talco Terapêutico',
    description: 'Talco com nano antifúngicos para prevenção de micoses e odores.',
    price: 'R$ 28,90',
    rating: 4.5,
    image: '/placeholder-product.jpg',
    category: 'Para os Pés'
  }
]

const categories = ['Todos', 'Kits', 'Para Unhas', 'Para a Pele', 'Para os Pés']

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])
  const [cart, setCart] = useState<{[key: number]: number}>({})

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
    
    // Preparar mensagem para WhatsApp
    const product = products.find(p => p.id === productId)
    if (product) {
      const message = `Olá! Gostaria de saber mais sobre o produto: ${product.name} - ${product.price}`
      const whatsappUrl = `https://wa.me/5511967381029?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  const getCartCount = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0)
  }

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
            <Package className="w-5 h-5" />
            <span className="font-medium">Produtos Nano Cosméticos</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossa
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {" "}Linha Premium
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossa exclusiva linha de produtos nano cosméticos desenvolvidos 
            especialmente para cuidados profissionais e domésticos dos pés.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Counter */}
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border">
              <ShoppingCart className="w-5 h-5 text-primary-600" />
              <span className="font-medium text-gray-900">{getCartCount()}</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🧴</div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.bestseller && (
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                      Mais Vendido
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button 
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      favorites.includes(product.id) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary-600 font-medium">{product.category}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-900 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">(24 avaliações)</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 group-hover:bg-primary-700"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Consultar no WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Info Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Package className="w-8 h-8 mr-3" />
              <h3 className="text-3xl font-bold">
                Entrega Direto Para o Site
              </h3>
            </div>
            <p className="text-xl text-emerald-100 mb-6">
              Todos os nossos produtos nano cosméticos são entregues diretamente no nosso consultório para garantir máxima qualidade e frescor
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🚚</div>
                <h4 className="font-semibold mb-1">Entrega Garantida</h4>
                <p className="text-sm text-emerald-100">Produtos frescos direto do fornecedor</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🔒</div>
                <h4 className="font-semibold mb-1">Qualidade Assegurada</h4>
                <p className="text-sm text-emerald-100">Armazenamento adequado e seguro</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">💯</div>
                <h4 className="font-semibold mb-1">100% Original</h4>
                <p className="text-sm text-emerald-100">Produtos autênticos e certificados</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Dúvidas sobre nossos produtos?
          </h3>
          <p className="text-xl text-primary-100 mb-8">
            Nossa equipe especializada está pronta para ajudá-lo a escolher os melhores produtos
          </p>
          <a 
            href="https://wa.me/5511967381029?text=Olá! Gostaria de saber mais sobre os produtos nano cosméticos disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Falar com Especialista
            <ShoppingCart className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
