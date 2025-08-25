'use client'

import { Scissors, Sparkles, Heart, Shield, Clock, Users } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Corte de Unhas Profissional',
    description: 'Corte técnico de unhas com instrumentos esterilizados, prevenindo encravamentos e infecções.',
    status: 'Em planejamento',
    duration: '30 min'
  },
  {
    icon: Sparkles,
    title: 'Remoção de Calos e Calosidades',
    description: 'Remoção segura e eficaz de calos, calosidades e hiperqueratose com técnicas especializadas.',
    status: 'Em planejamento',
    duration: '45 min'
  },
  {
    icon: Heart,
    title: 'Tratamento de Unhas Encravadas',
    description: 'Tratamento completo para unhas encravadas incluindo técnicas de reeducação ungueal.',
    status: 'Em planejamento',
    duration: '60 min'
  },
  {
    icon: Shield,
    title: 'Tratamento de Micoses e Fungos',
    description: 'Diagnóstico e tratamento especializado de micoses, onicomicoses e infecções fúngicas.',
    status: 'Em planejamento',
    duration: '50 min'
  },
  {
    icon: Sparkles,
    title: 'Pedicure Terapêutica',
    description: 'Pedicure completa com limpeza profunda, esfoliação, hidratação e massagem relaxante.',
    status: 'Em planejamento',
    duration: '60 min'
  },
  {
    icon: Users,
    title: 'Cuidados com Pé Diabético',
    description: 'Atendimento especializado para diabéticos com técnicas preventivas e cuidados específicos.',
    status: 'Em planejamento',
    duration: '75 min'
  },
  {
    icon: Shield,
    title: 'Tratamento de Verrugas Plantares',
    description: 'Remoção e tratamento de verrugas plantares com técnicas modernas e seguras.',
    status: 'Em planejamento',
    duration: '50 min'
  },
  {
    icon: Heart,
    title: 'Órteses e Palmilhas',
    description: 'Confecção de órteses em silicone e indicação de palmilhas para correção e alívio.',
    status: 'Em planejamento',
    duration: '90 min'
  }
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Serviços em <span className="text-primary-600">Preparação</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos planejando uma ampla gama de serviços podológicos com equipamentos modernos 
            e técnicas atualizadas. Em breve ofereceremos o melhor cuidado para seus pés.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                          {service.status}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                    <a 
                      href="https://wa.me/5511967381029?text=Olá! Gostaria de agendar uma consulta de podologia (10-30 minutos) com a especialista."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-4 bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 block text-center"
                    >
                      Falar com a Especialista
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Precisa de um Atendimento Personalizado?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco para uma avaliação completa e 
              recomendações específicas para seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511967381029?text=Olá! Gostaria de agendar uma avaliação podológica (10-30 minutos) com a especialista."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-center"
              >
                Falar com a Especialista
              </a>
              <a 
                href="https://wa.me/5511967381029?text=Olá! Gostaria de falar com a especialista sobre os serviços de podologia."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 font-medium py-2 px-6 rounded-lg transition-colors duration-200 inline-block text-center"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
