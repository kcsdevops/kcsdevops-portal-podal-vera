'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink, Calendar, Star } from 'lucide-react'

// Tipos para as imagens da galeria
interface GalleryImage {
  id: number
  title: string
  description: string
  category: string
  date: string
  driveId: string
  featured?: boolean
}

// Fotos reais dos trabalhos realizados - organizadas por data e tipo de tratamento
const galleryImages: GalleryImage[] = [
  // Dezembro 2024
  {
    id: 1,
    title: 'Tratamento Podológico Completo',
    description: 'Cuidados especializados realizados em dezembro',
    category: 'Tratamento Geral',
    date: '2024-12-19',
    driveId: '20241219_203816~2.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Procedimento Especializado',
    description: 'Resultado após tratamento profissional',
    category: 'Tratamento Geral',
    date: '2024-12-19',
    driveId: '20241219_223052~2.jpg'
  },

  // Março 2025
  {
    id: 3,
    title: 'Cuidados Detalhados dos Pés',
    description: 'Procedimento realizado em março com excelentes resultados',
    category: 'Tratamento Geral',
    date: '2025-03-07',
    driveId: 'IMG_20250307_154854.jpg'
  },
  {
    id: 4,
    title: 'Tratamento Especializado',
    description: 'Cuidados profissionais com técnicas avançadas',
    category: 'Tratamento Geral',
    date: '2025-03-07',
    driveId: 'IMG_20250307_154858.jpg'
  },
  {
    id: 5,
    title: 'Resultado Final do Tratamento',
    description: 'Pés saudáveis após procedimento completo',
    category: 'Antes e Depois',
    date: '2025-03-07',
    driveId: 'IMG_20250307_154902.jpg'
  },
  {
    id: 6,
    title: 'Procedimento Avançado',
    description: 'Técnicas especializadas em podologia',
    category: 'Tratamento Geral',
    date: '2025-03-10',
    driveId: 'IMG_20250310_162429.jpg'
  },
  {
    id: 7,
    title: 'Cuidados Profissionais',
    description: 'Resultado de tratamento especializado',
    category: 'Tratamento Geral',
    date: '2025-03-10',
    driveId: 'IMG_20250310_162444.jpg'
  },

  // Abril 2025
  {
    id: 8,
    title: 'Tratamento Complexo',
    description: 'Procedimento detalhado realizado em abril',
    category: 'Tratamento Especializado',
    date: '2025-04-08',
    driveId: 'IMG_20250408_173117~2.jpg',
    featured: true
  },
  {
    id: 9,
    title: 'Cuidados Noturnos',
    description: 'Atendimento especializado em horário diferenciado',
    category: 'Tratamento Geral',
    date: '2025-04-08',
    driveId: 'IMG_20250408_205255.jpg'
  },
  {
    id: 10,
    title: 'Procedimento Matinal',
    description: 'Início de tratamento com excelente prognóstico',
    category: 'Tratamento Geral',
    date: '2025-04-14',
    driveId: 'IMG_20250414_085840.jpg'
  },

  // Maio 2025
  {
    id: 11,
    title: 'Tratamento Vespertino',
    description: 'Cuidados especializados em maio',
    category: 'Tratamento Geral',
    date: '2025-05-03',
    driveId: 'IMG_20250503_172819.jpg'
  },
  {
    id: 12,
    title: 'Procedimento Detalhado',
    description: 'Técnicas avançadas aplicadas',
    category: 'Tratamento Especializado',
    date: '2025-05-03',
    driveId: 'IMG_20250503_174816.jpg'
  },
  {
    id: 13,
    title: 'Resultado Intermediário',
    description: 'Progresso do tratamento documentado',
    category: 'Antes e Depois',
    date: '2025-05-03',
    driveId: 'IMG_20250503_174821.jpg'
  },
  {
    id: 14,
    title: 'Finalização do Procedimento',
    description: 'Últimos ajustes do tratamento',
    category: 'Tratamento Geral',
    date: '2025-05-03',
    driveId: 'IMG_20250503_181657.jpg'
  },
  {
    id: 15,
    title: 'Cuidados Finais',
    description: 'Acabamento profissional do tratamento',
    category: 'Tratamento Geral',
    date: '2025-05-03',
    driveId: 'IMG_20250503_184940.jpg'
  },
  {
    id: 16,
    title: 'Tratamento Completo',
    description: 'Procedimento abrangente realizado',
    category: 'Tratamento Especializado',
    date: '2025-05-05',
    driveId: 'IMG_20250505_134414.jpg',
    featured: true
  },
  {
    id: 17,
    title: 'Cuidados Vespertinos',
    description: 'Atendimento especializado no final da tarde',
    category: 'Tratamento Geral',
    date: '2025-05-10',
    driveId: 'IMG_20250510_170200.jpg'
  },
  {
    id: 18,
    title: 'Sequência do Tratamento',
    description: 'Continuidade dos cuidados especializados',
    category: 'Tratamento Geral',
    date: '2025-05-10',
    driveId: 'IMG_20250510_170209.jpg'
  },
  {
    id: 19,
    title: 'Procedimento Avançado',
    description: 'Técnicas especializadas aplicadas',
    category: 'Tratamento Especializado',
    date: '2025-05-10',
    driveId: 'IMG_20250510_175526.jpg'
  },
  {
    id: 20,
    title: 'Continuação do Tratamento',
    description: 'Evolução positiva documentada',
    category: 'Antes e Depois',
    date: '2025-05-10',
    driveId: 'IMG_20250510_175527.jpg'
  },
  {
    id: 21,
    title: 'Resultado Final',
    description: 'Conclusão bem-sucedida do procedimento',
    category: 'Antes e Depois',
    date: '2025-05-10',
    driveId: 'IMG_20250510_175533.jpg',
    featured: true
  },
  {
    id: 22,
    title: 'Tratamento Especializado',
    description: 'Procedimento detalhado em maio',
    category: 'Tratamento Especializado',
    date: '2025-05-12',
    driveId: 'IMG_20250512_152154.jpg'
  },
  {
    id: 23,
    title: 'Cuidados Profissionais',
    description: 'Sequência de tratamento especializado',
    category: 'Tratamento Geral',
    date: '2025-05-12',
    driveId: 'IMG_20250512_152213.jpg'
  },
  {
    id: 24,
    title: 'Procedimento Vespertino',
    description: 'Tratamento realizado no período da tarde',
    category: 'Tratamento Geral',
    date: '2025-05-12',
    driveId: 'IMG_20250512_161938.jpg'
  },
  {
    id: 25,
    title: 'Continuidade do Cuidado',
    description: 'Evolução contínua do tratamento',
    category: 'Tratamento Geral',
    date: '2025-05-12',
    driveId: 'IMG_20250512_161945.jpg'
  },
  {
    id: 26,
    title: 'Documentação do Progresso',
    description: 'Acompanhamento detalhado da evolução',
    category: 'Antes e Depois',
    date: '2025-05-12',
    driveId: 'IMG_20250512_161957.jpg'
  },
  {
    id: 27,
    title: 'Resultado Documentado',
    description: 'Registro preciso dos resultados obtidos',
    category: 'Antes e Depois',
    date: '2025-05-12',
    driveId: 'IMG_20250512_161958.jpg'
  },
  {
    id: 28,
    title: 'Tratamento Matinal',
    description: 'Procedimento realizado pela manhã',
    category: 'Tratamento Geral',
    date: '2025-05-19',
    driveId: 'IMG_20250519_104820.jpg'
  },
  {
    id: 29,
    title: 'Cuidados Matinais',
    description: 'Início de dia com tratamento especializado',
    category: 'Tratamento Geral',
    date: '2025-05-21',
    driveId: 'IMG_20250521_084601.jpg'
  },
  {
    id: 30,
    title: 'Sequência Matinal',
    description: 'Continuidade dos cuidados especializados',
    category: 'Tratamento Geral',
    date: '2025-05-21',
    driveId: 'IMG_20250521_084618.jpg'
  },
  {
    id: 31,
    title: 'Procedimento Detalhado',
    description: 'Técnicas avançadas aplicadas',
    category: 'Tratamento Especializado',
    date: '2025-05-22',
    driveId: 'IMG_20250522_115408.jpg'
  },
  {
    id: 32,
    title: 'Cuidados Especializados',
    description: 'Atenção profissional aos detalhes',
    category: 'Tratamento Especializado',
    date: '2025-05-22',
    driveId: 'IMG_20250522_115434.jpg'
  },
  {
    id: 33,
    title: 'Tratamento Avançado',
    description: 'Aplicação de técnicas especializadas',
    category: 'Tratamento Especializado',
    date: '2025-05-22',
    driveId: 'IMG_20250522_115441.jpg'
  },
  {
    id: 34,
    title: 'Finalização Profissional',
    description: 'Conclusão com padrão de excelência',
    category: 'Antes e Depois',
    date: '2025-05-22',
    driveId: 'IMG_20250522_115544.jpg'
  },
  {
    id: 35,
    title: 'Cuidados Matinais',
    description: 'Tratamento especializado pela manhã',
    category: 'Tratamento Geral',
    date: '2025-05-23',
    driveId: 'IMG_20250523_072420.jpg'
  },
  {
    id: 36,
    title: 'Procedimento Matinal',
    description: 'Início de dia com cuidados especializados',
    category: 'Tratamento Geral',
    date: '2025-05-23',
    driveId: 'IMG_20250523_073558.jpg'
  },

  // Junho 2025
  {
    id: 37,
    title: 'Tratamento de Junho',
    description: 'Cuidados especializados no mês de junho',
    category: 'Tratamento Geral',
    date: '2025-06-02',
    driveId: 'IMG_20250602_144558.jpg'
  },
  {
    id: 38,
    title: 'Procedimento Vespertino',
    description: 'Atendimento especializado à tarde',
    category: 'Tratamento Especializado',
    date: '2025-06-02',
    driveId: 'IMG_20250602_144603.jpg',
    featured: true
  },
  {
    id: 39,
    title: 'Continuidade do Tratamento',
    description: 'Evolução positiva documentada',
    category: 'Tratamento Geral',
    date: '2025-06-02',
    driveId: 'IMG_20250602_144610.jpg'
  },
  {
    id: 40,
    title: 'Cuidados Vespertinos',
    description: 'Tratamento realizado no final da tarde',
    category: 'Tratamento Geral',
    date: '2025-06-02',
    driveId: 'IMG_20250602_161240.jpg'
  },
  {
    id: 41,
    title: 'Procedimento Detalhado',
    description: 'Atenção aos mínimos detalhes',
    category: 'Tratamento Especializado',
    date: '2025-06-02',
    driveId: 'IMG_20250602_161246.jpg'
  },
  {
    id: 42,
    title: 'Tratamento Completo',
    description: 'Procedimento abrangente realizado',
    category: 'Tratamento Especializado',
    date: '2025-06-02',
    driveId: 'IMG_20250602_161313.jpg'
  },
  {
    id: 43,
    title: 'Cuidados Especializados',
    description: 'Técnicas avançadas aplicadas',
    category: 'Tratamento Especializado',
    date: '2025-06-02',
    driveId: 'IMG_20250602_161315.jpg'
  },
  {
    id: 44,
    title: 'Resultado Final',
    description: 'Conclusão bem-sucedida do procedimento',
    category: 'Antes e Depois',
    date: '2025-06-02',
    driveId: 'IMG_20250602_161319.jpg',
    featured: true
  },
  {
    id: 45,
    title: 'Tratamento Matinal',
    description: 'Procedimento realizado pela manhã',
    category: 'Tratamento Geral',
    date: '2025-06-08',
    driveId: 'IMG_20250608_104417.jpg'
  },
  {
    id: 46,
    title: 'Cuidados Matinais',
    description: 'Início de dia com tratamento especializado',
    category: 'Tratamento Geral',
    date: '2025-06-18',
    driveId: 'IMG_20250618_084957.jpg'
  },
  {
    id: 47,
    title: 'Sequência Matinal',
    description: 'Continuidade dos cuidados profissionais',
    category: 'Tratamento Geral',
    date: '2025-06-18',
    driveId: 'IMG_20250618_085010.jpg'
  },
  {
    id: 48,
    title: 'Procedimento Especializado',
    description: 'Aplicação de técnicas avançadas',
    category: 'Tratamento Especializado',
    date: '2025-06-18',
    driveId: 'IMG_20250618_085101.jpg'
  },
  {
    id: 49,
    title: 'Tratamento Final de Junho',
    description: 'Conclusão dos cuidados do mês',
    category: 'Tratamento Geral',
    date: '2025-06-30',
    driveId: 'IMG_20250630_102950.jpg'
  },
  {
    id: 50,
    title: 'Resultado Excepcional',
    description: 'Finalização com excelência profissional',
    category: 'Antes e Depois',
    date: '2025-06-30',
    driveId: 'IMG_20250630_105342.jpg',
    featured: true
  }
]

