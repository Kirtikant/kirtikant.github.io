export default function Experience() {
  const jobs = [
    {
      role: "Senior Mobile App Developer",
      company: "Ranpariya The Development Lab LLP",
      years: "2022 – 2025",
      points: [
        "Led Flutter & Android app development across client projects.",
        "Integrated Supabase & Firebase for real-time apps.",
        "Improved performance by 30% with optimizations."
      ]
    },
    {
      role: "Senior Mobile App Developer",
      company: "Grubbrr System India Pvt Ltd",
      years: "2017 – 2022",
      points: [
        "Built POS & hospitality apps used in 100+ restaurants.",
        "Integrated payments (Bambora, CardConnect, FreedomPay).",
        "Implemented WebSocket Kitchen Display System."
      ]
    },
    {
      role: "Mobile App Developer",
      company: "Teksun Microsys Pvt Ltd",
      years: "2015 – 2017",
      points: [
        "Developed IoT-integrated apps with TCP/IP & Bluetooth.",
        "Created hardware interfacing apps for device control.",
        "Hands-on experience in socket programming & testing."
      ]
    }
  ];

  return (
    <section>
      <h2 className="section-title">Experience</h2>
      <div className="space-y-8">
        {jobs.map((job, i) => (
          <div key={i} className="card text-left">
            <h3 className="text-xl font-bold">{job.role}</h3>
            <p className="text-gray-500 dark:text-gray-400">{job.company} | {job.years}</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">{job.points.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
