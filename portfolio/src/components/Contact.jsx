import { Mail, Phone, Linkedin, Github, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <section className="text-center">
      <h2 className="section-title">Contact</h2>
      <p><Mail className="inline mr-2"/> <a href="mailto:kirtikantpatadiya@gmail.com" className="link">kirtikantpatadiya@gmail.com</a></p>
      <p><Phone className="inline mr-2"/> <a href="tel:+918866121457" className="link">+91 88661 21457</a></p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://linkedin.com/in/kirtikant-patadiya" target="_blank" className="social"><Linkedin/></a>
        <a href="https://github.com/Suffixdigital" target="_blank" className="social"><Github/></a>
        <a href="https://www.upwork.com/freelancers/kirtikantpatadiya" target="_blank" className="social"><Briefcase/></a>
      </div>
    </section>
  )
}
