export default function Projects() {
  const projects = [
    {
      title: "Zomato Style Food Delivery App",
      desc: "Flutter + Supabase full-stack app with full food order delivery.",
      link: "https://github.com/Suffixdigital/Zomato-Style-Food-Delivery-App",
      imgs: ["/images/projects/zomato-1.png", "/images/projects/zomato-2.png"]
    },
    {
      title: "Smart Authenticator",
      desc: "MFA, OTP, biometric login app built with Flutter + Firebase.",
      link: "https://github.com/Suffixdigital/Smart-Authenticator",
      imgs: ["/images/projects/auth-1.png", "/images/projects/auth-2.png"]
    },
    {
      title: "Charging Tracker",
      desc: "EV charging tracker app with socket communication.",
      link: "https://github.com/Suffixdigital/Charging-Tracker",
      imgs: ["/images/projects/charge-1.png", "/images/projects/charge-2.png"]
    }
  ];

  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="opacity-80">{p.desc}</p>
            <a href={p.link} target="_blank" className="link">View on GitHub</a>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {p.imgs.map((img, idx) => (
                <img key={idx} src={img} alt={p.title} className="rounded-lg shadow" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
