export default function Services() {
  const services = [
    {
      title: "Mobile App Development",
      desc: "End-to-end Android & Flutter app development with scalable architecture.",
      img: "/images/services/mobile-dev-icon.png"
    },
    {
      title: "IoT & Real-Time Systems",
      desc: "Expert in WebSockets, MQTT, BLE & TCP/IP. Built IoT-enabled apps for EV charging, device monitoring, and restaurant operations.",
      img: "/images/services/iot-icon.png"
    },
    {
      title: "Secure Auth & Payments",
      desc: "Implemented biometric login, MFA, and Supabase/Firebase authentication. Integrated payments (Bambora, Dejavoo, Converge, CardConnect, FreedomPay).",
      img: "/images/services/secure-auth.png"
    },
    {
      title: "Bug Fixes & Optimization",
      desc: "Reduced app crashes by 40% and improved load times by 3x with code refactoring, caching, and CI/CD pipelines (GitHub Actions).",
      img: "/images/services/app-dev-settings-icon.png"
    },
    {
      title: "App Maintenance & Support",
      desc: "Long-term maintenance, bug fixes, and feature enhancements to keep apps reliable and user-friendly.",
      img: "/images/services/maintenance.png"
    }
  ];

  return (
    <section>
      <h2 className="section-title">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="card flex flex-col items-center">
            <img
              src={s.img}
              alt={s.title}
              className="h-20 w-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">{s.title}</h3>
            <p className="text-center dark:text-gray-200">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
