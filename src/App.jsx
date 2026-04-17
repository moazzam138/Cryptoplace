import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import News from './pages/News/News'
import Articles from './pages/Articals/Articles'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'

const App = () => {
  return (
    <div className='app'> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinID" element={<Coin />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
