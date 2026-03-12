const cards = [
  { icon: "💡", title: "Entrepreneurial Vision", desc: "I don't just build IT solutions—I create sustainable systems designed to empower youth and support national development." },
  { icon: "🤝", title: "Passionate About Youth Empowerment", desc: "I actively mentor students and young professionals to help them choose the right career path based on their strengths." },
  { icon: "🌍", title: "Real-World Experience", desc: "With hands-on experience in software development, career guidance, and IT consulting, I deliver practical solutions." },
  { icon: "⚙️", title: "Customized Solutions", desc: "I focus on understanding your unique needs and providing tailor-made IT solutions, rather than one-size-fits-all approaches." },
  { icon: "✅", title: "Commitment to Quality", desc: "Every project I undertake is backed by strong attention to detail, reliability, and a commitment to excellence." },
  { icon: "⚖️", title: "Strong Ethical Foundation", desc: "My work is driven by integrity, responsibility, and a genuine desire to positively impact society and the next generation." },
  { icon: "🚀", title: "Innovative Approach", desc: "I stay up-to-date with the latest technologies to deliver forward-thinking solutions and innovative strategies." },
  { icon: "🎓", title: "Personalized Career Mentorship", desc: "I provide one-on-one mentorship to help students discover their true potential and choose a matching career path." },
  { icon: "🧩", title: "Problem-Solving Mindset", desc: "I thrive in solving complex challenges through logical thinking, creative strategies, and technical expertise." },
  { icon: "🏳️", title: "Passion for Nation Building", desc: "Empowered youth are the backbone of a progressive nation, and I'm committed to contributing my skills to national development." },
];

export default function WhyMe() {
  return (
    <section className="bg-zinc-950 px-6 py-12 space-y-6 flex flex-col items-center" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@700;900&display=swap');
      .ff{font-family:'Fraunces',serif}@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
      .fu{animation:fadeUp .6s ease forwards}.card:hover rotate(-5deg)}.icon{transition:transform .3s}`}</style>

      {/* Heading */}
      <h2 className="fu ff text-4xl md:text-5xl font-black text-white text-center">Why Choose <span className="text-amber-400">Me</span> Over Others</h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (

          <div key={i} className="card text-center relative rounded-2xl border border-blue-500 p-7 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/10 backdrop-blur-sm">
            <div className="flex flex-col items-center text-3xl">{c.icon}</div>
            <h3 className="ff text-white font-bold text-lg leading-snug my-2">{c.title}</h3>
            <p className="text-white/45 text-sm leading-relaxed">{c.desc}</p>
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/40 transition-all duration-500"/>
          </div>
        ))}
      </div>
    </section>
  );
}
