
export const getAllPost = async () => {
    const postData = await fetch('https://dummyjson.com/posts?limit=150')
    const posts = await postData.json();
    return posts;
}




// export const getPostById = (postId) => {

// }

// export const savePost = (post) => {

// }