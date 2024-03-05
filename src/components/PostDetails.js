import React, { useState, useEffect, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";
import './PostDetails.css'
import { AppContext } from "../context/AppContext";
import { PostContext } from "../context/PostContext";
import { getCommentsPostById } from "../services/comment.service";


const PostDetails = () => {
  const [error, setError] = useState();
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { showComments } = useContext(AppContext);
  const { postData,handleClickPost} = useContext(PostContext)
  let postId = postData && postData.id
  useEffect(() => {
    async function fetchPostDetails() {
      setIsLoading(true);
      try {
       const commentList = await getCommentsPostById(postId);
        console.log("comment", commentList.comments)
        setComments(commentList.comments)
      } catch (error) {
        console.error('Error fetching post details:', error);
        setError("Error while loading posts");
      }
    }
    fetchPostDetails();
    setIsLoading(false);

  }, [postId]);

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
      <div className="post-details">
        <div className="card comment-card ">
          <div className="card-header d-flex justify-content-between">{postData.title} <IoClose className="fs-4" onClick={() =>handleClickPost(null)} /></div>
          <p className="card-text comment-body">{postData.body}</p>
          <p className="card-text username mb-3 me-3"> By {postData.username}</p>
          {showComments &&
            <div className="card-body">
              <h5 className="comment-title"> <FaCommentAlt /> Comments</h5>
              <div className="comment-container">
                {comments && comments.length !== 0 ?
                  comments.map((comment, id) => (
                    <div key={id} className="comment-info ">
                      <span className="ms-3">{comment.body}</span>
                      <span className="comment-userName"> By {comment.user.username}</span>
                    </div>))
                  : <p>no Comments...</p>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default PostDetails;





