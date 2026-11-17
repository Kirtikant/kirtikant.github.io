export default function Skills() {
  const skills = [
    { name: "Flutter", img: "/images/skills/flutter.png" },
    { name: "Android (Kotlin/Java)", img: "/images/skills/android.png" },
    { name: "Supabase & Firebase", img: "/images/skills/database-storage.png" },
    { name: "REST APIs & Retrofit", img: "/images/skills/api.png" },
    { name: "MVVM, Riverpod, BLoC", img: "/images/skills/architecture.png" },
    { name: "CI/CD (GitHub Actions)", img: "/images/skills/github.png" },
    { name: "WebSockets & MQTT", img: "/images/skills/ssl.png" },
    { name: "IoT & BLE", img: "/images/skills/iot.png" },
    { name: "TCP/IP & Socket Programming", img: "/images/skills/socket_programming.png" },
    { name: "Secure Auth & Biometric", img: "/images/skills/secure_auth.png" },
    { name: "UI Testing (Appium)", img: "/images/skills/testing.png" },
    { name: "Performance Optimization", img: "/images/skills/performance.png" },
    // ...other skills
  ];
  
return (
    <section>
      <h2 className="section-title">Technical Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <li key={i} className="flex items-center gap-3 card">
            <img src={s.img} alt={s.name} className="h-6 w-6 object-contain" />
            <span className="text-sm md:text-base">{s.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}


