const BASE_URL = "https://jsonplaceholder.typicode.com"

export const GET_POSTS = `${BASE_URL}/posts`
export const ADD_POST = `${BASE_URL}/posts`
export const UPDATE_POST = (id) => `${BASE_URL}/posts/${id}`
export const DELETE_POST = (id) => `${BASE_URL}/posts/${id}`