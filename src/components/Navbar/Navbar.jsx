import React,{useContext} from 'react'
import'./Navbar.css'
import Logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import {Link} from 'react-router-dom'
const Navbar = () => {

  const {setCurrency} =useContext(CoinContext);

  const currencyHandler=(event)=>{
    switch(event.target.value){
      case "usd":{
        setCurrency({
          name:"usd",
          Symbol:"$"
        })
        break;
      }
      case "eur":{
        setCurrency({
          name:"eur",
          Symbol:"€"
        })
        break;
      }
      case "inr":{
        setCurrency({
          name:"inr",
          Symbol:"₹"
        })
        break;
      }
      default:{
        setCurrency({
          name:"usd",
          Symbol:"$"
        })
        break;
      }
    }

  }
  return (
    <div className='navbar'> 
    <Link to={'/'}>
      <img src={Logo} alt="Logo" className='logo'></img>
    </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/news'}><li>Crypto News</li></Link>
        <Link to={'/articles'}><li>Latest Crypto Articles</li></Link>
        <Link to={'/about'}><li>About</li></Link>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <Link to={'/login'}>
          <button className="login-button">Login</button>
        </Link>
        <Link to={'/signup'}>
          <button>Sign up<img src={arrow_icon} alt="arrow_icon"/></button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
