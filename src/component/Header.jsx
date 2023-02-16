import React from 'react'
import logooImage1 from '../Img/mylogo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-logo'>
        <img className='logoImage' src={logooImage1} alt="loading" />
        <h2>Eeffoc</h2>
    </div>
     <div className='nav-list1'>
        <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Scooters</li>
        <li>Quick tour</li>
        </ul>
     </div>
    </div>
    
  )
}

export default Header