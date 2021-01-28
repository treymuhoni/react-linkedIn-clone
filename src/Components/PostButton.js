import React from 'react'
import './PostButton.css'

function PostButton({title,icon}) {
    return (
        <div>
            <button className='button'>
                {icon}
                {title}
            </button>
        </div>
    )
}

export default PostButton
