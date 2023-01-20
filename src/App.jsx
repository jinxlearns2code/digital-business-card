import { useState } from 'react'
import './App.css'
import Image from '../components/Image.jsx'
import Header from '../components/Header.jsx'
import Body from '../components/Body.jsx'
import Footer from '../components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Image />
			<Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
