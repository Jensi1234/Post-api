export const getAlluser = async () => {
    const usersData = await fetch('https://dummyjson.com/users?limit=100')
    const users = await usersData.json()
    return users;
}
