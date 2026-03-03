import { FaLightbulb, FaHandsHelping, FaLaptopCode, FaCogs, FaCheckCircle, FaBalanceScale, FaRocket, FaUserGraduate, 
  FaPuzzlePiece, FaFlag } from 'react-icons/fa';

const features = [ 
  {
    icon: <FaLightbulb size={30} className="text-yellow-500" />,
    title: "Entrepreneurial Vision",
    desc: "I don’t just build IT solutions—I create sustainable systems designed to empower youth, and support national development.",
  },
  {
    icon: <FaHandsHelping size={30} className="text-pink-500" />,
    title: "Passionate About Youth Empowerment",
    desc: "My mission goes beyond business success. I actively mentor students and young professionals to help them choose the right career path based on their strengths and aspirations.",
  },
  {
    icon: <FaLaptopCode size={30} className="text-blue-500" />,
    title: "Real-World Experience",
    desc: "With hands-on experience in software development, career guidance, and IT consulting, I deliver practical solutions that solve real business problems.",
  },
  {
    icon: <FaCogs size={30} className="text-green-500" />,
    title: "Customized Solutions",
    desc: "I focus on understanding your unique needs and providing tailor-made IT solutions, rather than one-size-fits-all approaches.",
  },
  {
    icon: <FaCheckCircle size={30} className="text-purple-500" />,
    title: "Commitment to Quality",
    desc: "Every project I undertake is backed by strong attention to detail, reliability, and a commitment to excellence.",
  },
  {
    icon: <FaBalanceScale size={30} className="text-purple-500" />,
    title: "Strong Ethical Foundation",
    desc: "My work is driven by integrity, responsibility, and a genuine desire to positively impact society and the next generation.",
  },
  {
    icon: <FaRocket size={30} className="text-purple-500" />,
    title: "Innovative Approach",
    desc: "I stay up-to-date with the latest technologies and industry trends to deliver forward-thinking solutions and innovative strategies.",
  },
  {
    icon: <FaUserGraduate size={30} className="text-purple-500" />,
    title: "Personalized Career Mentorship",
    desc: "I provide one-on-one mentorship to help students and professionals discover their true potential and choose a career path that matches their passion and skills.",
  },
  {
    icon: <FaPuzzlePiece size={30} className="text-purple-500" />,
    title: "Problem-Solving Mindset",
    desc: "I thrive in solving complex challenges through logical thinking, creative strategies, and technical expertise.",
  },
  {
    icon: <FaFlag size={30} className="text-purple-500" />,
    title: "Passion for Nation Building",
    desc: "I believe that empowered youth are the backbone of a progressive nation, and I’m committed to contributing my skills and efforts to national development.",
  }
];

function WhyMe () {
  return(
    <section className="bg-gradient-to-t from-yellow-500 to-emerald-500 py-16 px-6 space-y-6">
      <h2 className="text-4xl font-bold text-center">💡 Why Choose Me Over Others</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg space-y-2 text-center transition hover:-translate-y-2">
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyMe