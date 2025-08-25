'use client'

import { ArrowRight, Award, Users, Clock, CheckCircle } from 'lucide-react'
import InstagramAnimations from './InstagramAnimations'

export default function Hero() {
  return (
    <InstagramAnimations variant="hero">
      <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden pt-36 lg:pt-32">
        {/* Background Elements Animados */}
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce-gentle">
                  🎓 Em Formação - Breve Inauguração
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="inline-block animate-slide-up">Futura</span>
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-gradient-shift inline-block ml-2"> 
                  Podóloga
                </span>
                <br />
                <span className="inline-block animate-slide-up" style={{animationDelay: '0.2s'}}>Em Preparação</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
                Estudante de Podologia planejando o consultório dos sonhos! Em breve ofereceremos 
                cuidados especializados com tecnologia de ponta e produtos nano cosméticos exclusivos.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Preparação Profissional',
                  'Planejamento Completo', 
                  'Tecnologia Moderna',
                  'Foco na Qualidade'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-slide-up hover-lift" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                    <CheckCircle className="w-5 h-5 text-emerald-500 animate-pulse-soft" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://wa.me/5511967381029?text=Olá! Gostaria de agendar uma consulta de podologia (10-30 minutos) com a especialista."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover-glow animate-slide-up"
                style={{animationDelay: '1s'}}
              >
                Falar com a Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#sobre"
                className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover-lift animate-slide-up"
                style={{animationDelay: '1.2s'}}
              >
                Conheça o Projeto
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { icon: Users, value: '500+', label: 'Clientes Satisfeitos' },
                { icon: Award, value: '5+', label: 'Anos de Experiência' },
                { icon: Clock, value: '98%', label: 'Taxa de Satisfação' }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-slide-up hover-lift" style={{animationDelay: `${1.4 + index * 0.2}s`}}>
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-2 animate-pulse-soft" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-fade-in lg:animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl hover-lift">
              {/* Foto da Proprietária */}
              <div className="aspect-[4/3] bg-white rounded-2xl mb-6 overflow-hidden shadow-inner hover-glow">
                <img
                  src="/images/veralucia-consultorio.jpg"
                  alt="Veralucia Trindade Santos - VERACARE PODÓLOGA em seu consultório profissional"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=450&fit=crop&crop=face"
                  }}
                />
              </div>

              {/* Info Card sobre a Proprietária */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover-lift">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Veralucia Trindade Santos
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    Podóloga Profissional Especializada
                  </p>
                  <p className="text-sm text-gray-600">
                    Mais de 7 anos de experiência em cuidados podológicos, 
                    especialista em tecnologia nano cosmética.
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 animate-bounce-gentle hover-glow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">7+</div>
                  <div className="text-xs text-gray-600">Anos</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 animate-bounce-gentle hover-glow" style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">800+</div>
                  <div className="text-xs text-gray-600">Clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-10">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover-glow">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
    </InstagramAnimations>
  )
}
