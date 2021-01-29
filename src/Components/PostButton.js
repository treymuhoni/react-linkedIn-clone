import React from 'react'
import './PostButton.css'

function PostButton({title,icon,showImageUrlInput}) {
    
    return (
        <div>
            <button className='button' onClick={showImageUrlInput}>
                <div class='btn__icon'>
                    {icon}
                </div>
                <div className='btn__title'>
                    {title}
                </div>
            </button>
        </div>
    )
}

export default PostButton
