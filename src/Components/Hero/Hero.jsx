import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll"

const Hero = () =>
    {
      return (
        <div>
          <div  id='home' className="hero">
            <img src={profile_img} alt="profile" />
            <h1><span>I'm Tirth Swami,</span>Frontend developer</h1>
            <p>I am a Front-End Developer creating dynamic and responsive web applications. Proficient in HTML, CSS, and
            JavaScript and basic React</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>

          </div>
        </div>
      )
    }
    export default Hero