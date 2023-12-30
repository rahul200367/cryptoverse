import React from 'react'
import {Link} from 'react-router-dom'
import './Styles/Navbar.css'
function Navbar() {
    return (
        <>
      <nav>
      <div className="d-flex align-items-center mx-2 justify-content-center top position-sticky">
           <h4>Cryptoverse</h4><img src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" alt="logo"  className='curlogo mx-2'/>
           </div>
            <ul className=' navbar-nav list'>
                <li className='nav-item active'><Link to ='/' className='nav-link'><i className="fa-solid fa-house"></i><span className='mx-2'>Homepage</span></Link></li>
                <li className='nav-item active'><Link to ='/exchange' className='nav-link'><i className="fa-solid fa-arrow-right-arrow-left"></i><span className="mx-2">Exchange</span></Link></li>
                <li className='nav-item active'><Link to ='/cryptocurrencies' className='nav-link' ><i className="fa-brands fa-gg-circle"></i><span className="mx-2">Cryptocurriencies</span></Link></li>
                <li className='nav-item active'><Link to ='/news' className='nav-link'><i className="fa-solid fa-newspaper"></i><span className="mx-2">News</span></Link></li>
            </ul>
           </nav>
        </>
    )
}

export default Navbar
