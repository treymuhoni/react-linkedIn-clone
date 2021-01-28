import React, {useState} from 'react'
import './Navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import Avatar from '@material-ui/core/Avatar';

function Navbar() {
  const [searchText,setSearchText] = useState('')
  return (
    <div className='navbar'>
      <div className='nav__left'>
        <img className='nav__avatar' src='./logo1.png' alt='image__logo'></img>
        <form>
          <input className='search__input' 
          type='text' 
          value={searchText} 
          placeholder='Search'
          onChange={(e) => setSearchText(e.target.value)}></input>
         {/* <button onClick={handleSubmit}>s</button>*/}
        </form>      
      </div>

      <div className='nav__right'>
        <div className='nav__link'>
          <HomeIcon color='disabled' className='nav__icon'></HomeIcon>
          <p>Home</p>
        </div>
        <div className='nav__link'>
          <LanguageIcon color='disabled' className='nav__icon'></LanguageIcon>
          <p>My network</p>
        </div>
        <div className='nav__link'>
          <WorkIcon color='disabled' className='nav__icon'></WorkIcon>
          <p>Jobs</p>
        </div>
        <div className='nav__link'>
          <SmsIcon color='disabled' className='nav__icon'></SmsIcon>
          <p>Messaging</p>
        </div>
        <div color='disabled' className='nav__link'>
          <NotificationsIcon color='disabled' className='nav__icon'></NotificationsIcon>
          <p>Notifications</p>
        </div>
        <div className='nav__link'>
          <Avatar src='./bg.jpg' />
          <p>Me</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
