'use client'

import { useEffect, useState } from 'react'

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  amplitude?: number
}

export function FloatingElement({ children, delay = 0, duration = 3, amplitude = 20 }: FloatingElementProps) {
  return (
    <div 
      className="animate-float"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        '--float-amplitude': `${amplitude}px`
      } as React.CSSProperties & { '--float-amplitude': string }}
    >
      {children}
    </div>
  )
}

interface PulsingGradientProps {
  className?: string
  colors?: string[]
}

export function PulsingGradient({ className = '', colors = ['primary-400', 'secondary-400', 'emerald-400'] }: PulsingGradientProps) {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [colors.length])

  return (
    <div 
      className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-40 transition-all duration-2000 ${className}`}
      style={{
        background: `radial-gradient(circle, var(--tw-gradient-from), transparent)`,
        '--tw-gradient-from': `rgb(var(--color-${colors[colorIndex]}) / 0.6)`,
      } as React.CSSProperties & { '--tw-gradient-from': string }}
    />
  )
}

interface MorphingShapeProps {
  size?: number
  color?: string
  className?: string
}

export function MorphingShape({ size = 200, color = 'primary-300', className = '' }: MorphingShapeProps) {
  return (
    <div 
      className={`absolute animate-morph mix-blend-multiply filter blur-2xl opacity-30 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(ellipse, rgb(var(--color-${color}) / 0.5), transparent)`
      }}
    />
  )
}

interface GlowingOrbProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  position?: { x: number; y: number }
  animation?: 'pulse' | 'float' | 'glow'
}

export function GlowingOrb({ 
  size = 'md', 
  color = 'primary-400', 
  position = { x: 50, y: 50 },
  animation = 'glow'
}: GlowingOrbProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24', 
    lg: 'w-32 h-32'
  }

  const animationClasses = {
    pulse: 'animate-pulse-glow',
    float: 'animate-float',
    glow: 'animate-glow-pulse'
  }

  return (
    <div 
      className={`absolute ${sizeClasses[size]} ${animationClasses[animation]} pointer-events-none`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div 
        className={`w-full h-full rounded-full opacity-40 mix-blend-screen filter blur-sm`}
        style={{
          background: `radial-gradient(circle, rgb(var(--color-${color})), transparent 70%)`
        }}
      />
    </div>
  )
}

interface WaveAnimationProps {
  className?: string
  color?: string
  height?: number
}

export function WaveAnimation({ className = '', color = 'primary-200', height = 100 }: WaveAnimationProps) {
  return (
    <div className={`absolute inset-x-0 overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <div 
        className="absolute inset-0 animate-wave opacity-30"
        style={{
          background: `linear-gradient(90deg, transparent, rgb(var(--color-${color}) / 0.3), transparent)`,
          transform: 'translateX(-100%)'
        }}
      />
      <div 
        className="absolute inset-0 animate-wave opacity-20"
        style={{
          background: `linear-gradient(90deg, transparent, rgb(var(--color-${color}) / 0.4), transparent)`,
          transform: 'translateX(-100%)',
          animationDelay: '1s'
        }}
      />
    </div>
  )
}

interface ParticleFieldProps {
  count?: number
  color?: string
  className?: string
}

export function ParticleField({ count = 20, color = 'primary-300', className = '' }: ParticleFieldProps) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2
  }))

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-particle-float opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: `rgb(var(--color-${color}))`
            }}
          />
        </div>
      ))}
    </div>
  )
}

// Componente principal que combina todos os efeitos
export default function InstagramAnimations({ children, variant = 'hero' }: { children: React.ReactNode, variant?: 'hero' | 'section' }) {
  if (variant === 'hero') {
    return (
      <div className="relative overflow-hidden">
        {/* Partículas flutuantes */}
        <ParticleField count={15} color="primary-400" />
        
        {/* Orbes brilhantes */}
        <GlowingOrb size="lg" color="primary-400" position={{ x: 80, y: 20 }} animation="float" />
        <GlowingOrb size="md" color="secondary-400" position={{ x: 15, y: 70 }} animation="pulse" />
        <GlowingOrb size="sm" color="emerald-400" position={{ x: 90, y: 85 }} animation="glow" />
        
        {/* Formas que se transformam */}
        <MorphingShape size={300} color="primary-200" className="top-10 right-10" />
        <MorphingShape size={200} color="secondary-200" className="bottom-20 left-10" />
        
        {/* Gradientes pulsantes */}
        <PulsingGradient 
          className="top-0 right-0 w-96 h-96" 
          colors={['primary-300', 'secondary-300', 'emerald-300']}
        />
        
        {/* Ondas animadas */}
        <WaveAnimation className="top-1/2" color="primary-100" height={120} />
        
        {children}
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      {/* Versão simplificada para outras seções */}
      <ParticleField count={8} color="primary-200" />
      <GlowingOrb size="md" color="primary-300" position={{ x: 85, y: 15 }} animation="glow" />
      <MorphingShape size={150} color="primary-100" className="top-5 right-5" />
      
      {children}
    </div>
  )
}
