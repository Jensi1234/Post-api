import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";


const PostsContainer = ({posts,clickPost}) =>{
    return(
        <>
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
        </>
    )
}
export default PostsContainer