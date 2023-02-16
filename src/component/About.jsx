import React from 'react'
import aboutImage from '../Img/coffee bean 1.png'
import aboutTwo from '../Img/aboutimg.png'
import Button from './Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faCircleArrowLeft,
    
}  from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div className='about-container'>
      <div className='about-head'>
        <h2>About Us</h2>
        <p>STAY UPDATED WITH OUR NEWSLETTER</p>
      </div>
      <div className='about-box1'>
        <div className='aboutbox-top'>
            <h3>Roasted coffee</h3>
            <p>Cultivating the land and nourishing our communities, one seed at a time.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud.</p>
                <Button>Learn more <FontAwesomeIcon icon={faCircleArrowLeft} className='my-arrow' /></Button>
        </div>
          <div className='aboutbox-top2'>
          <img className='about-img' src={aboutImage} alt="" />
          </div>
      </div>
      <div className='about-box2'>
          <div className='aboutbox-bottom'>
          <img className='about-img' src={aboutTwo} alt="" />
          </div>
          <div className='aboutbox-bottom2'>
          <h3>We sell in bulk</h3>
            <p>Cultivating the land and nourishing our communities, one seed at a time.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud.</p>
                <Button>Learn more <FontAwesomeIcon className='my-arrow' icon={faCircleArrowLeft} /></Button>
          </div>
          </div>
    </div>
  )
}

export default About