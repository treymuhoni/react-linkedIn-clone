import React,{useState} from 'react'
import './MiddleSection.css'
import PostButton from './PostButton'
import Post from './Post'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';

function MiddleSection() {
    const [searchInput,setSearchInput] = useState('')
    return (
        <div className='middle__section'>
            <div className='middle__top'>
                <form>
                    <input type='text' 
                        className='input__field'
                        value={searchInput}
                        placeholder='Start a post'
                        onChange={(e) => setSearchInput(e.target.value)}>
                    </input>
                </form>
                <div className='buttons'>
                    <PostButton icon={<PhotoSizeSelectActualIcon color='green' />} title='Photo' />
                    <PostButton icon={<YouTubeIcon />} title='Video'/>
                    <PostButton icon={<DateRangeIcon />} title='Event'/>
                    <PostButton icon={<PostAddIcon />}title='Write Article'/>
                </div>             
            </div>

            <div className='middle__bottom'>
                <Post />
            </div>
        </div>
    )
}

export default MiddleSection
