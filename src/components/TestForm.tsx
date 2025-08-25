'use client'

import { useState } from 'react'

export default function TestForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-lg mt-8">
      <h3 className="text-lg font-bold mb-4">🧪 Teste de Formulário</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              console.log('Nome mudou:', e.target.value)
              setName(e.target.value)
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu nome"
          />
          <p className="text-sm text-gray-600 mt-1">Valor: {name}</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Telefone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              console.log('Telefone mudou:', e.target.value)
              setPhone(e.target.value)
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu telefone"
          />
          <p className="text-sm text-gray-600 mt-1">Valor: {phone}</p>
        </div>
        
        <button
          onClick={() => {
            alert(`Nome: ${name}\nTelefone: ${phone}`)
          }}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Testar Valores
        </button>
      </div>
    </div>
  )
}
