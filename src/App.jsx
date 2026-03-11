import React, { Suspense } from 'react';
import Topbar from './components/Topbar'
import WhyMe from './components/WhyMe';
import FooterOne from './components/FooterOne'
import './App.css'
import MySkills from './components/Skills';
import Portfolio from './components/Hero';

const Services = React.lazy(() => import('./components/Services'));

<Suspense fallback={<div>Loading...</div>}>
  <Services />
</Suspense>

function App() {
  return ( 
    <>
      <Topbar /> 
      <Portfolio/>
      <MySkills/>
      <WhyMe />
      <FooterOne /> 
    </>
  )
}

export default App

