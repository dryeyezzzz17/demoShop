import { useState } from 'react'
import './App.css'
import Head from './component/Head'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Footer from './component/Footer'
function App() {
  return (
    <div className='w-full h-full flex flex-col bg-yellow-50 overflow-y-hidden '>
      <Head/>
      <Nav/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
