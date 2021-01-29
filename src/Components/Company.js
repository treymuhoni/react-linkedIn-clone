import React from 'react'
import './Company.css'

function Company({name,info,logo}) {
    return (
        <div>
            <div className='company'>
                <img className='company__logo' src='./bg.jpg' alt='company__logo'></img>
                <div className='company__info'>
                    <h6 className='company__name'>{name}</h6>
                    <p className__info>{info}</p>
                </div>
                <div className='follow__button__container'>
                    <button className='follow__button'> + Follow</button>
                </div>
            </div>
        </div>
    )
}

export default Company
