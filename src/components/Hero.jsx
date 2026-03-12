import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        .pd{font-family:'Playfair Display',serif}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes glow{0%,100%{opacity:.08}50%{opacity:.18}}
        .fu{animation:fadeUp .8s ease forwards} .d1{animation-delay:.15s;opacity:0} .d2{animation-delay:.3s;opacity:0} .d3{animation-delay:.45s;opacity:0}
        .nl::after{content:'';display:block;height:1px;background:#f59e0b;transform:scaleX(0);transition:transform .3s;transform-origin:left}
        .nl:hover::after{transform:scaleX(1)}
        .orb{animation:glow 3s ease-in-out infinite;position:fixed;border-radius:9999px;filter:blur(80px);pointer-events:none}
      `}</style>

      <div className="orb w-96 h-96 bg-amber-500 -top-32 -left-32"/>
      <div className="orb w-80 h-80 bg-rose-600 top-1/2 -right-40" style={{animationDelay:"1.5s"}}/>

      {/* HERO */}
      <section className="py-12 px-8 space-y-6">
        <p className="fu text-md tracking-[.3em] uppercase text-amber-400">Creative Developer & Designer</p>

        <h1 className="fu d1 pd lg:text-8xl text-5xl font-black leading-none max-w-4xl">
          Crafting<br/>
          <em className="not-italic text-transparent" style={{WebkitTextStroke:"1px rgba(255,255,255,0.2)"}}>Digital</em>{" "}
          Experiences
        </h1>

        <p className="fu d2 text-white/50 text-lg max-w-xl leading-relaxed mb-12">
          I build thoughtful interfaces and digital products that live at the intersection of design rigour and technical precision.
        </p>

        <div className="flex items-center gap-4">
          <Link to="/projects" className="p-3 rounded-full" style={{background:"linear-gradient(135deg,#f59e0b,#ef4444)"}}>VIEW WORKS</Link>
          <a href="tel:+91 9322276364">LET'S TALK</a>
        </div>
      </section>

      <div className="relative z-10 px-16"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/></div>

      {/* ABOUT */}
      <section className="relative z-10 px-8 md:px-16 py-12 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-7">
          <p className="text-md tracking-[.3em] uppercase text-amber-400">About Me</p>
          <h2 className="pd text-5xl font-bold leading-tight">Precision meets <em className="text-amber-400">craft</em></h2>
          <p className="text-white/50 leading-relaxed">I'm a <strong className="text-white font-medium">creative developer and designer</strong> based in Gondia, specialising in building memorable digital products that balance aesthetic depth with functional clarity.</p>
          <p className="text-white/50 leading-relaxed">My practice spans full-stack development, visual identity systems, and interaction design — with a belief that <strong className="text-white font-medium">the best digital experiences feel inevitable.</strong></p>
          
          <div className="flex gap-8">
            {[["3+","Years Exp."],["20+","Projects"],["100%","Passion"]].map(([n,l])=>(
              <div key={l}><div className="pd text-3xl font-bold text-amber-400">{n}</div><div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{l}</div></div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl blur-xl" style={{background:"linear-gradient(135deg,rgba(245,158,11,.1),rgba(239,68,68,.1))"}}/>
          <div className="relative rounded-2xl overflow-hidden border border-white/8 aspect-[4/5] bg-slate-900">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Yugaanter" className="w-full h-full object-cover opacity-80"/>
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{background:"linear-gradient(to top,#020617,transparent)"}}>
              <p className="pd text-lg font-bold">Yugaanter Ramdas</p>
              <p className="text-xs text-white/50 mt-1">Based in Gondia, India</p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-950 rounded-2xl px-4 py-2 font-bold text-xs shadow-lg shadow-amber-400/30">Open to work ✦</div>
        </div>
      </section>
    </div>
  ); 
}
