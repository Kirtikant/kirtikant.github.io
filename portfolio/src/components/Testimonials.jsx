export default function Testimonials() {
  const testimonials = [
    { text: "Kirtikant delivered our POS app ahead of schedule and integrated payments flawlessly.", author: "– Hospitality Client" },
    { text: "Great communication, clean code, and perfect Supabase integration. Highly recommended!", author: "– Startup Founder" }
  ];

  return (
    <section>
      <h2 className="section-title">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="card">
            <p>“{t.text}”</p>
            <h4 className="mt-3 font-semibold">{t.author}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
