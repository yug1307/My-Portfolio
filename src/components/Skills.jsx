import { useState } from "react";

const skills = [
  { name: "HTML", color: "#E44D26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", color: "#1572B6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", color: "#38BDF8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Java", color: "#F89820", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQL", color: "#00758F", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", color: "#4DB33D", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

export default function MySkills() {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="py-10 px-5 bg-[#0A0F1E] space-y-6">
      <h1 className="text-5xl font-extrabold text-white text-center tracking-tight">
        My <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
      </h1>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills.map((s, i) => (
          
          <div key={s.name} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            className="flex flex-col items-center gap-3 p-8 rounded-2xl border transition-all duration-300 cursor-default"
            style={{
              background: hovered === i ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
              border: `1.5px solid ${hovered === i ? s.color + "55" : "rgba(255,255,255,0.08)"}`,
              transform: hovered === i ? "translateY(-6px) scale(1.03)" : "none",
              boxShadow: hovered === i ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${s.color}33` : "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={s.icon} alt={s.name} className="w-10 h-10 transition-transform duration-300"
              style={{ filter: hovered === i ? `drop-shadow(0 0 8px ${s.color}88)` : "none", transform: hovered === i ? "scale(1.15)" : "scale(1)" }}
            />

            <span className="text-sm font-semibold tracking-wide" style={{ color: hovered === i ? "#fff" : "rgba(255,255,255,0.6)" }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
