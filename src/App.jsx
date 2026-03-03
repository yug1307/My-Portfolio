import React, { Suspense } from 'react';
import Topbar from './components/Topbar'
import Carousel from './components/Carousel';
import WhyMe from './components/WhyMe';
import FooterOne from './components/FooterOne'
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";

import './App.css'

const Services = React.lazy(() => import('./components/Services'));

<Suspense fallback={<div>Loading...</div>}>
  <Services />
</Suspense>

const services = [
    { icon: <FaHtml5 size={36} />, title: "HTML" },
    { icon: <FaCss3Alt size={36} />, title: "CSS" },
    { icon: <FaJs size={36} />, title: "JavaScript" },
    { icon: <FaReact size={36} />, title: "React" },
    { icon: <SiTailwindcss size={36} />, title: "Tailwind" },
    { icon: <FaJava size={36} />, title: "Java" },
    { icon: <DiMysql size={36} />, title: "SQL" },
    { icon: <SiMongodb size={36} />, title: "MongoDB" },
  ];

function App() {
  return ( 
    <>
      <Topbar /> 
      <Carousel/>
      <section className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 py-16 px-6 space-y-6 my-12">
        <h2 className="text-4xl font-bold text-center">🚀 My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl space-y-3 transition-transform hover:-translate-y-2"
            >
              <div className="flex justify-center text-blue-600">{service.icon}</div>
              <h3 className="text-lg font-semibold text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <WhyMe />
      <FooterOne /> 
    </>
  )
}

export default App

