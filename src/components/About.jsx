import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne' 
import MissionServices from './MissionServices';

const goals = [
  { icon: "⚙️", text: "Continue developing cutting-edge IT solutions that empower businesses." },
  { icon: "🎓", text: "Mentor and guide young people toward fulfilling and impactful careers." },
  { icon: "🏳️", text: "Contribute to nation-building by enabling the youth to serve and innovate." },
];

const paragraphs = [
  {
    p1:[`My interest in technology started during my early years when I became fascinated by how software and 
    digital solutions could solve real-world problems. This curiosity evolved into a deep passion for coding, 
    development, and problem-solving — learning programming languages, experimenting with projects, and 
    exploring innovative solutions.`],
    p2:[`As I gained more technical knowledge, I realized my purpose was far beyond personal achievement. 
    I wanted to create an ecosystem where young people could discover their true potential. This vision led me 
    to establish Echo Forge Systems, an IT company with a dual mission: providing innovative tech solutions for 
    businesses and mentoring youth to become capable, responsible contributors to our nation.`],
    p3:[`Throughout my journey I have worked on diverse projects — from custom web and mobile applications to 
    career guidance platforms that help students identify strengths and choose suitable career paths. 
    Each project has been an opportunity to learn, adapt, and innovate while solving real challenges in 
    both the corporate and educational sectors.`],
    p4:[`What sets me apart is my unwavering commitment to quality, integrity, and continuous learning. 
    I stay updated with industry trends and emerging technologies to ensure my solutions are not 
    just useful today, but built for tomorrow. I also believe in building strong relationships based on 
    trust, transparency, and mutual growth.`]
  },
]

const About = () => {
  return ( 
    <div> 
    <Topbar /> 
      <section className="px-8 py-12 bg-slate-950 text-white" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@800;900&display=swap');
        .ff{font-family:'Fraunces',serif}@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .fu{animation:fadeUp .7s ease forwards}.d1{animation-delay:.1s;opacity:0}.d2{animation-delay:.2s;opacity:0}.d3{animation-delay:.3s;opacity:0}`}</style>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center">
            <p className="fu text-lg tracking-[.3em] uppercase text-amber-400">Who I Am</p>
            <h1 className="fu d1 ff text-5xl md:text-6xl font-black">About <span className="text-amber-400">Me</span></h1>
          </div>

          {/* Intro card */}
          <div className="fu d2 rounded-2xl border border-white/8 bg-white/3 p-8 text-white/60 leading-relaxed text-[18px]">
            I'm <strong className="text-white">Yugaanter Ramdas</strong>, an entrepreneur, IT professional, and passionate 
            youth mentor dedicated to using technology as a powerful tool for personal and national growth. From the very 
            beginning, my journey has been driven by a simple yet powerful belief: <strong className="text-amber-400">empowering
            the youth is the key to shaping the future of our nation.</strong>
          </div>

          {/* Story paragraphs */}
          <div className="">
            {paragraphs.map((para, idx) => (

              <div key={idx} className="text-white/50 leading-relaxed text-[18px] space-y-6">
                <p className="">{para.p1}</p>
                <p className="">{para.p2}</p>
                <p className="">{para.p3}</p>
                <p className="">{para.p4}</p>
              </div>
            ))}
          </div>

          {/* Goals */}
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-8 space-y-6">
            <p className="ff text-white text-2xl text-center">Looking forward, my goal remains steadfast</p>
            <div className="grid md:grid-cols-3 gap-4">
              {goals.map(({icon,text})=>(

                <div key={text} className="rounded-xl border border-white/8 bg-white/3 p-5 flex flex-col gap-3 hover:border-amber-400/30 hover:bg-white/6 transition-all duration-200">
                  <span className="flex flex-col items-center text-2xl">{icon}</span>
                  <p className="text-white/60 leading-relaxed text-center">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <p className="text-center text-white/40 leading-relaxed">
            If you share the vision of creating meaningful change through technology<br/>or are eager to take the right 
            career path — <a href="#" className="text-amber-400 hover:underline font-medium">I'm excited to connect.</a>
          </p>
        </div>
      </section> 
      <MissionServices/>
    <FooterOne/>
    </div>
  )
}

export default About
