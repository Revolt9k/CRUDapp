import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://jsonplaceholder.typicode.com/" ,
})

export const postsAPI = {
    getPosts() {
        return instance.get('posts').then(response => {
            return response.data
        })
    },
    changePost(postId, newText) {
        return instance.put(`posts/${postId}`, {body: newText}).then(response => {
            return response.data
        })
    },
    deletePost(postId) {
        return instance.delete(`posts/${postId}`).then(response => {
            return response.data
        })
    },
    createPost(title, body, userId, id) {
        return instance.post(`posts/`, {title, body, userId, id}).then(response => {
            return response.data
        })
    },
}

