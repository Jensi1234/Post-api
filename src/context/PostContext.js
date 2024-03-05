import { createContext, useState } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [postData, setPostData] = useState()

    const handleClickPost = (postContent) => {
        setPostData(postContent)
    }

    return (
        <>
            <PostContext.Provider value={{ postData, handleClickPost }}>
                {children}
            </PostContext.Provider>
        </>
    )
}

export default PostProvider;