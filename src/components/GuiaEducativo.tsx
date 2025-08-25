'use client'

import { useState } from 'react'
import { Book, Clock, CheckCircle, AlertTriangle, Info, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import Link from 'next/link'

// Dados educativos dos serviços
const servicosEducativos = [
  {
    id: 1,
    nome: 'Corte de Unhas Profissional',
    duracao: '30 min',
    imagem: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
    descricao: 'Corte técnico de unhas com instrumentos esterilizados, prevenindo encravamentos e infecções.',
    
    oQueE: 'O corte de unhas profissional é um procedimento técnico realizado por podólogos qualificados para manter a saúde das unhas dos pés. Diferente do corte caseiro, utiliza técnicas específicas e instrumentos esterilizados.',
    
    comoERealizado: [
      'Higienização dos pés e instrumentos',
      'Avaliação da estrutura das unhas',
      'Corte técnico evitando cantos arredondados',
      'Acabamento com lixa apropriada',
      'Aplicação de produtos hidratantes'
    ],
    
    beneficios: [
      'Previne unhas encravadas',
      'Evita infecções',
      'Mantém formato adequado',
      'Promove crescimento saudável'
    ],
    
    frequencia: 'A cada 15-30 dias',
    
    sinaisAlerta: [
      'Unhas muito grossas ou amareladas',
      'Dor ao cortar',
      'Bordas irregulares',
      'Crescimento anormal'
    ]
  },
  
  {
    id: 2,
    nome: 'Remoção de Calos e Calosidades',
    duracao: '45 min',
    imagem: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
    descricao: 'Remoção segura e eficaz de calos, calosidades e hiperqueratose com técnicas especializadas.',
    
    oQueE: 'Calos e calosidades são espessamentos da pele causados por pressão ou atrito contínuo. O tratamento profissional remove essas formações de forma segura e eficaz.',
    
    comoERealizado: [
      'Identificação do tipo e localização dos calos',
      'Amolecimento com produtos específicos',
      'Remoção com instrumentos apropriados',
      'Desbaste gradual das camadas espessas',
      'Hidratação com cremes específicos',
      'Orientação para prevenção'
    ],
    
    beneficios: [
      'Alívio imediato da dor',
      'Melhora da aparência dos pés',
      'Prevenção de fissuras',
      'Maior conforto ao caminhar'
    ],
    
    frequencia: 'A cada 30-45 dias',
    
    sinaisAlerta: [
      'Calos muito dolorosos',
      'Presença de fissuras',
      'Sangramento',
      'Formação recorrente'
    ]
  },
  
  {
    id: 3,
    nome: 'Tratamento de Unhas Encravadas',
    duracao: '60 min',
    imagem: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
    descricao: 'Tratamento completo para unhas encravadas incluindo técnicas de reeducação ungueal.',
    
    oQueE: 'Uma unha encravada ocorre quando a borda da unha cresce para dentro da pele, causando dor, inflamação e possível infecção. É uma condição que requer tratamento especializado.',
    
    comoERealizado: [
      'Avaliação do grau de encravamento',
      'Anestesia local se necessário',
      'Remoção da porção encravada',
      'Desinfecção da área afetada',
      'Técnicas de reeducação ungueal',
      'Proteção com curativo adequado',
      'Acompanhamento para monitoramento'
    ],
    
    beneficios: [
      'Alívio imediato da dor',
      'Prevenção de infecções',
      'Correção do crescimento',
      'Evita recidivas'
    ],
    
    frequencia: 'Conforme necessidade e evolução',
    
    sinaisAlerta: [
      'Dor intensa no dedo',
      'Vermelhidão e inchaço',
      'Presença de pus',
      'Dificuldade para caminhar'
    ]
  },
  
  {
    id: 4,
    nome: 'Tratamento de Micoses e Fungos',
    duracao: '50 min',
    imagem: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
    descricao: 'Diagnóstico e tratamento especializado de micoses, onicomicoses e infecções fúngicas.',
    
    oQueE: 'Micoses são infecções causadas por fungos que afetam pés e unhas. Requerem tratamento especializado e acompanhamento profissional para erradicação completa.',
    
    comoERealizado: [
      'Diagnóstico do tipo de fungo',
      'Limpeza profunda da área',
      'Remoção de tecido infectado',
      'Aplicação de antifúngicos específicos',
      'Orientação para cuidados domiciliares',
      'Sessões de acompanhamento'
    ],
    
    beneficios: [
      'Eliminação da infecção',
      'Prevenção de propagação',
      'Melhora da aparência',
      'Alívio do desconforto'
    ],
    
    frequencia: 'Conforme protocolo específico',
    
    sinaisAlerta: [
      'Coceira persistente',
      'Mudança na cor das unhas',
      'Descamação da pele',
      'Odor forte característico'
    ]
  },
  
  {
    id: 5,
    nome: 'Pedicure Terapêutica',
    duracao: '60 min',
    imagem: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80',
    descricao: 'Pedicure completa com limpeza profunda, esfoliação, hidratação e massagem relaxante.',
    
    oQueE: 'Um tratamento completo que combina cuidados estéticos e terapêuticos, promovendo relaxamento e saúde dos pés através de técnicas especializadas.',
    
    comoERealizado: [
      'Escalda pés com sais terapêuticos',
      'Esfoliação para remoção de células mortas',
      'Limpeza profunda de unhas e cutículas',
      'Massagem relaxante e terapêutica',
      'Hidratação intensa com produtos nutritivos',
      'Acabamento opcional com esmalte'
    ],
    
    beneficios: [
      'Relaxamento profundo',
      'Melhora da circulação',
      'Hidratação intensa',
      'Prevenção de problemas',
      'Bem-estar geral'
    ],
    
    frequencia: 'A cada 30 dias',
    
    sinaisAlerta: [
      'Pés muito ressecados',
      'Fadiga nas pernas',
      'Tensão muscular',
      'Estresse acumulado'
    ]
  },
  
  {
    id: 6,
    nome: 'Cuidados com Pé Diabético',
    duracao: '75 min',
    imagem: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
    descricao: 'Atendimento especializado para diabéticos com técnicas preventivas e cuidados específicos.',
    
    oQueE: 'Atendimento especializado para pessoas com diabetes, que possuem maior risco de desenvolver complicações nos pés devido à neuropatia e problemas circulatórios.',
    
    comoERealizado: [
      'Avaliação neurológica e teste de sensibilidade',
      'Exame vascular da circulação',
      'Cuidados preventivos especializados',
      'Tratamento suave de calosidades',
      'Hidratação com produtos específicos',
      'Orientação educativa detalhada',
      'Planejamento de retornos regulares'
    ],
    
    beneficios: [
      'Prevenção de complicações',
      'Detecção precoce de problemas',
      'Manutenção da saúde dos pés',
      'Educação especializada'
    ],
    
    frequencia: 'A cada 15-30 dias',
    
    sinaisAlerta: [
      'Perda de sensibilidade',
      'Feridas que não cicatrizam',
      'Mudanças na cor da pele',
      'Dormência ou formigamento'
    ]
  }
]

export default function GuiaEducativo() {
  const [servicoSelecionado, setServicoSelecionado] = useState<number | null>(null)
  const [abaSelecionada, setAbaSelecionada] = useState('descricao')

  const toggleServico = (id: number) => {
    setServicoSelecionado(servicoSelecionado === id ? null : id)
    setAbaSelecionada('descricao')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Book className="w-4 h-4" />
            <span>Guia Educativo</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Entenda Nossos Tratamentos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça em detalhes cada serviço podológico que oferecemos. 
            Informação é o primeiro passo para cuidados adequados com seus pés.
          </p>
          
          <div className="mt-6">
            <Link
              href="/educacao"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              <Book className="w-5 h-5" />
              <span>Centro Educativo Completo</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Lista de Serviços */}
        <div className="space-y-6">
          {servicosEducativos.map((servico) => (
            <div key={servico.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header do Serviço */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleServico(servico.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={servico.imagem}
                      alt={servico.nome}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{servico.nome}</h3>
                      <p className="text-gray-600 mt-1">{servico.descricao}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-primary-600" />
                          <span className="text-primary-600">{servico.duracao}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      {servicoSelecionado === servico.id ? 'Clique para fechar' : 'Clique para saber mais'}
                    </span>
                    {servicoSelecionado === servico.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Conteúdo Expandido */}
              {servicoSelecionado === servico.id && (
                <div className="border-t border-gray-200">
                  {/* Abas */}
                  <div className="bg-gray-50 px-6 py-4">
                    <div className="flex space-x-1">
                      {[
                        { id: 'descricao', label: 'O que é', icon: Info },
                        { id: 'procedimento', label: 'Como é feito', icon: Book },
                        { id: 'beneficios', label: 'Benefícios', icon: CheckCircle },
                        { id: 'cuidados', label: 'Sinais de Alerta', icon: AlertTriangle }
                      ].map((aba) => (
                        <button
                          key={aba.id}
                          onClick={() => setAbaSelecionada(aba.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            abaSelecionada === aba.id
                              ? 'bg-primary-600 text-white'
                              : 'text-gray-600 hover:bg-white hover:text-primary-600'
                          }`}
                        >
                          <aba.icon className="w-4 h-4" />
                          <span>{aba.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conteúdo da Aba */}
                  <div className="p-6">
                    {abaSelecionada === 'descricao' && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">O que é este tratamento?</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">{servico.oQueE}</p>
                        <div className="bg-primary-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-primary-800">
                            <Clock className="w-4 h-4 inline mr-2" />
                            Frequência recomendada: {servico.frequencia}
                          </p>
                        </div>
                      </div>
                    )}

                    {abaSelecionada === 'procedimento' && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Como é realizado o procedimento?</h4>
                        <div className="space-y-3">
                          {servico.comoERealizado.map((passo, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                {index + 1}
                              </div>
                              <p className="text-gray-600">{passo}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {abaSelecionada === 'beneficios' && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefícios do tratamento</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {servico.beneficios.map((beneficio, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                              <p className="text-gray-600">{beneficio}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {abaSelecionada === 'cuidados' && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Quando procurar este tratamento?</h4>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="space-y-2">
                            {servico.sinaisAlerta.map((sinal, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                                <p className="text-yellow-800">{sinal}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                          <strong>Importante:</strong> Estes sinais indicam a necessidade de avaliação profissional. 
                          Não tente tratamentos caseiros em casos graves.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          Interessado neste tratamento?
                        </p>
                        <p className="text-lg font-semibold text-gray-800">
                          Duração: {servico.duracao}
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/5511967381029?text=Olá! Gostaria de agendar o serviço: ${servico.nome}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Agendar Agora
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dicas Gerais */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">💡 Dicas Importantes para a Saúde dos Seus Pés</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Prevenção</h4>
                <p className="text-sm opacity-90">
                  Mantenha uma rotina de cuidados preventivos diários
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Profissional</h4>
                <p className="text-sm opacity-90">
                  Sempre procure um podólogo qualificado
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Info className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Regularidade</h4>
                <p className="text-sm opacity-90">
                  Siga as orientações de frequência dos tratamentos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
