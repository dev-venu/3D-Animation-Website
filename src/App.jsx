import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
<Navbar />
   <main className="flex-1 container mx-auto px-6 py-12">
<Hero />
<Projects />
</main>
<Footer />  
</div>
  )
}

export default App