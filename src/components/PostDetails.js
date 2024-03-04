import React, { useState, useEffect, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";
import './PostDetails.css'
import { AppContext } from "../context/AppContext";
import { PostContext } from "../context/PostContext";


const PostDetails = () => {
  const [error, setError] = useState();
  const [comments, setComment] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { showComments } = useContext(AppContext);
  const { commentData, clickPost, close } = useContext(PostContext)
  let id = commentData && commentData.id
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

  return (
    <>
      {commentData && <div className="comment">
        <div className="card comment-card">

          <div className="card-header d-flex justify-content-between">{commentData.title} <IoClose onClick={close} /></div>
          <p className="card-text comment-body">{commentData.body}</p>
          <p className="card-text username mb-3 me-3"> By {commentData.username}</p>
          {showComments &&
            <div className="card-body">
              <h5 className="comment-title"> <FaCommentAlt /> Comments</h5>
              <div className="comment-container">
                {comments && comments.length !== 0 ?
                  comments.map((comments, id) => (
                    <div key={id} className="comment-info ">
                      <span className="ms-3">{comments.body}</span>
                      <span className="comment-userName"> By {comments.user.username}</span>
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

export default PostDetails;





