import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-6 space-y-24 py-12">
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Kirtikant Patadiya • Built with React + Tailwind + Framer Motion
      </footer>
    </div>
  )
}
