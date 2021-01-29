import React from 'react'
import './Post.css'
import PostButton from './PostButton'
import {useStateValue} from "./StateProvider"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Post({ profileImage, message, timestamp, postImage, userName, profession,}) {
    return (
        <div className='post'>
            <div className='m'>
                <div className='post__desc'>
                    <img className='post__avatar' src={profileImage} alt='post avatar'></img>
                    <div className='post__user__profile'>
                        <h5 className='post__user__name'>{userName}</h5>
                        <p className='post__prof'>{profession}</p>
                        <p className='post__time'>{timestamp}</p>
                    </div>
                </div>
                <div className='post__caption'>
                   <p className='caption'>{message}</p>  
                </div>
            </div>
            <div className='post__image__container'>
                <img className='post__image' src={postImage} alt='post image'></img>
            </div>
            <div className='comment__section'>
                <div className='comment__count'>
                    <p>2 comments</p>
                </div>
                <div className='like__buttons'>
                    <PostButton icon={<ThumbUpIcon />} title='Like' />
                    <PostButton icon={<InsertCommentIcon />} title='Comment' />
                    <PostButton icon={<ShareIcon />} title='Share' />
                    <PostButton icon={<SendIcon />} title='Send' />
                </div>
            </div>
            <MoreHorizIcon className='dots' />
        </div>
    )
}

export default Post
