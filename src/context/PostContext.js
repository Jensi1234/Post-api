import { createContext, useState } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [commentData, setCommentData] = useState()

    const clickPost = (postMessage) => {
        setCommentData(postMessage)
    }

    const close = () => {
        setCommentData(null)
    }
    return (
        <>
            <PostContext.Provider value={{ commentData, clickPost, close }}>
                {children}
            </PostContext.Provider>
        </>
    )
}

export default PostProvider;