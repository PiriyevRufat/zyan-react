import React from 'react'
import '../components/Header.css'
const Header = () => {
  return (
    <React.Fragment>
    <header>
    <div className="navbarcont">
    <div className='navbar-left'>
    <a href="">
    <img src="https://mail.google.com/mail/u/0?ui=2&ik=470add53e4&attid=0.1&permmsgid=msg-f:1798039950283294678&th=18f3ebcef098c7d6&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9ugolUX-BRXhBUwcaI0Yp__a_rZX3iI2aJto1MQ2bnPrrC-xNDZzRxl2eJgMOH6XehZpH-Wnm1ubq6BtYWILk7g_KkrG6tZOlDSQxeIxW6BBPoY0J4u6XP_dk&disp=emb&realattid=ii_lvqqlqgq0" alt="" /></a>
    </div>
    <div className='navbar-pages'>
    <ul>
    <li><a href="">Home</a></li>
    <li><a href="">About us</a></li>
    <li><a href="">Services</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Contact</a></li>
    </ul>
    </div>
    <div className='navbar-right'>
    <div className='navbar-right__burger'>
    <a href=""><i class="fa-solid fa-bars"></i></a>
    </div>
    </div>
    </div>
    </header>
    </React.Fragment>
  )
}

export default Header

