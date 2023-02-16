import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-list'>
            <div className='footer-left'>
                <Button>Buy now <FontAwesomeIcon className='my-arrow' icon={faCircleArrowLeft} /></Button>
                <div>
                    <ul>
                        <h4>Links</h4>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Quick Tour</p>
                        <p>Register</p>
                    </ul>
                    <ul>
                        <h4>Company</h4>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                    </ul>
                </div>
            </div>
            <div className='footer-right'>
                <h1>Place an order</h1>
                <p>Come and be our favorite customer for the year</p>
                <Button>Buy now  <FontAwesomeIcon className='my-arrow' icon={faCircleArrowLeft} /></Button>
            </div>
        </div>
        <p><i>Designed and Developed by Ayantunji Peace @2023 copyrights reserved all rights reserved.</i></p>
    </div>
  )
}

export default Footer