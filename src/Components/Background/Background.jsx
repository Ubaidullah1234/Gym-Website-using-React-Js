import React from 'react'
import './Background.css';
import right_arrow from '../../assets/right_arrow.png';


const Background = () => {
  return (
    <div className='background '>
      <div className="background-text">
        <h1 className='build'>
        BUILD YOUR BODY
        </h1>
        <h1 className='transform'>
        TRANSFORM YOUR LIFE
        </h1>
        <p className='simple'>
        WE PROVIDE OUR BEST OPPORTUNITY AND QUALIFIED

        </p>
        <p className='simple1'>
        TRAINER FOR BEST WORKOUT YOURSELF AS YOU WANT!

        </p>
        <br />
        <button className='btn1'>Explore More <img src={right_arrow} alt="" /></button>
      </div>
      
    </div>
  )
}

export default Background
