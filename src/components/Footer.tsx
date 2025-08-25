'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-primary-600 text-white p-2 rounded-lg mr-3">
                <span className="text-lg font-bold">VC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">VERACARE PODÓLOGA</h3>
                <p className="text-sm text-gray-400">Podologia Profissional</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Especialista em cuidados podológicos com mais de 10 anos de experiência. 
              Sua saúde e bem-estar são nossa prioridade.
            </p>
            <div className="text-gray-500 text-xs mt-3 space-y-1">
              <p>Veralucia Trindade Santos</p>
              <p>CNPJ: 28.315.288/0001-02</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/veracare_podologa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Corte de Unhas
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Remoção de Calos
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Unhas Encravadas
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Tratamento de Micoses
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Pé Diabético
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#produtos" className="hover:text-white transition-colors">
                  Cremes Hidratantes
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-white transition-colors">
                  Óleos Antifúngicos
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-white transition-colors">
                  Esfoliantes
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-white transition-colors">
                  Kits Completos
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-white transition-colors">
                  Protetores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-400" />
                <span className="text-sm">
                  Rua Montuori, 102 - Vila Barbosa<br />
                  São Paulo - SP, CEP: 02557-011
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-400" />
                <a 
                  href="https://api.whatsapp.com/send?phone=5511967381029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  (11) 96738-1029
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-400" />
                <span className="text-sm">contato@veracare.com.br</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Horário de Funcionamento</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Seg-Sex: 8h às 18h</p>
                <p>Sáb: 8h às 12h</p>
                <p>Dom: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 VERACARE_PODOLOGA. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desenvolvido por <a href="mailto:kleidir.devops@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">Kleidir DevOps</a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
