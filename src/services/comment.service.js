export const getCommentsPostById = async (postId) =>{
    const commentData = await fetch(`https://dummyjson.com/posts/${postId}/comments`)
    const comments = await commentData.json()
    return comments
}