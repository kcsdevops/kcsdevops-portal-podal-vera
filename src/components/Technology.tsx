'use client'

import { Microscope, Zap, Sparkles, Target, Shield, Clock } from 'lucide-react'

export default function Technology() {
  const technologies = [
    {
      icon: Microscope,
      title: 'Nano Tecnologia',
      description: 'Produtos com partículas nanométricas para penetração profunda e resultados superiores',
      benefits: ['Absorção rápida', 'Ação prolongada', 'Máxima eficácia']
    },
    {
      icon: Zap,
      title: 'Fórmulas Avançadas',
      description: 'Composições exclusivas desenvolvidas com ingredientes ativos de última geração',
      benefits: ['Resultados visíveis', 'Segurança comprovada', 'Inovação constante']
    },
    {
      icon: Sparkles,
      title: 'Tratamentos Personalizados',
      description: 'Análise detalhada para prescrever o tratamento ideal para cada necessidade',
      benefits: ['Diagnóstico preciso', 'Protocolo exclusivo', 'Acompanhamento contínuo']
    }
  ]

  const features = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Ação direcionada nas áreas que mais necessitam de cuidados'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Produtos testados e aprovados por especialistas em podologia'
    },
    {
      icon: Clock,
      title: 'Eficiência',
      description: 'Resultados visíveis em menor tempo de tratamento'
    }
  ]

  return (
    <section id="tecnologia" className="py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Inovação em Podologia</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tecnologia
            <span className="bg-gradient-to-r from-emerald-400 to-primary-400 bg-clip-text text-transparent">
              {" "}de Ponta
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Utilizamos as mais avançadas tecnologias em nano cosméticos e tratamentos 
            personalizados para proporcionar resultados excepcionais em podologia.
          </p>
        </div>

        {/* Main Technologies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
              
              <ul className="space-y-2">
                {tech.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-primary-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-primary-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Experimente Nossa Tecnologia
          </h3>
          <p className="text-xl text-emerald-100 mb-8">
            Agende uma consulta (10 a 30 minutos) e descubra como nossa tecnologia pode transformar a saúde dos seus pés
          </p>
          <a 
            href="https://wa.me/5511967381029?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20podologia%20(10-30%20minutos)%20com%20a%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Agendar Avaliação via WhatsApp
            <Zap className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
