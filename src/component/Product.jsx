import React from 'react'
import Button from './Button'
import productImage from '../Img/coffee1.png'
import productTwo  from '../Img/coffee2.png'
import productThree from '../Img/coffee3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCircleArrowLeft,
     faCirclePlus,
} from '@fortawesome/free-solid-svg-icons'
const Product = () => {
  return (
    <div className='product-container'>
        <div className='product-background'>
            <div className='product-left'>
                <div>
                <h2>From our very best</h2>
                <p>SATISFY YOUR CRAVINGS</p>
                <Button>Buy now  <FontAwesomeIcon className='my-arrow' icon={faCircleArrowLeft} /></Button>
                </div>
            </div>
            <div className='product-right'>
                <div className='coffee-price'>
                    <img src={productImage} alt="" />
                    <div className='price-list'>
                    <p><span>Espresso</span><br /><b>$15.99</b></p>
                    <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} />
                    </div>
                </div>
                <div className='coffee-price'>
                <img src={productTwo} alt="" />
                    <div className='price-list'>
                    <p><span>Black coffee</span><br /><b>$10.40</b></p>
                    <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} />
                    </div>
                </div>
                <div className='coffee-price'>
                <img src={productThree} alt="" />
                    <div className='price-list'>
                    <p><span>Diluted Coffee</span><br /><b>$20.30</b> </p>
                    <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} />
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Product