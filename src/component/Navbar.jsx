import React from 'react'
import logoImage from '../Img/mylogo.png'
import Button from './Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div className='navbar'>
        
       
        
        <div className='hero-left'>
            <div className='logo'>
                   <img src={logoImage} alt="" />
                   <h2>Eeffoc</h2>
            </div>
            
            
            <div className='blak-cofe'>
                    
                    <h1>Black Coffee</h1>
                    <p>Take care of the project during its whole product life-cycle
                       from initial research to concept creation to prototyping and usability test. </p>
                     
            </div>
            <Button>Buy now <FontAwesomeIcon className='my-arrow' icon={faCircleArrowLeft} /></Button>
            </div>

        <div className='hero-right'>
             <div className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Scooters</li>
                    <li>Quick tours</li>
                </ul>
                </div>
                
                 
        </div>
        
    </div>
  )
}

export default Navbar