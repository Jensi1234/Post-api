import './Post.css'
import { useEffect, useState } from 'react';
import Comment from './Comment'
import './Post.css'
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaEdit } from "react-icons/fa";

const Post = ({showComments}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [posts, setPost] = useState([])
  const [users, setUsers] = useState([])
  const [commentData, setCommentData] = useState()
 

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
  // console.log('hey')
  // console.log(posts)
  // console.log(users)
  return (
    <>
      <div className='d-flex'>
        <div className='left-container'>

          <a href='#down' className='d-flex justify-content-end' ><FaArrowAltCircleDown className='down-arrow mt-3 ' /> </a>
          <div className='post-mess'  >
            {posts.map((postMessage) => {
              const { id, title, body } = postMessage;
              return (
                <div className='post-container'  >
                  <div className="card" onClick={() => clickPost(postMessage)}>
                    <div className="card-header d-flex justify-content-between " >{title}
                    </div>

                    <div className="card-body">
                      <p className="card-text">{body}</p>
                      <div className='userName'>
                        <a href='#' className='user btn btn-outline-secondary'>  {postMessage.username ? `By ${postMessage.username}` : "Unknown"}  </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <a href='#' className='d-flex justify-content-end' id='down' ><FaArrowAltCircleUp className='up-arrow mt-3 ' /> </a>
        </div>

        <div className='right-container'>
        {commentData &&<Comment post={commentData} showComments={showComments} />}
          
        </div>
      </div>

    </>
  )
}

export default Post;