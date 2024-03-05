import './PageContainer.css'
import PostsContainer from './PostsContainer';
import PostDetails from './PostDetails';
import { PostContext } from "../context/PostContext";
import { useContext } from 'react';

const PageContainer = () => {
    const { postData } = useContext(PostContext)
    return (
        <>
            <div className='container-fluid d-flex p-0'>
                <div className='left-container'>
                    <PostsContainer />
                </div>
                {postData &&
                    <div className='right-container'>
                        <PostDetails  />
                    </div>}
            </div>
        </>
    )
}

export default PageContainer;