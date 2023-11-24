import { useState } from 'react'
import { Flex, Text, Button } from '@radix-ui/themes';
import 'react-toastify/dist/ReactToastify.css';
import './Globals.css'
import Nav from './components/Navbar/Nav';
import About from './components/About/About';
function App() {


  return (
  <div className="app select-none">
    <Nav />
    <About/>
  </div>
  )
}

export default App
