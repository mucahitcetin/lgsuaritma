import React from 'react'
import HeroPage from './HeroPage'
import About from './About'
import Product from './Product'
import Comments from './Comments'
import Contact from './Contact'


const Home = () => {
  return (
    <div>
      <HeroPage/>
      <About/>
      <Product/>
      <Comments/>
      <Contact/>
    </div>
  )
}

export default Home