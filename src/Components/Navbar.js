import React, {useState} from 'react'
import './Navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import Avatar from '@material-ui/core/Avatar';
import {useStateValue} from "./StateProvider"
import AppsIcon from '@material-ui/icons/Apps';


function Navbar() {
  const [searchText,setSearchText] = useState('')
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='navbar'>
      <div className='nav__left'>
        <img className='nav__avatar' src='./logo.webp' alt='image__logo'></img>
        <form>
          <input className='search__input' 
          type='text' 
          value={searchText} 
          placeholder='Search'
          onChange={(e) => setSearchText(e.target.value)}></input>
        </form>      
      </div>

      <div className='nav__right'>
        <div className='nav__link'>
          <HomeIcon className='nav__icon'></HomeIcon>
          <p>home</p>
        </div>
        <div className='nav__link'>
          <LanguageIcon className='nav__icon'></LanguageIcon>
          <p>Network</p>
        </div>
        <div className='nav__link'>
          <WorkIcon className='nav__icon'></WorkIcon>
          <p>Jobs</p>
          
        </div>
        <div className='nav__link'>
          <SmsIcon className='nav__icon'></SmsIcon>
          <p>Messages</p>       
        </div>
        <div color='disabled' className='nav__link'>
          <NotificationsIcon className='nav__icon'></NotificationsIcon>
          <p>Notifications</p>
        </div>
        <div className='nav__link'>
          {/*<Avatar src={user.photoUrl} />*/}
          <LanguageIcon className='nav__icon'></LanguageIcon>
          <p>Me</p>
        </div>
      </div>

      <div className="nav__right__right">
        <div className='nav__link'>
          <AppsIcon className='nav__icon'></AppsIcon>
          <p>More</p>       
        </div>
        <p className="access__text">Try premium free for 1 month</p>
      </div>
    </div>
  )
}

export default Navbar
