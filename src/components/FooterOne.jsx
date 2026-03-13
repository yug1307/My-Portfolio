import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const contacts = [
  { icon: <Phone className="text-red-500"/>, text: "8411838725, 9322276364" },
  { icon: <MapPin className="text-green-500"/>, text: "Sharda Colony, Gondia - 441 614" },
  { icon: <Mail className="text-blue-500"/>, text: "yugaanterd@gmail.com" },
];

const socials = [
  { label: <FaLinkedin className="text-blue-500"/>, href: "#", },
  { label: <FaWhatsapp className="text-green-500"/>, href: "#", },
  { label: <FaInstagram className="text-rose-500"/>, href: "#", },
];

const FooterOne = () =>{
  return(
    <>
    <footer className="bg-slate-950 py-12 px-6 border border-t-red-500" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@800&display=swap');
      .ff{font-family:'Fraunces',serif}`}</style>

      <section className="max-w-4xl mx-auto space-y-6">
        {/* Top CTA */}
        <div className="text-center space-y-5">
          <p className="text-md tracking-[.3em] uppercase text-amber-400">Get In Touch</p>
          <h2 className="ff text-4xl md:text-5xl font-black text-white">Let's <span className="text-amber-400">Work</span> Together</h2>
          <div className="w-10 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact */}
          <div className="rounded-2xl border border-white/8 p-8 space-y-4">
            <h3 className="ff text-white text-xl font-bold">Contact Me</h3>

            <div className="space-y-4">
              {contacts.map(({ icon, text }) => (

                <div key={text} className="flex items-center gap-4 group">
                  <span className="text-xl p-2 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0 group-hover:bg-amber-400/20 transition-colors">{icon}</span>
                  <span className="text-white/60 text-sm group-hover:text-white/90 transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Follow */}
          <div className="rounded-2xl border border-white/8 space-y-4 p-8">
            <h3 className="ff text-white text-xl font-bold">Follow Me</h3>

            <div className="flex gap-4">
              {socials.map(({ label, href }) => (

                <a key={label} href={href} 
                  className="p-2 rounded-xl border border-white text-lg flex items-center justify-center hover:text-amber-400 hover:border-amber-400/40 transition-all duration-200">
                  {label}
                </a>
              ))}
            </div>

            <p className="text-white/30 leading-relaxed">
              Open to freelance projects, collaborations,<br/>and full-time opportunities.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-md text-white">© {new Date().getFullYear()} Yugaanter Ramdas. All Rights Reserved</div>
      </section>
    </footer>
    </>
  )
}

export default FooterOne
