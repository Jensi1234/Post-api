import React, { useState, useEffect } from "react";
import { FaCommentAlt } from "react-icons/fa";
import './Comment.css'

const Comment = ({ post, showComments }) => {
  const [error, setError] = useState();
  const [comments, setComment] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [toggleButton, setToggleButton] = useState(false);
  let id = post && post.id
  useEffect(() => {
    async function fetchPostDetails() {
      setIsLoading(true);

      try {
        const commentData = await fetch(`https://dummyjson.com/posts/${id}/comments`)
        const data = await commentData.json()
        console.log("comment", data.comments)
        setComment(data.comments)
      } catch (error) {
        console.error('Error fetching post details:', error);
        setError("Error while loading posts");
      }
    }
    fetchPostDetails();
    setIsLoading(false);

  }, [id]);

  if (isLoading) {
    return (
      <div className="container-fluid">
        <div>loading..</div>
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

  // function changeBtn() {
  //   setToggleButton(!toggleButton)

  // }

  return (
    <>

      {/* <button
        className="btn comment-btn comment-btn"
        type="button"
        id="button-addon2"
        onClick={changeBtn}
       >
        {toggleButton ? 'show' : 'hide'}
      </button> */} 


      {post && <div className="comment">
        <div className="card comment-card">
          <div className="card-header">{post.title}</div>
          <p className="card-text comment-body">{post.body}</p>
          <p className="card-text username mb-3 me-3"> By {post.username}</p>
          {showComments &&
            <div className="card-body">
              <h5 className="comment-title"> <FaCommentAlt /> Comments</h5>
              <div className="comment-container">

                {comments && comments.length !== 0 ?
                  comments.map((commentData, id) => (
                    <div key={id} className="comment-info ">
                      <span className="ms-3">{commentData.body}</span>
                      <span className="comment-userName"> By {commentData.user.username}</span>
                    </div>))
                  : <p>no Comments...</p>
                }
              </div>
            </div>
          }
        </div>
      </div>}
    </>
  );
}

export default Comment;





