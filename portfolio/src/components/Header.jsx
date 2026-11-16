import { useState, useEffect } from "react";
import { Sun, Moon, FileDown, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="relative text-center py-20 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-900 dark:to-blue-900 text-white overflow-hidden">
      <motion.img 
        src="/profile.png" 
        alt="Profile" 
        className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-6 shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h1 className="text-4xl md:text-5xl font-extrabold">👋 Hi, I'm <span className="text-yellow-300">Kirtikant Patadiya</span></h1>
      <p className="mt-4 text-lg opacity-90">Senior Mobile App Developer | Flutter • Android • IoT</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="/kirtikant_mobile_cv.pdf" download className="btn-primary"><FileDown size={18}/> Resume</a>
        <a href="https://www.upwork.com/freelancers/kirtikantpatadiya" target="_blank" className="btn-secondary"><Briefcase size={18}/> Hire Me</a>
      </div>
      <button onClick={() => setDark(!dark)} className="absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur hover:scale-110 transition">
        {dark ? <Sun size={20}/> : <Moon size={20}/>}
      </button>
    </header>
  )
}
