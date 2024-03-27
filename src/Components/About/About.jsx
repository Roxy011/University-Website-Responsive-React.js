import React from 'react'
import './About.css'
import about_img from'../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=> setPlayState(true)} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse officiis officia veniam id aspernatur autem. Qui, unde natus? Nulla iure, dolores, nam architecto ipsum consequatur fugiat sint rem explicabo cupiditate quam voluptas? Perferendis quasi veniam voluptate minus voluptas. Doloremque.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente assumenda neque quo modi iste quis suscipit, dolore perferendis deleniti, atque deserunt aperiam similique temporibus, fuga nisi odio. Repellendus id modi at eligendi, ad enim harum, nam ex vel, animi minima!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab rerum pariatur nobis error blanditiis. Distinctio libero illum vitae. Placeat dicta sapiente dolorum unde, obcaecati eos dolorem neque consequatur, id quae iste error nesciunt laboriosam omnis voluptates iure voluptate voluptas!</p>
        </div>
    </div>
  )
}

export default About