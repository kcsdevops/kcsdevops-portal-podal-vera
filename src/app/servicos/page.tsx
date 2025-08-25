'use client'

import { useState } from 'react'
import { ArrowRight, Phone, Calendar, Star, Award, Users, Clock } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Corte de Unhas Profissional',
    description: 'Corte especializado com técnicas adequadas para cada tipo de unha, garantindo formato ideal e prevenção de problemas.',
    image: 'https://drive.google.com/uc?export=view&id=1wQZl0FSXyyY2OFCAY4NfrNICiVY7a1aV&export=download',
    price: 'A partir de R$ 40',
    duration: '30 min',
    benefits: ['Formato anatomicamente correto', 'Prevenção de unhas encravadas', 'Técnica especializada', 'Higienização completa']
  },
  {
    id: 2,
    title: 'Remoção de Calos e Calosidades',
    description: 'Tratamento especializado para remoção segura de calos e calosidades, devolvendo maciez e conforto aos pés.',
    image: 'https://drive.google.com/uc?export=view&id=1wQZl0FSXyyY2OFCAY4NfrNICiVY7a1aV&export=download',
    price: 'A partir de R$ 60',
    duration: '45 min',
    benefits: ['Remoção segura e eficaz', 'Alívio imediato da dor', 'Prevenção de recidivas', 'Hidratação intensiva']
  },
  {
    id: 3,
    title: 'Tratamento de Unhas Encravadas',
    description: 'Procedimento especializado para correção de unhas encravadas, eliminando dor e inflamação.',
    image: 'https://drive.google.com/uc?export=view&id=1wQZl0FSXyyY2OFCAY4NfrNICiVY7a1aV&export=download',
    price: 'A partir de R$ 80',
    duration: '60 min',
    benefits: ['Alívio imediato da dor', 'Técnica não invasiva', 'Prevenção de infecções', 'Resultados duradouros']
  },
  {
    id: 4,
    title: 'Tratamento de Micoses',
    description: 'Tratamento completo para micoses das unhas e pés com produtos antifúngicos profissionais.',
    image: 'https://drive.google.com/uc?export=view&id=1wQZl0FSXyyY2OFCAY4NfrNICiVY7a1aV&export=download',
    price: 'A partir de R$ 90',
    duration: '50 min',
    benefits: ['Produtos antifúngicos eficazes', 'Tratamento completo', 'Orientação preventiva', 'Acompanhamento contínuo']
  },
  {
    id: 5,
    title: 'Cuidados com Pé Diabético',
    description: 'Cuidados especializados para pacientes diabéticos, com protocolo específico e produtos adequados.',
    image: 'https://drive.google.com/uc?export=view&id=1wQZl0FSXyyY2OFCAY4NfrNICiVY7a1aV&export=download',
    price: 'A partir de R$ 120',
    duration: '90 min',
    benefits: ['Protocolo especializado', 'Monitoramento vascular', 'Prevenção de úlceras', 'Cuidado personalizado']
  },
  {
    id: 6,
    title: 'Hidratação e Spa dos Pés',
    description: 'Tratamento relaxante com hidratação profunda, esfoliação e massagem terapêutica.',
    image: 'https://drive.google.com/uc?export=view&id=1wQZl0FSXyyY2OFCAY4NfrNICiVY7a1aV&export=download',
    price: 'A partir de R$ 70',
    duration: '60 min',
    benefits: ['Hidratação profunda', 'Massagem relaxante', 'Esfoliação suave', 'Sensação de bem-estar']
  }
]

const stats = [
  {
    icon: Users,
    number: '800+',
    label: 'Pacientes Atendidos'
  },
  {
    icon: Award,
    number: '100%',
    label: 'Satisfação'
  },
  {
    icon: Clock,
    number: '7+',
    label: 'Anos de Experiência'
  },
  {
    icon: Star,
    number: '1200+',
    label: 'Procedimentos Realizados'
  }
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section com Foto da Proprietária */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5 text-secondary-400" />
                  <span className="text-secondary-400 font-medium">Profissional Certificada</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Serviços
                  <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
                    {" "}Especializados
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Cuidados profissionais para a saúde e bem-estar dos seus pés. 
                  Com mais de 7 anos de experiência, oferecemos tratamentos 
                  personalizados utilizando as melhores técnicas da podologia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5511967381029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Calendar className="mr-3 w-6 h-6" />
                  Agendar Consulta
                </a>
                
                <a 
                  href="https://wa.me/5511967381029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20"
                >
                  <Phone className="mr-3 w-6 h-6" />
                  (11) 96738-1029
                </a>
              </div>
            </div>

            {/* Foto da Proprietária */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-6">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
                    <img
                      src="/images/veralucia-consultorio.jpg"
                      alt="Veralucia Trindade Santos - Proprietária VERACARE PODÓLOGA em seu consultório"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face"
                      }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Veralucia Trindade Santos
                    </h3>
                    <p className="text-primary-600 font-semibold mb-3">
                      Podóloga Profissional
                    </p>
                    <p className="text-gray-600 text-sm">
                      Especialista em cuidados podológicos com mais de 7 anos de experiência. 
                      Formação técnica e atualização constante para oferecer os melhores resultados.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços podológicos, 
              utilizando técnicas modernas e produtos de alta qualidade 
              para garantir sua saúde e bem-estar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-primary-600 font-semibold text-sm">{service.duration}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Benefícios:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                    </div>
                    <a 
                      href="https://wa.me/5511967381029"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Agendar
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Galeria de Trabalhos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Veja alguns dos nossos trabalhos e resultados alcançados
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative aspect-square rounded-lg overflow-hidden group">
                <img
                  src={`https://images.unsplash.com/photo-157609116039${item}-112ba8d25d1f?w=300&h=300&fit=crop`}
                  alt={`Trabalho ${item}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://drive.google.com/drive/folders/1wQZl0FSXyyY2OFCAY4NfrNICiVY7a1aV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Galeria Completa
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Cuidar dos Seus Pés?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Agende sua consulta hoje mesmo e descubra como nossos serviços especializados 
            podem melhorar sua qualidade de vida e bem-estar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511967381029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="mr-3 w-6 h-6" />
              WhatsApp: (11) 96738-1029
            </a>
            
            <a 
              href="mailto:contato@veracare.com.br"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20"
            >
              Email: contato@veracare.com.br
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
