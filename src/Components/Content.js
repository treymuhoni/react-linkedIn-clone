import React from 'react'
import './Content.css'
import ListComponent from './ListComponent'
import MiddleSection from './MiddleSection'
import RightSection from './RightSection'

function Content() {
    return (
        <div className='content'>
            <div className='left__section'>      
                <div className='left__section__top'>
                    <div className='left__section__top__top'>
                        <img className='avatar' 
                            src='./bg.jpg'
                            alt=''>
                        </img>
                        <h4 className='user__name'>Trevor Muhoni</h4>
                        <p className='user__description'>Web developer at freelance.com</p>
                    </div>
                    <div className='left__section__top__bottom'>
                        <div className='connections'>
                            <p>Connections</p>
                            <span>39</span> 
                        </div>
                        <div className='viewers'>
                            <p>Who viewed your profile</p>
                            <span>9</span>
                        </div>
                        <div className='access'>
                            <p>Access exclusive tools and insights</p>
                            <h4>Try premium free for 1 month</h4>
                        </div> 
                        <p className='items'>My Items</p>             
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
            
            <div className='middle__section'>
                <MiddleSection />
            </div>
            <div className='right__section'>
                <RightSection />
                <h1>right section</h1>
            </div>
            
        </div>
    )
}

export default Content

