import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import WeLove from './components/WeLove';
import Services from './components/Services';
import Appoitment from './components/Appoitment';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <WeLove />
      <Services />
      <Appoitment />
    </React.Fragment >
  )
}

export default App;