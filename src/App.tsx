import './App.css'
import React from 'react'
import Navbar from './Navbar'
import Hero from './components/Hero';
import WeLove from './components/WeLove';
import Services from './components/Services';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Hero />
      <WeLove />
      <Services />
    </React.Fragment >
  )
}

export default App;