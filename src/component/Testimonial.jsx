import React from 'react'
import profileImage from '../Img/profile.png'
import quota from '../Img/quota.png'
const Testimonial = () => {
  return (
    <div className='testimonials'>
     <div className='lefty'>
        <h1>Testimonials</h1>
        <div className='testy-box'>
            <div className='testy'>
                <div>
                <img src={profileImage} alt=""  />
                <p><b>James Doe</b> <br /><span>BMX Stunts Biker</span></p>
                </div>
                <img src={quota} alt=""  />
            </div>
            <div>
             <p>I couldn't be happier with my purchase. The staff was incredibly helpful and patient as I tried out different models.
                </p>
            </div>
        </div>
        <div className='testy-box2'>
            <div className='testy'>
            <div>
                <img src={profileImage} alt=""  />
                <p><b>James Doe</b> <br /><span>BMX Stunts Biker</span></p>
                </div>
                <img src={quota} alt=""  />
            </div>
            <div>
             <p> The mechanics were very knowledgeable and efficient, and they had my bike up and running in no time. I'll definitely be coming back for all my future bike needs.</p> 
            </div>
            
        </div>
        <div className='testy-box3'>
            <div className='testy'>
            <div>
                <img src={profileImage} alt=""  />
                <p><b>James Doe</b> <br /><span>BMX Stunts Biker</span></p>
                </div>
                <img src={quota} alt=""  />
            </div>
            <div>
             <p>I've been loving my new bike and I'm so glad I went with Roadactive</p>
            </div>
         
        </div>
     </div>
    </div>
  )
}

export default Testimonial