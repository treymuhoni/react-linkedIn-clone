import React from 'react'
import './Post.css'
import PostButton from './PostButton'

function Post() {
    return (
        <div className='post'>
            <div className='m'>
                <div className='post__desc'>
                    <img className='post__avatar' src='./bg.jpg' alt='post avatar'></img>
                    <div className='post__user__profile'>
                        <h5 className='post__user__name'>Trevor Muhoni</h5>
                        <p className='post__prof'>Co-founder and head of the ultimate academy</p>
                        <p className='post__time'>19h</p>
                    </div>
                </div>
                <div className='post__caption'>
                   <p className='caption'>Our continent has adopted a culture of well developed countries across 
                   the world without evaluating our different dynamics. </p>  
                </div>
            </div>
            <div className='post__image__container'>
                <img className='post__image' src='./bg.jpg'></img>
            </div>
            <div className='comment__section'>
                <div className='comment__count'>
                    <p>2 comments</p>
                </div>
                <div className='like__buttons'>
                    <PostButton title='Like' />
                    <PostButton title='Comment' />
                    <PostButton title='Share' />
                    <PostButton title='Send' />
                </div>
            </div>
        </div>
    )
}

export default Post
