'use client'

import { useState } from 'react'
import { Info, X } from 'lucide-react'

export default function EnvironmentBanner() {
  const [isVisible, setIsVisible] = useState(true)
  
  // Só mostrar em desenvolvimento
  const isDev = process.env.NEXT_PUBLIC_ENV === 'development'
  
  if (!isDev || !isVisible) {
    return null
  }

  return (
    <div className="bg-yellow-500 text-yellow-900 px-4 py-2 text-sm flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Info className="w-4 h-4" />
        <span className="font-medium">
          🔧 Ambiente de Desenvolvimento - Site em Formação
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="hover:bg-yellow-600 hover:text-yellow-100 rounded p-1 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
