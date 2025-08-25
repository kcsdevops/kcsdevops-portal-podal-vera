'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Book, 
  Shield, 
  Heart, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  User,
  Stethoscope,
  FileText,
  Download,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function EducacaoPodologica() {
  const [topicoAtivo, setTopicoAtivo] = useState('cuidados-diarios')

  const topicos = [
    {
      id: 'cuidados-diarios',
      titulo: 'Cuidados Diários',
      icone: Heart,
      conteudo: {
        introducao: 'Os cuidados diários com os pés são fundamentais para prevenir problemas e manter a saúde podológica.',
        pontos: [
          'Lave os pés diariamente com água morna e sabão neutro',
          'Seque bem entre os dedos para evitar umidade',
          'Hidrate os pés com creme específico, evitando entre os dedos',
          'Use meias limpas e de algodão ou materiais respiráveis',
          'Examine seus pés diariamente procurando alterações',
          'Corte as unhas em linha reta, sem arredondar os cantos'
        ],
        dicas: [
          'Use sapatos confortáveis e do tamanho correto',
          'Alterne os calçados para permitir que sequem',
          'Evite andar descalço em locais públicos',
          'Mantenha os pés secos e arejados sempre que possível'
        ]
      }
    },
    {
      id: 'prevencao',
      titulo: 'Prevenção de Problemas',
      icone: Shield,
      conteudo: {
        introducao: 'A prevenção é a melhor forma de evitar complicações podológicas. Pequenos cuidados fazem grande diferença.',
        pontos: [
          'Mantenha sempre os pés limpos e secos',
          'Use calçados adequados para cada atividade',
          'Evite compartilhar objetos de manicure/pedicure',
          'Procure atendimento profissional regularmente',
          'Mantenha o peso corporal adequado',
          'Pratique exercícios para fortalecer os pés'
        ],
        dicas: [
          'Pessoas com diabetes devem ter cuidados redobrados',
          'Use protetor solar nos pés quando expostos',
          'Evite tratamentos caseiros em problemas graves',
          'Procure orientação profissional sempre que houver dúvidas'
        ]
      }
    },
    {
      id: 'sinais-alerta',
      titulo: 'Sinais de Alerta',
      icone: AlertTriangle,
      conteudo: {
        introducao: 'Reconhecer os sinais de alerta é crucial para buscar tratamento adequado no momento certo.',
        pontos: [
          'Dor persistente ou que piora progressivamente',
          'Inchaço, vermelhidão ou calor excessivo',
          'Feridas que não cicatrizam em 2-3 semanas',
          'Mudanças na cor ou formato das unhas',
          'Perda de sensibilidade ou formigamento',
          'Presença de pus ou odor forte'
        ],
        dicas: [
          'Não ignore sintomas persistentes',
          'Diabéticos devem ser especialmente vigilantes',
          'Procure ajuda profissional imediatamente em casos graves',
          'Documente mudanças com fotos se necessário'
        ]
      }
    },
    {
      id: 'quando-procurar',
      titulo: 'Quando Procurar um Podólogo',
      icone: Stethoscope,
      conteudo: {
        introducao: 'Saber quando buscar ajuda profissional pode prevenir complicações sérias e garantir tratamento adequado.',
        pontos: [
          'Presença de calos ou calosidades dolorosas',
          'Unhas encravadas ou inflamações',
          'Suspeita de micoses ou infecções',
          'Deformidades nos pés ou dedos',
          'Dor crônica ou limitação de movimento',
          'Necessidade de cuidados preventivos (diabéticos)'
        ],
        dicas: [
          'Não espere o problema se agravar para buscar ajuda',
          'Mantenha consultas regulares para prevenção',
          'Procure profissionais qualificados e registrados',
          'Leve todas as suas dúvidas e preocupações à consulta'
        ]
      }
    }
  ]

  const problemasComuns = [
    {
      nome: 'Micoses',
      sintomas: ['Coceira', 'Descamação', 'Odor', 'Vermelhidão'],
      prevencao: ['Manter pés secos', 'Usar calçados respiráveis', 'Não andar descalço em locais úmidos']
    },
    {
      nome: 'Calos e Calosidades',
      sintomas: ['Espessamento da pele', 'Dor ao pressionar', 'Aspecto amarelado'],
      prevencao: ['Calçados adequados', 'Hidratação regular', 'Evitar pressão excessiva']
    },
    {
      nome: 'Unhas Encravadas',
      sintomas: ['Dor no canto da unha', 'Vermelhidão', 'Inchaço', 'Possível infecção'],
      prevencao: ['Corte correto das unhas', 'Calçados largos', 'Evitar traumatismos']
    },
    {
      nome: 'Pé de Atleta',
      sintomas: ['Coceira intensa', 'Rachaduras entre dedos', 'Descamação', 'Odor'],
      prevencao: ['Secar bem os pés', 'Trocar meias diariamente', 'Usar chinelos em vestiários']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Site
            </Link>
            
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Book className="w-4 h-4" />
              <span>Centro Educativo</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Educação em Podologia
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Aprenda sobre cuidados podológicos, prevenção de problemas e quando buscar ajuda profissional. 
              Conhecimento é saúde para seus pés.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">Dra. Vera Lúcia</span>
                </div>
                <p className="text-sm text-white/80">Podóloga Especialista</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Conteúdo Científico</span>
                </div>
                <p className="text-sm text-white/80">Baseado em Evidências</p>
              </div>
              <a
                href="/GUIA_COMPLETO_CUIDADOS_PODOLOGICOS.md"
                download="Guia_Completo_Cuidados_Podologicos_VERACARE.md"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg px-6 py-3 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Baixar Guia Completo</span>
                </div>
                <p className="text-sm text-white/80">PDF Educativo Gratuito</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navegação de Tópicos */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {topicos.map((topico) => (
              <button
                key={topico.id}
                onClick={() => setTopicoAtivo(topico.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  topicoAtivo === topico.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                <topico.icone className="w-4 h-4" />
                <span>{topico.titulo}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo dos Tópicos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {topicos.map((topico) => (
            topicoAtivo === topico.id && (
              <div key={topico.id} className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                    <topico.icone className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{topico.titulo}</h2>
                  <p className="text-lg text-gray-600">{topico.conteudo.introducao}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Pontos Principais */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Pontos Principais
                    </h3>
                    <ul className="space-y-3">
                      {topico.conteudo.pontos.map((ponto, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-gray-600">{ponto}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dicas Extras */}
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Eye className="w-5 h-5 text-primary-600 mr-2" />
                      Dicas Importantes
                    </h3>
                    <ul className="space-y-3">
                      {topico.conteudo.dicas.map((dica, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{dica}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Problemas Comuns */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Problemas Podológicos Comuns</h2>
            <p className="text-lg text-gray-600">Conheça os principais problemas que afetam os pés e como preveni-los</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemasComuns.map((problema, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{problema.nome}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Sintomas:</h4>
                  <ul className="space-y-1">
                    {problema.sintomas.map((sintoma, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                        {sintoma}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Prevenção:</h4>
                  <ul className="space-y-1">
                    {problema.prevencao.map((prev, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                        {prev}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Ajuda Profissional?</h2>
          <p className="text-xl text-white/90 mb-8">
            Nossa equipe está pronta para cuidar da saúde dos seus pés com técnicas modernas e seguras.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5511967381029?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Agendar Consulta
            </a>
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Voltar ao Site
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
