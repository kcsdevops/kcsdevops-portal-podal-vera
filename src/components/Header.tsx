'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, User, ShoppingCart, Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen)

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary-700 text-white py-3 px-4 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(11) 9 6738-1029</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>contato@veracare.com.br</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>São Paulo - SP</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            
            {/* Logo - com mais espaçamento */}
            <div className="flex items-center space-x-4 flex-shrink-0 mr-8">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full p-3">
                <div className="w-10 h-10 flex items-center justify-center font-bold text-xl">
                  VC
                </div>
              </div>
              <div className="ml-2">
                <h1 className="text-2xl font-bold text-gray-900 whitespace-nowrap">PODOLOGIA PROFISSIONAL</h1>
                <p className="text-sm text-gray-600">Em Formação - Breve Inauguração</p>
              </div>
            </div>

            {/* Desktop Navigation - centralizado */}
            <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center mx-8">
              <a href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Início
              </a>
              <a href="/servicos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Serviços
              </a>
              <a href="/educacao" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Educação
              </a>
              <a href="/trabalhos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Estudos
              </a>
              <a href="#produtos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Produtos
              </a>
              <a href="#tecnologia" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Tecnologia
              </a>
              <a href="#galeria" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Galeria
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Contato
              </a>
            </nav>

            {/* Desktop Actions - alinhado à direita */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <a 
                href="https://www.instagram.com/veracare_podologa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <button 
                onClick={toggleLogin}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <User size={20} />
                <span>Login</span>
              </button>
              <button className="relative flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors">
                <ShoppingCart size={20} />
                <span>Carrinho</span>
                <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <a 
                href="https://wa.me/5511967381029?text=Olá! Gostaria de agendar uma consulta de podologia (10-30 minutos) com a especialista."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                id="main-whatsapp-cta"
              >
                Agendar no WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="/" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Início
              </a>
              <a href="/servicos" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Serviços
              </a>
              <a href="/educacao" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Educação
              </a>
              <a href="/trabalhos" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Estudos
              </a>
              <a href="#produtos" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Produtos
              </a>
              <a href="#tecnologia" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Tecnologia
              </a>
              <a href="#galeria" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Galeria
              </a>
              <a href="#sobre" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                Contato
              </a>
              
              <div className="pt-4 border-t space-y-3">
                <a 
                  href="https://www.instagram.com/veracare_podologa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 py-2 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <button 
                  onClick={toggleLogin}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 py-2 transition-colors w-full text-left"
                >
                  <User size={20} />
                  <span>Login</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 py-2 transition-colors w-full text-left">
                  <ShoppingCart size={20} />
                  <span>Carrinho (0)</span>
                </button>
                <a 
                  href="https://wa.me/5511967381029?text=Olá! Gostaria de agendar uma consulta de podologia (10-30 minutos) com a especialista."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
                >
                  Falar com a Especialista
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Login</h2>
              <button 
                onClick={toggleLogin}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">Lembrar-me</span>
                </label>
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                  Esqueceu a senha?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Entrar
              </button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Não tem conta? 
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium ml-1">
                    Cadastre-se
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
