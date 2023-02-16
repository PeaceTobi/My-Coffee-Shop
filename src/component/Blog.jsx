import React from 'react'
import blogOne from '../Img/blog1.png'
import blogTwo from '../Img/blog2.png'
import blogThree from '../Img/blog3.png'
import Button from './Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Blog = () => {
  return (
    <div className='ourblog'>
        <h1>Our Blog</h1>
        <p>STAY UPDATED WITH OUR NEWSLETTER</p>
        <div className='blog-card'>
            <div className='blog-box'>
                <img src={blogOne} alt="" className='new-pic' />
                <h3>Should I drink coffee in the morning?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Officiis earum optio libero fuga nulla odit expedita amet! Saepe, dolore non.</p>
                 <Button>Read more  <FontAwesomeIcon className='my-arrow' icon={faCircleArrowLeft} /></Button>
            </div>
            <div className='blog-box'>
                <img src={blogTwo} alt="" className='new-pic' />
                <h3>Health benefit of coffee</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Officiis earum optio libero fuga nulla odit expedita amet! Saepe, dolore non.</p>
                    <Button>Read more  <FontAwesomeIcon className='my-arrow' icon={faCircleArrowLeft} /></Button>
            </div>
            <div className='blog-box'>
                <img src={blogThree} alt="" className='new-pic' />
                <h3>How it is made?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Officiis earum optio libero fuga nulla odit expedita amet! Saepe, dolore non.</p>
                    <Button className='blog-btn'>Read more  <FontAwesomeIcon className='my-arrow' icon={faCircleArrowLeft} /></Button>
            </div>
        </div>
    </div>
  )
}

export default Blog