const categories = [
  'Todos',
  'Casos de Estudo', 
  'Técnicas Avançadas',
  'Referências Visuais',
  'Destaques'
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === 'Todos' 
    ? galleryImages 
    : selectedCategory === 'Destaques'
    ? galleryImages.filter(img => img.featured)
    : galleryImages.filter(img => img.category === selectedCategory)

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
    setCurrentImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    setSelectedImage(filteredImages[prevIndex])
    setCurrentImageIndex(prevIndex)
  }

  const getImageUrl = (driveId: string) => {
    // Mapeamento completo de imagens específicas para demonstração
    const imageMap: { [key: string]: string } = {
      // Dezembro 2024
      '20241219_203816~2.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
      '20241219_223052~2.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
      
      // Março 2025
      'IMG_20250307_154854.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
      'IMG_20250307_154858.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
      'IMG_20250307_154902.jpg': 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80',
      'IMG_20250310_162429.jpg': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=80',
      'IMG_20250310_162444.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
      
      // Abril 2025
      'IMG_20250408_173117~2.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
      'IMG_20250408_205255.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
      'IMG_20250414_085840.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
      
      // Maio 2025
      'IMG_20250503_172819.jpg': 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80',
      'IMG_20250503_174816.jpg': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=80',
      'IMG_20250503_174821.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
      'IMG_20250503_181657.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
      'IMG_20250503_184940.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
      'IMG_20250505_134414.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
      'IMG_20250510_170200.jpg': 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80',
      'IMG_20250510_170209.jpg': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=80',
      'IMG_20250510_175526.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
      'IMG_20250510_175527.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
      
      // Junho 2025
      'IMG_20250601_102334.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
      'IMG_20250601_102355.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
      'IMG_20250601_102402.jpg': 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80',
      'IMG_20250607_145523.jpg': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=80',
      'IMG_20250607_145528.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
      'IMG_20250607_145600.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
      'IMG_20250614_191045.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
      'IMG_20250614_191050.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
      'IMG_20250614_191055.jpg': 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80',
      'IMG_20250617_154130.jpg': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=80',
      'IMG_20250617_154135.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
      'IMG_20250621_090215.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
      'IMG_20250621_090220.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
      'IMG_20250621_090225.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
      'IMG_20250621_090232.jpg': 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80',
      'IMG_20250621_090238.jpg': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=80',
      'IMG_20250628_173402.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
      'IMG_20250628_173407.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
      'IMG_20250628_173412.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80'
    }
    
    // Retorna a imagem mapeada ou uma imagem padrão se não encontrar
    return imageMap[driveId] || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Material de Estudo</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Casos de Estudo e Referências
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Durante nossa formação, compilamos diversos casos de estudo e referências 
            que servirão como base para nossos futuros atendimentos profissionais.
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Atualizações: Dezembro 2024 - Junho 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>{galleryImages.length} procedimentos documentados</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              {category}
              {category === 'Destaques' && (
                <span className="ml-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full">
                  ⭐
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {galleryImages.length}
            </div>
            <div className="text-gray-600">Procedimentos Realizados</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-secondary-600 mb-2">
              {galleryImages.filter(img => img.featured).length}
            </div>
            <div className="text-gray-600">Casos de Destaque</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              7+
            </div>
            <div className="text-gray-600">Meses Documentados</div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              {/* Featured Badge */}
              {image.featured && (
                <div className="absolute top-3 left-3 z-10 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                  ⭐ Destaque
                </div>
              )}
              
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={getImageUrl(image.driveId)}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(image.date)}
                  </span>
                </div>
                
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                  {image.title}
                </h3>
                
                <p className="text-xs text-gray-600 line-clamp-2">
                  {image.description}
                </p>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">Clique para ampliar</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-full">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={getImageUrl(selectedImage.driveId)}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(selectedImage.date)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h3>
                
                <p className="text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
