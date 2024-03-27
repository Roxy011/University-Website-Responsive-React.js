import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis dolore ipsum? Maiores exercitationem perferendis deserunt doloribus ea! Accusantium, voluptatem.</p>
            <button className='btn'>Explore More <img src={arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero