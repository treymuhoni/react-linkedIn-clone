import React from 'react'
import './ListComponent.css'

function ListComponent({title}) {
    return (
        <div className='list__item'>
            <a href='www.google.com'>{title}</a>
        </div>
    )
}

export default ListComponent
