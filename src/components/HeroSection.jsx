import React from 'react'
import '../components/HeroSection.css'

const HeroSection = () => {
  return (
    <React.Fragment>
    <section className='herosect'>
    <div className='herosect-cont'>
    <div className='herosect-heading col-6'>
    <h1>HI, I'M RUFAT! CREATIVE</h1>
    <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
    <div className='herosect-lowerbtn'>
    <ul><li><a className='loading-btn'>Download Cv <i class="fa-solid fa-download"></i></a></li>
    <li><a className='video-btn' href=""><i class="fa-solid fa-play"></i>Watch The Video</a></li></ul>
    </div>
    </div>
    <div className='herosect-pfp col-6'>
    <img class='borderofavatar' src="https://zyan.vercel.app/images/shapes/banner_shape.png" alt="" />
    <img class='avatar' src="https://zyan.vercel.app/images/banner_img_1.png" alt="" />
    </div>
    </div>
    </section>
    </React.Fragment>
  )
}
export default HeroSection

