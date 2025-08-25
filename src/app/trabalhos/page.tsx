'use client'

import { useState } from 'react'
import { ArrowLeft, Calendar, MapPin, Star, Clock, X } from 'lucide-react'
import Link from 'next/link'

// Dados dos trabalhos realizados
const trabalhos = [
  {
    id: 1,
    titulo: "Estudo de Caso: Unha Encravada",
    categoria: "Unha Encravada",
    data: "2024-12-15",
    local: "Estudo Acadêmico",
    duracao: "45 min",
    descricao: "Estudo de procedimento para remoção de unha encravada com técnica avançada, aplicação de nano cosmético cicatrizante e orientações preventivas.",
    imagem: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
    resultado: "Procedimento estudado para futura aplicação clínica com foco no alívio da dor e cicatrização.",
    antes: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300",
    depois: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300"
  },
  {
    id: 2,
    titulo: "Estudo de Caso: Calosidades",
    categoria: "Calosidades",
    data: "2024-12-10",
    local: "Estudo Acadêmico",
    duracao: "30 min",
    descricao: "Estudo de remoção de calosidades plantares utilizando equipamentos de precisão e aplicação de creme nano cosmético para regeneração da pele.",
    imagem: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
    resultado: "Técnica estudada para futura aplicação clínica com foco na regeneração da pele.",
    antes: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300",
    depois: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300"
  },
  {
    id: 3,
    titulo: "Estudo de Caso: Micoses",
    categoria: "Micoses",
    data: "2024-12-05",
    local: "Estudo Acadêmico",
    duracao: "40 min",
    descricao: "Estudo de diagnóstico de micose plantar e ungueal com protocolos de tratamento específico e orientações de higiene.",
    imagem: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500",
    resultado: "Protocolo de tratamento estudado para futura aplicação clínica.",
    antes: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300",
    depois: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300"
  },
  {
    id: 4,
    titulo: "Estudo de Caso: Pé Diabético",
    categoria: "Pé Diabético",
    data: "2024-11-28",
    local: "Estudo Acadêmico",
    duracao: "60 min",
    descricao: "Estudo de avaliação de sensibilidade, circulação e cuidados específicos para paciente diabético, com orientações personalizadas.",
    imagem: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
    resultado: "Protocolo de cuidados preventivos estudado para futura aplicação.",
    antes: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300",
    depois: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300"
  },
  {
    id: 5,
    titulo: "Estudo de Caso: Verrugas Plantares",
    categoria: "Verrugas",
    data: "2024-11-20",
    local: "Estudo Acadêmico",
    duracao: "35 min",
    descricao: "Estudo de remoção de verrugas plantares com técnica minimamente invasiva e aplicação de produtos nano cosméticos para recuperação.",
    imagem: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
    resultado: "Técnica estudada para futura aplicação sem cicatrizes, com recuperação rápida.",
    antes: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300",
    depois: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300"
  },
  {
    id: 6,
    titulo: "Estudo de Caso: Cuidados Gerais",
    categoria: "Cuidados Gerais",
    data: "2024-11-15",
    local: "Estudo Acadêmico",
    duracao: "25 min",
    descricao: "Estudo de corte técnico de unhas com curvatura adequada, lixamento profissional e aplicação de fortalecedor nano cosmético.",
    imagem: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500",
    resultado: "Técnica estudada para fortalecimento de unhas e prevenção de encravamentos.",
    antes: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300",
    depois: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300"
  }
]

const categorias = ["Todos", "Unha Encravada", "Calosidades", "Micoses", "Pé Diabético", "Verrugas", "Cuidados Gerais"]

export default function TrabalhosPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")
  const [trabalhoSelecionado, setTrabalhoSelecionado] = useState<typeof trabalhos[0] | null>(null)

  const trabalhosFiltrados = categoriaAtiva === "Todos" 
    ? trabalhos 
    : trabalhos.filter(trabalho => trabalho.categoria === categoriaAtiva)

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Início
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Casos de <span className="text-primary-600">Estudo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Durante nossa formação, estudamos diversos casos e procedimentos podológicos 
              para oferecer futuramente o melhor atendimento aos nossos pacientes.
            </p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                categoriaAtiva === categoria
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de Trabalhos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trabalhosFiltrados.map((trabalho) => (
            <div
              key={trabalho.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setTrabalhoSelecionado(trabalho)}
            >
              <div className="relative">
                <img
                  src={trabalho.imagem}
                  alt={trabalho.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {trabalho.categoria}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {trabalho.titulo}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{formatarData(trabalho.data)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{trabalho.duracao}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{trabalho.local}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {trabalho.descricao}
                </p>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes */}
      {trabalhoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setTrabalhoSelecionado(null)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={trabalhoSelecionado.imagem}
                alt={trabalhoSelecionado.titulo}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {trabalhoSelecionado.categoria}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {trabalhoSelecionado.titulo}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  <span>{formatarData(trabalhoSelecionado.data)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-primary-600" />
                  <span>{trabalhoSelecionado.duracao}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                  <span>{trabalhoSelecionado.local}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Descrição do Procedimento</h3>
                <p className="text-gray-600 leading-relaxed">
                  {trabalhoSelecionado.descricao}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Resultado Obtido</h3>
                <p className="text-gray-600 leading-relaxed">
                  {trabalhoSelecionado.resultado}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Antes do Tratamento</h4>
                  <img
                    src={trabalhoSelecionado.antes}
                    alt="Antes do tratamento"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Após o Tratamento</h4>
                  <img
                    src={trabalhoSelecionado.depois}
                    alt="Após o tratamento"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
