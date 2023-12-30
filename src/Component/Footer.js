import React from 'react'
import './Styles/Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='footer'>
   <div className='d-flex justify-content-center align-items-center flex-column'>
   <div>Cryptoverse</div>
   <div>All Rights reserved ©2023</div>
   <div className='d-flex justify-content-center'>
    <Link className='nav-link' to='/'><li className="nav-link p-2">Home</li></Link>
    <Link className='nav-link' to='/exchange'><li className='nav-link p-2'>Exchange</li></Link>
    <Link className='nav-link' to='/news'><li className='nav-link p-2'>News</li></Link>
   </div>
   </div>
    </div>
    </>
  )
}

export default Footer
