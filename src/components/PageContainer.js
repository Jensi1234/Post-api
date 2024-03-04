import './PageContainer.css'

import PostsContainer from './PostsContainer';
import CommentsContainer from './PostDetails';
import { PostContext } from "../context/PostContext";
import { useContext } from 'react';


const PageContainer = () => {
    const { commentData } = useContext(PostContext)
    return (
        <>
            <div className='d-flex'>
                <div className='left-container'>
                    <PostsContainer />
                </div>
                {commentData &&
                    <div className='right-container'>
                        <CommentsContainer />
                    </div>}
            </div>
        </>
    )
}

export default PageContainer;