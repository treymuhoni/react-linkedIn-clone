import React,{ useState, useEffect} from 'react'
import './MiddleSection.css'
import PostButton from './PostButton'
import Post from './Post'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {useStateValue} from "./StateProvider"
import db from './Firebase'
import firebase from 'firebase'


function MiddleSection() {
    const [postMessage,setPostMessage] = useState('')
    const [posts,setPosts] = useState([])
    const [imageUrl,setImageUrl] = useState([])
    const [imageUrlInput,setImageUrlInput] = useState(false)

    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
       db.collection('posts').onSnapshot((snapshot) => {
           setPosts(snapshot.docs.map((doc) => ({
               id: doc.id,
               data:doc.data()
           })))
       })
    }, [])
    console.log(posts)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            message:postMessage,
            timestamp:Date.now().toLocaleString(),
            profileImage:user.photoURL,
            userName:user.displayName,
            postImage:imageUrl,
            profession:''
        })
        setPostMessage('')
        setImageUrl('')
        setImageUrlInput(false)
    }
    const showImageUrlInput = () => {
        setImageUrlInput(!imageUrlInput)
    }

    return (
        <div className='middle__section'>
            <div className='middle__top'>
                <form>
                    <input type='text' 
                        className='input__field'
                        value={postMessage}
                        placeholder='Start a post | click on the photo icon to put image link'
                        onChange={(e) => setPostMessage(e.target.value)}>
                    </input>
                    {!imageUrlInput ? ( 
                        <></>
                    ) : (   
                        <>
                            <input 
                                type='text' 
                                className='input__field'
                                value={imageUrl}
                                placeholder='enter image link'
                                onChange={(e) => setImageUrl(e.target.value)}>
                            </input>
                            <button type='submit' onClick={handleSubmit}></button>
                        </>
                        )}
                </form>
                <div className='buttons'>
                    <PostButton showImageUrlInput={showImageUrlInput} icon={<PhotoSizeSelectActualIcon color="secondary" />} title='Photo' />
                    <PostButton icon={<YouTubeIcon color="primary" />} title='Video'/>
                    <PostButton icon={<DateRangeIcon color="secondary" />} title='Event'/>
                    <PostButton icon={<PostAddIcon color="primary" />}title='Write Article'/>
                </div>             
            </div>

            <div className='middle__bottom'>
                {posts.map((post) => (
                    <Post
                        key={post.data.id}
                        profileImage={user.photoURL}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        userName={post.data.userName}
                        postImage={post.data.postImage}
                        profession={post.data.profession}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default MiddleSection
