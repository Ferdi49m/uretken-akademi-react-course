import React from 'react'
import {FaCoins} from  "react-icons/fa"
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <Link >
        <div className='navbar'>
            <FaCoins className="icon"/>
            <h1>Coin <span className=' purple'></span>Search</h1>
        </div>
    </Link>
  )
}

export default Navbar