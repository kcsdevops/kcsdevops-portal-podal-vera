'use client'

import { Calendar, CheckCircle, Users, Award } from 'lucide-react'

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            <span>Nossa Experiência</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Excelência em Podologia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Oferecemos cuidados podológicos profissionais com foco na sua saúde e bem-estar. 
            Nossa experiência garante tratamentos seguros e eficazes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              500+
            </div>
            <div className="text-gray-600">Pacientes Atendidos</div>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              98%
            </div>
            <div className="text-gray-600">Taxa de Satisfação</div>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              5+
            </div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Cuidar dos Seus Pés?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Agende uma consulta e descubra como podemos ajudar você a ter pés mais saudáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511967381029?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20podologia%20(10-30%20minutos)%20com%20a%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Agendar Consulta via WhatsApp
            </a>
            <a
              href="#servicos"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
