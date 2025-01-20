import './App.css'
import "tailwindcss/tailwind.css"
import Header from './component/Header'
import Hero from './component/Hero'
// import AboutMe from './pages/About'
import ProjectSection from './component/ProjectSection'
import Footer from './component/Footer'
import Certs from './component/Certs'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Certs />
      <ProjectSection/>
      <Footer/>
    </>
  )
}

export default App
