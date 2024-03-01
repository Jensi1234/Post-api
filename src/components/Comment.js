import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import './Comment.css'

const Comment = ({ post }) => {

    const [error, setError] = useState();
    const [comments, setComment] = useState([])
    const [isLoading, setIsLoading] = useState(true);
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



    return (
        <>
            {post && <div className="comment">
                <div className="card comment-card">
                    <div className="card-header">{post.title}</div>
                    <p className="card-text comment-body">{post.body}</p>
                    <div className="card-body">
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
                </div>
            </div>}
        </>
    );
}

export default Comment;





