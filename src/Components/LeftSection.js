import React from 'react'
import './LeftSection.css'
import ListComponent from './ListComponent'
import {useStateValue} from "./StateProvider"

function LeftSection() {
    const [{ user },dispatch] = useStateValue()
    return (
        <div className='left__section'>      
                <div className='left__section__top'>
                    <div className='left__section__top__top'>
                        <img className='avatar' 
                            src={user.photoURL}
                            alt='user image'>
                        </img>
                        <h4 className='user__name'>{user.displayName}</h4>
                        <p className='user__description'>Web developer at freelance.com</p>
                    </div>
                    <div className='left__section__top__bottom'>
                        <div className='connections'>
                            <p>Connections <span>39</span></p>
                            <h6>Grow your connections</h6>
                        </div>
                        <div className='viewers'>
                            <p>Profile Viewers <span>9</span></p>                      
                        </div>
                        <div className='access'>
                            <p>Access exclusive tools and insights</p>
                            <h6>Try premium free for 1 month</h6>
                        </div> 
                        <h6 className='items'>My Items</h6>             
                    </div>                 
                </div>
                <div className='left__section__bottom'>
                    <div className='list'>
                        <ListComponent reference='/groups' title='Groups' />
                        <ListComponent reference='/events' title='Events'/>
                        <ListComponent reference='/hashtags' title='Followed Hashtags'/>
                    </div>
                </div>
            </div>
    )
}

export default LeftSection
