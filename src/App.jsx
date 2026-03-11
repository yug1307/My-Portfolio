import React, { Suspense } from 'react';
import Topbar from './components/Topbar'
import WhyMe from './components/WhyMe';
import FooterOne from './components/FooterOne'
import { Link } from 'react-router-dom';
import './App.css'
import MySkills from './components/Skills';

const Services = React.lazy(() => import('./components/Services'));

<Suspense fallback={<div>Loading...</div>}>
  <Services />
</Suspense>

function App() {
  return ( 
    <>
      <Topbar /> 
      {/* Hero Section */}
      <section className="bg-rose-100 py-10 px-5 space-y-6">
        <h2 className="text-3xl font-bold">Crafting <span className="italic text-red-500">Digital</span> Experiences</h2>
      
        <p className="text-lg">I build thoughtful interfaces and digital products that live at the intersection of 
          design rigour and technical precision
        </p>

        <div className="text-lg space-x-4">
          <Link to="/projects" className="bg-gray-800 text-white p-3">VIEW WORKS</Link>
          <a href="tel:+91 9322276364">LET'S TALK</a>
        </div>
      </section>

      {/* Work Experience */}
      <section className="bg-rose-100 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold">Precision meets <span className="italic text-red-500">craft</span></h2>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="space-y-6">
            <div>I'm a <strong>creative developer and designer</strong> based in Gondia, specialising in building memorable 
            digital products that balance aesthetic depth with functional clarity.</div>

            <div>My practice spans full-stack development, visual identity systems, and interaction design — with a belief 
            that <strong>the best digital experiences feel inevitable:</strong> obvious in hindsight, surprising in the moment.</div>
          </p>

          <img src="/images/Yugaanter.jpg" alt="" />
        </div>
      </section>
      <MySkills/>
      <WhyMe />
      <FooterOne /> 
    </>
  )
}

export default App

