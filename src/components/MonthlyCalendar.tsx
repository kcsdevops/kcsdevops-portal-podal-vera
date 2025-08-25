'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Clock, Calendar, MessageCircle } from 'lucide-react'

interface TimeSlot {
  time: string
  available: boolean
}

interface DayInfo {
  date: number
  isCurrentMonth: boolean
  isToday: boolean
  isDisabled: boolean
  timeSlots: TimeSlot[]
}

export default function MonthlyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [calendarDays, setCalendarDays] = useState<DayInfo[]>([])

  // Horários disponíveis (6h às 22h, intervalos de 30 minutos)
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []
    let atLeastOneAvailable = false
    for (let hour = 6; hour <= 21; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 21 && minute === 30) break // Para às 21:30
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        // Sorteia disponibilidade, mas garante pelo menos um disponível
        let available = Math.random() > 0.3
        if (!atLeastOneAvailable && hour === 21 && minute === 0) available = true // Último horário garante disponível
        if (available) atLeastOneAvailable = true
        slots.push({
          time: timeString,
          available
        })
      }
    }
    // Se por acaso nenhum ficou disponível, libera o primeiro
    if (!atLeastOneAvailable && slots.length > 0) {
      slots[0].available = true
    }
    return slots
  }

  useEffect(() => {
    const generateCalendar = () => {
      const year = currentDate.getFullYear()
      const month = currentDate.getMonth()
      const today = new Date()
      // Primeiro dia do mês e último dia
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      // Primeiro dia da semana (domingo = 0)
      const startDate = new Date(firstDay)
      startDate.setDate(startDate.getDate() - firstDay.getDay())
      const days: DayInfo[] = []
      const currentDateObj = new Date(startDate)
      let foundEnabled = false
      // Gerar 42 dias (6 semanas)
      for (let i = 0; i < 42; i++) {
        const isCurrentMonth = currentDateObj.getMonth() === month
        const isToday = currentDateObj.toDateString() === today.toDateString()
        const isPast = currentDateObj < today
        const isWeekend = currentDateObj.getDay() === 0 // Domingo fechado
        let isDisabled = isPast || !isCurrentMonth || isWeekend
        // Garante pelo menos um dia útil e futuro habilitado
        if (!foundEnabled && isCurrentMonth && !isPast && !isWeekend) {
          isDisabled = false
          foundEnabled = true
        }
        days.push({
          date: currentDateObj.getDate(),
          isCurrentMonth,
          isToday,
          isDisabled,
          timeSlots: isCurrentMonth && !isPast && !isWeekend ? generateTimeSlots() : []
        })
        currentDateObj.setDate(currentDateObj.getDate() + 1)
      }
      setCalendarDays(days)
    }
    generateCalendar()
  }, [currentDate])

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    setSelectedDate(null)
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    setSelectedDate(null)
  }

  const handleDateClick = (dayInfo: DayInfo) => {
    if (dayInfo.isDisabled) return
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayInfo.date)
    setSelectedDate(clickedDate)
  }

  const handleTimeSlotClick = (time: string) => {
    if (!selectedDate) return
    const whatsappMessage = `Olá! Gostaria de agendar uma consulta de podologia (10-30 minutos) para o dia ${selectedDate.toLocaleDateString('pt-BR')} às ${time}h.`
    const whatsappUrl = `https://wa.me/5511967381029?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const getAvailableSlots = (dayInfo: DayInfo) => {
    return dayInfo.timeSlots.filter(slot => slot.available).length
  }

  return (
    <section id="agenda" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>Agenda Mensal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Horários Disponíveis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consulte nossa agenda e escolha o melhor horário para sua consulta de <strong>10 a 30 minutos</strong>.
            Atendimento de <strong>segunda a sexta das 6h às 22h</strong>.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={previousMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Mês anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h3 className="text-xl font-bold text-gray-800">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Próximo mês"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateClick(day)}
                    disabled={day.isDisabled}
                    className={`
                      relative aspect-square p-2 text-sm rounded-lg transition-all duration-200
                      ${day.isDisabled 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'hover:bg-primary-50 cursor-pointer'
                      }
                      ${!day.isCurrentMonth 
                        ? 'text-gray-400' 
                        : 'text-gray-700'
                      }
                      ${day.isToday 
                        ? 'bg-primary-100 font-bold text-primary-700' 
                        : ''
                      }
                      ${selectedDate && selectedDate.getDate() === day.date && day.isCurrentMonth
                        ? 'bg-primary-600 text-white'
                        : ''
                      }
                    `}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <span>{day.date}</span>
                      {!day.isDisabled && day.timeSlots.length > 0 && (
                        <div className="text-xs text-green-600 font-medium">
                          {getAvailableSlots(day)} vagas
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary-100 rounded-full"></div>
                  <span className="text-gray-600">Hoje</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-100 rounded-full"></div>
                  <span className="text-gray-600">Disponível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                  <span className="text-gray-600">Indisponível</span>
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {selectedDate ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Horários para {selectedDate.toLocaleDateString('pt-BR', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long' 
                      })}
                    </h3>
                    <p className="text-gray-600">
                      Consultas de <strong>10 a 30 minutos</strong> - Clique no horário para agendar via WhatsApp
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                    {(() => {
                      const selectedDay = calendarDays.find(day => 
                        day.date === selectedDate.getDate() && day.isCurrentMonth
                      )
                      return selectedDay?.timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          onClick={() => handleTimeSlotClick(slot.time)}
                          disabled={!slot.available}
                          className={`
                            p-3 rounded-lg text-sm font-medium transition-all duration-200
                            ${slot.available
                              ? 'bg-green-100 text-green-700 hover:bg-green-200 hover:scale-105'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }
                          `}
                        >
                          <div className="flex items-center justify-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{slot.time}</span>
                          </div>
                        </button>
                      )) || []
                    })()}
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="text-sm text-green-700">
                        <p className="font-medium mb-1">Como agendar:</p>
                        <p>Clique no horário desejado e você será direcionado para o WhatsApp com uma mensagem pré-preenchida para confirmar seu agendamento.</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Selecione uma Data
                  </h3>
                  <p className="text-gray-500">
                    Clique em um dia no calendário para ver os horários disponíveis
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Action */}
          <div className="mt-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Prefere Falar Diretamente?
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato via WhatsApp para agendar ou esclarecer dúvidas sobre nossos serviços
              </p>
              <a
                href="https://wa.me/5511967381029?text=Olá! Gostaria de falar com a especialista sobre agendamento de consulta de podologia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar com a Especialista</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
