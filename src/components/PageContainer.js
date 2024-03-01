import './PageContainer.css'
import { useEffect, useState } from 'react';
import PostsContainer from './PostsContainer';
import CommentsContainer from './CommentsContainer';


const PageContainer = ({ showComments }) => {
    const [commentData, setCommentData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [posts, setPost] = useState([])
    const [users, setUsers] = useState([])


    useEffect(() => {
        async function postDetail() {

            setIsLoading(true);
            try {
                const postData = await fetch('https://dummyjson.com/posts?limit=150')
                const usersData = await fetch('https://dummyjson.com/users?limit=100')
                const data = await postData.json()
                const usersContainer = await usersData.json()
                const users = usersContainer.users || []
                const fetchedPosts = (data.posts || []).map((post) => {
                    const user = users.find((user) => user.id === post.userId)
                    return {
                        ...post,
                        username: user?.username,
                    }
                })
                setPost(fetchedPosts)
                setUsers(usersContainer.users)
            } catch (e) {
                console.log('error', e)
                setError("Error while loading posts");
            }
            setIsLoading(false);

        }
        postDetail()
    }, [])



    if (isLoading) {
        return (
            <div className="container-fluid-gif">
                <div>loading...</div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="container-fluid">
                <div>{error}</div>
            </div>
        );
    }

    const clickPost = (postMessage) => {
        setCommentData(postMessage)
    }
    return (
        <>
            <div className='d-flex'>
                <div className='left-container'>
                    <PostsContainer posts={posts} clickPost={clickPost} />
                </div>
                <div className='right-container'>
                    {commentData && <CommentsContainer post={commentData} showComments={showComments} />}
                </div>
            </div>
        </>
    )
}

export default PageContainer;