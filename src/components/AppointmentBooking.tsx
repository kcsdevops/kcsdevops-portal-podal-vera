'use client'

import { useState, useEffect, useCallback } from 'react'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: 'Consulta Podológica',
    notes: ''
  })

  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  // URL da API (será configurada via variável de ambiente)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-backend-url.azurecontainerapps.io'

  const serviceTypes = [
    'Consulta Podológica',
    'Tratamento de Unhas Encravadas',
    'Remoção de Calos e Calosidades',
    'Tratamento de Micoses',
    'Cuidados com Pé Diabético',
    'Avaliação Postural dos Pés',
    'Limpeza e Hidratação'
  ]

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage(text)
    setMessageType(type)
    setTimeout(() => {
      setMessage('')
      setMessageType('')
    }, 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    console.log('Input changed:', name, value) // Debug
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Carregar horários disponíveis quando a data mudar
  const loadAvailableSlots = useCallback(async (selectedDate: string) => {
    if (!selectedDate) {
      setAvailableSlots([])
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/api/available-slots?date=${selectedDate}`)
      if (response.ok) {
        const data = await response.json()
        setAvailableSlots(data.availableSlots || [])
      } else {
        console.error('Erro ao carregar horários disponíveis')
        setAvailableSlots([])
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error)
      setAvailableSlots([])
    } finally {
      setIsLoading(false)
    }
  }, [API_BASE_URL])

  // Carregar slots quando a data mudar
  useEffect(() => {
    loadAvailableSlots(formData.date)
  }, [formData.date, loadAvailableSlots])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      showMessage('Preencha todos os campos obrigatórios', 'error')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        showMessage(
          `✅ Agendamento realizado com sucesso! Você receberá uma confirmação via WhatsApp em instantes. 
          Data: ${data.appointment.date} às ${data.appointment.time}`, 
          'success'
        )
        
        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          serviceType: 'Consulta Podológica',
          notes: ''
        })
        
        // Recarregar slots disponíveis
        if (formData.date) {
          loadAvailableSlots(formData.date)
        }
      } else {
        showMessage(data.error || 'Erro ao realizar agendamento. Tente novamente.', 'error')
      }
    } catch (error) {
      console.error('Erro ao enviar agendamento:', error)
      showMessage('Erro de conexão. Verifique sua internet e tente novamente.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="agendamento" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>Agendamento Online</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sistema de agendamento online com confirmação automática via WhatsApp e e-mail. 
            Receba lembretes antes da sua consulta.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Horários de Funcionamento */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Horários de Atendimento
            </h3>
            <div className="text-blue-700 text-sm space-y-1">
              <p>📅 <strong>Segunda a Sexta-feira</strong></p>
              <p>🕕 <strong>06:00 às 22:00</strong></p>
              <p>⏱️ Duração das consultas: <strong>10 a 30 minutos</strong></p>
              <p>📞 Agendamentos com pelo menos <strong>2 horas de antecedência</strong></p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dados Pessoais */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-black bg-white ${formData.name === '' ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Seu nome completo"
                  style={{ color: '#111', background: '#fff' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="tel"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-black bg-white ${formData.phone === '' ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="+55 (11) 99999-9999"
                  style={{ color: '#111', background: '#fff' }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                E-mail (opcional)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-black bg-white ${formData.email === '' ? 'border-gray-300' : 'border-green-400'}`}
                placeholder="seu.email@exemplo.com"
                style={{ color: '#111', background: '#fff' }}
              />
            </div>

            {/* Data e Hora */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Data da Consulta *
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-black bg-white ${formData.date === '' ? 'border-red-400' : 'border-gray-300'}`}
                  style={{ color: '#111', background: '#fff' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Horário * {isLoading && <Loader2 className="w-4 h-4 inline ml-2 animate-spin" />}
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  disabled={!formData.date || isLoading}
                  title="Selecione o horário desejado"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {!formData.date ? 'Primeiro selecione uma data' : 
                     isLoading ? 'Carregando horários...' : 
                     availableSlots.length === 0 ? 'Nenhum horário disponível' : 
                     'Selecione um horário'}
                  </option>
                  {availableSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {formData.date && availableSlots.length === 0 && !isLoading && (
                  <p className="text-sm text-red-600 mt-1">
                    Nenhum horário disponível para esta data. Tente outra data.
                  </p>
                )}
              </div>
            </div>

            {/* Tipo de Serviço */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🩺 Tipo de Serviço
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                title="Selecione o tipo de serviço"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              >
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Observações */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Observações (opcional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-black bg-white"
                placeholder="Descreva brevemente o motivo da consulta ou alguma informação importante..."
                style={{ color: '#111', background: '#fff' }}
              />
            </div>
              {/* Debug: Estado do formulário */}
              <div className="mt-6 p-4 bg-gray-100 rounded-lg text-xs text-gray-700">
                <strong>DEBUG formData:</strong>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
              </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 inline mr-2 animate-spin" />
                  Enviando Agendamento...
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Agendar Consulta
                </>
              )}
            </button>
          </form>

          {/* Mensagem de Resultado */}
          {message && (
            <div className={`mt-6 p-4 rounded-lg border ${
              messageType === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}>
              <div className="flex items-center">
                {messageType === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                )}
                <span>{message}</span>
              </div>
            </div>
          )}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-3">📱 Confirmação Automática</h3>
            <p className="text-gray-600 text-sm">
              Após o agendamento, você receberá uma confirmação imediata por WhatsApp e/ou e-mail 
              com todos os detalhes da sua consulta.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-3">🔔 Lembretes</h3>
            <p className="text-gray-600 text-sm">
              Enviaremos lembretes automáticos 1 dia, 6 horas e 3 horas antes da sua consulta 
              para que você não se esqueça.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentBooking