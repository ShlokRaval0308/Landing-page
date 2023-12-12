
import HeroSection from '/components/HeroSection'
import NavBar from '/components/NavBar'
import FeaturesSection from '/components/FeaturesSection'
import Footer from '/components/Footer'
import BenfitsSection from '/components/BenfitsSection'
import SignupForm from '../components/SignupForm'



export default function Home() {
  


  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      
      <HeroSection />
      <FeaturesSection />
      <BenfitsSection/>
      

      

      <Footer />


      
     
      
   
    </main>
  )
}

