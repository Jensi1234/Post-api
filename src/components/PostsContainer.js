import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { PostContext } from "../context/PostContext";
import './PageContainer.css'
import { getAllPost } from "../services/post.service";
import { getAlluser } from "../services/user.service";



const PostsContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const { handleClickPost } = useContext(PostContext)


  useEffect(() => {
    async function postDetail() {
      setIsLoading(true);
      try {
        const postList = await getAllPost();
        const usersList = await getAlluser();
        const users = usersList.users || []
        const fetchedPosts = (postList.posts || []).map((post) => {
          const user = users.find((user) => user.id === post.userId)
          return {
            ...post,
            username: user?.username,
          }
        })
        setPosts(fetchedPosts)
        setUsers(usersList.users)
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

  return (
    <>
      <a href='#down' className='d-flex justify-content-end' ><FaArrowAltCircleDown className='down-arrow mt-3 ' /> </a>
      <div className='post-mess'  >
        {posts.map((post) => {
          // const { title, body } = post;
          return (
            <div className='post-container'  >
              <div className="card" onClick={() => handleClickPost(post)}>
                <div className="card-header d-flex justify-content-between " >{post.title}
                </div>
                <div className="card-body">
                  <p className="card-text">{post.body}</p>
                  <div className='userName'>
                    <a href='#' className='user btn btn-outline-secondary'>  {post.username ? `By ${post.username}` : "Unknown"}  </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <a href='#' className='d-flex justify-content-end' id='down' ><FaArrowAltCircleUp className='up-arrow mt-3 ' /> </a>
    </>
  )
}
export default PostsContainer