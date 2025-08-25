
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MonthlyCalendar from '@/components/MonthlyCalendar'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Technology from '@/components/Technology'
import InstagramAnimations from '@/components/InstagramAnimations'
import Gallery from '@/components/Gallery'
import GuiaEducativo from '@/components/GuiaEducativo'
import AppointmentBooking from '@/components/AppointmentBooking'
import TestForm from '@/components/TestForm'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MonthlyCalendar />
      <InstagramAnimations variant="section">
        <Services />
      </InstagramAnimations>
      
      <InstagramAnimations variant="section">
        <Products />
      </InstagramAnimations>
      
      <Technology />
      
      <InstagramAnimations variant="section">
        <Gallery />
      </InstagramAnimations>
      
      <GuiaEducativo />
      
      <TestForm />
      
      <InstagramAnimations variant="section">
        <AppointmentBooking />
      </InstagramAnimations>
      
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
