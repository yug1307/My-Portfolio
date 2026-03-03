import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne' 

const myMission = [
  { desc: "Empower youth with modern IT skills" },
  { desc: "Provide career guidance to help students choose the right path" },
  { desc: "Develop innovative tech solutions for businesses" },
  { desc: "Promote entrepreneurship and a culture of service" }
]

const myServices = [
  { 
    icon: "🌐", title: "IT Solutions", 
    includes:[
      "Custom Software Development",
      "Web & Mobile App Development",
      "IT Consulting",
    ] 
  },
  { 
    icon: "🎓", title: "Career Mentorship", 
    includes:[
      "Personalized career guidance for students",
      "Interest-based career path discovery",
      "One-on-One Mentorship and Workshops"
    ] 
  },
  { 
    icon: "💼", title: "Training Programs", 
    includes:[
    "Industry-relevant IT training",
    "Real-world project experience",
    "Soft skills development for employability"
  ] 
},
]

const About = () => {
  return ( 
    <div> 
      <Topbar />
        <section class="bg-gradient-to-b from-purple-400 to-teal-400 py-10">
        <div class="max-w-5xl mx-auto px-4 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">About Me</h2>
 
        <div class="space-y-4 my-6 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p className="one">I’m Yugaanter Ramdas, an entrepreneur, IT professional, and passionate youth mentor dedicated to 
            using technology as a powerful tool for personal and national growth. 
            From the very beginning, my journey has been driven by a simple yet 
            powerful belief: <strong>empowering the youth is the key to shaping the future of our nation</strong>.
          </p>

          <p className="two">My interest in technology started during my early years when I became fascinated by how 
            software and digital solutions could solve real-world problems. 
            Over time, this curiosity evolved into a deep passion for coding, development, and problem-solving. 
            I spent countless hours learning programming languages, experimenting with projects, 
            and exploring innovative solutions that could make life easier and businesses more efficient.</p>

          <p className="three">As I gained more technical knowledge, I realized that my purpose is far beyond any personal achievement. 
            I wanted to create an ecosystem where young people could discover their true potential, build real skills,
            and contribute meaningfully to society. This vision led me to establish <strong>Echo Forge Systems</strong>, 
            an IT company with a dual mission: providing innovative tech solutions for businesses and mentoring youth to
            become capable, responsible contributors to our nation.</p>

          <p className="four">Running a company hasn’t just been about delivering software solutions. It has been about building systems 
            that empower others—students, aspiring entrepreneurs, and professionals looking for guidance. 
            I believe every young person deserves the right direction to channel their talents, and I take pride 
            in offering personalized career mentorship that helps them make informed decisions based on their 
            talent and passion.</p>
          
          <p className="five">Throughout my journey, I have worked on diverse projects—ranging from developing custom web 
            and mobile applications for businesses to creating career guidance platforms that help students 
            identify strengths and choose suitable career paths. 
            Each project has been an opportunity to learn, adapt, and innovate while solving real challenges in 
            both the corporate and educational sectors.</p> 

          <p className="six">What sets me apart is my unwavering commitment to quality, integrity, and continuous learning. 
            I stay updated with industry trends, emerging technologies, and innovative practices to ensure 
            that the solutions I offer are not just useful today, but built for tomorrow. 
            I also believe in building strong relationships with my clients, students, and community 
            based on trust, transparency, and mutual growth.</p>

          <p className="seven">
            <strong>Looking forward, my goal remains steadfast:</strong>
            
            <ul className='gap-1 my-2 grid grid-cols-1 md:grid-cols-3'>
              <li>✅ To continue developing cutting-edge IT solutions that empower businesses.</li>
              <li>✅ To mentor and guide young people toward fulfilling and impactful careers.</li>
              <li>✅ To contribute to nation-building by enabling the youth to serve and innovate.</li>
            </ul>
          </p>

          <p className="eight">If you’re someone who shares the vision of creating meaningful change through 
            technology or is eager to take the right career path, I’m excited to connect and collaborate.</p>
        </div>
        </div>
        </section>

        {/* My Mission Section */} 
        <section class="bg-gradient-to-r from-amber-400 to-indigo-400 py-11 px-6 space-y-6 my-12">
          <h2 class="font-bold text-gray-800 text-3xl text-center">🌟 My Mission</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transform-3d">
            {myMission.map((mission, index) => (

              <div 
                key={index} 
                class="bg-gradient-to-b from-blue-400 to-lime-400 rounded-tl-xl rounded-br-xl space-y-4 py-5 px-3">
                <div className="text-5xl flex flex-col items-center">🎯</div>  
                <div className="text-center text-lg">{mission.desc}</div>
              </div>
            ))}
          </div>
        </section> 
 
        {/* My Services Section */}
        <section class="bg-gradient-to-t from-emerald-700 to-stone-800 py-11 px-6 space-y-6">    
          <h2 class="text-3xl font-bold text-center text-gray-100">My Services</h2>

          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {myServices.map((service, index) => (

              <div 
                key={index} 
                className="bg-white space-y-3 rounded-lg p-5 transition hover:-translate-y-2">
                <div className="text-3xl flex flex-col items-center">{service.icon}</div>
                <h3 className="text-xl text-center">{service.title}</h3>

                <ul className="text-left space-y-2">
                {service.includes.map((feat, index) => (
                  
                  <li key={index}>
                    <span className="text-md">{feat}</span>
                  </li> 
                ))}
              </ul>
              </div>
            ))}
          </div>
        </section>  
      <FooterOne/>
    </div>
  )
}

export default About