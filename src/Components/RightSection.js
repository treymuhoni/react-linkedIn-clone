import React from 'react'
import Company from './Company'
import './RightSection.css'

function RightSection() {
    return (
        <div className="right__section">
            <div className='right__section__top'>
                <h4 className='right__section__heading'>Add to your feed</h4>
                <div>
                    <Company name='JWS' info='web development company' />
                    <Company name='Amazon' info='web services' />
                    <Company name='Wish' info='online shopping and shipping' />    
                </div>
            </div>
            <div className='right__section__bottom'>
                <h4 className='right__section__heading'>Today's most viewed courses</h4>
                <div className='bottom__text'>
                    <h6>The six morning habits for perfomance</h6>
                    <p>How to be awesome at evrything you do</p>
                </div>
                <div className='bottom__text'>
                    <h6>Unconcious bias</h6>
                    <p>Stacey Gordon</p>
                </div>
                <div className='bottom__text'>
                    <h6>Diversity,Inclusion and belonging</h6>
                    <p>Pat Wadors</p>
                </div>
            </div>
        </div>
             
    )
}

export default RightSection
