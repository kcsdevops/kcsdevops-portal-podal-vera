'use client'

import { Award, Users, Clock, Heart } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '300+',
    label: 'Clientes Atendidos'
  },
  {
    icon: Clock,
    number: '7+',
    label: 'Anos de Atuação'
  },
  {
    icon: Award,
    number: '100%',
    label: 'Satisfação'
  },
  {
    icon: Heart,
    number: '800+',
    label: 'Tratamentos Realizados'
  }
]

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Sobre o <span className="text-primary-600">Projeto</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos estudantes de Podologia planejando cuidadosamente o futuro consultório. 
                Em processo de formação profissional, estamos preparando um espaço moderno 
                e acolhedor para oferecer tratamentos podológicos especializados com 
                tecnologia de ponta e máxima qualidade no atendimento.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Nossa Visão
              </h3>
              <p className="text-gray-600">
                Ser referência em cuidados podológicos na região, oferecendo atendimento 
                humanizado, técnicas atualizadas e produtos de alta qualidade para 
                promover a saúde e bem-estar dos nossos futuros pacientes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Em Preparação
              </h3>
              <p className="text-gray-600">
                • Formação acadêmica em andamento<br/>
                • Planejamento de equipamentos modernos<br/>
                • Estudos de protocolos atualizados<br/>
                • Preparação do espaço físico<br/>
                • Seleção de produtos especializados
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Nossos Valores
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Excelência no atendimento
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Segurança e higiene rigorosas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Atualização constante em técnicas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Atendimento humanizado
                </li>
              </ul>
            </div>

            {/* Professional Info */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Informações da Empresa
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">VC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Veralucia Trindade Santos</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Proprietária e Podóloga Profissional
                    </p>
                    <p className="text-gray-600 text-sm">
                      Especialista em tratamentos podológicos com mais de 10 anos de experiência, 
                      oferecendo cuidados especializados com foco em prevenção, 
                      tratamentos terapêuticos e bem-estar integral dos pés.
                    </p>
                  </div>
                </div>
                
                {/* Company Details */}
                <div className="border-t border-primary-200 pt-4 mt-4">
                  <h5 className="font-semibold text-gray-800 mb-3">Dados da Empresa</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Razão Social:</span>
                      <span className="font-medium text-gray-800">Veralucia Trindade Santos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">CNPJ:</span>
                      <span className="font-medium text-gray-800">28.315.288/0001-02</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Atividade:</span>
                      <span className="font-medium text-gray-800">Cabeleireiros, manicure e pedicure</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Situação:</span>
                      <span className="font-medium text-green-600">Ativa desde 01/08/2017</span>
                    </div>
                  </div>
                </div>
                
                {/* Location Details */}
                <div className="border-t border-primary-200 pt-4 mt-4">
                  <h5 className="font-semibold text-gray-800 mb-3">Localização</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Endereço:</span>
                      <span className="font-medium text-gray-800">Rua Montuori, 102</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bairro:</span>
                      <span className="font-medium text-gray-800">Vila Barbosa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">CEP:</span>
                      <span className="font-medium text-gray-800">02557-011</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cidade/Estado:</span>
                      <span className="font-medium text-gray-800">São Paulo - SP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            {/* Placeholder for clinic image */}
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-primary-600 text-2xl font-bold">VTS</span>
                </div>
                <p className="text-gray-600">Clínica VERACARE</p>
                <p className="text-sm text-gray-500 mt-2">
                  Veralucia Trindade Santos - Podóloga
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Certificações e Qualificações
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Formação em Podologia',
              'Curso de Especialização',
              'Certificação em Biossegurança',
              'Atualização Contínua'
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
