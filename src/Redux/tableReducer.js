import {postsAPI} from "../API/api";

const SET_POSTS = "setPosts";
const CHANGE_POST = "changePost";
const HANDLE_EDIT_MODE = "handleEditMode";
const CHOOSE_POST = "choosePost";
const DELETE_POST = "deletePost";
const CREATE_POST = "createPost";
const CHANGE_PAGE = "changePage";


let initialState = {
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "initial state title",
            "body": "it will never be shown"
        },
    ],
    editMode: false,
    currentPost: null,
    pageSize: 5,
    totalPostsCount: 100,
    currentPage: 1,
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state, posts: action.newPostList,
            }
        }
        case CHANGE_POST: {
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.postId) {
                        return {...state, ...post, body: action.newText}
                    }
                    return {...state, ...post}
                }),

            }
        }
        case CHOOSE_POST: {
            return {
                ...state,
                editMode: true,
                currentPost: action.postId
            }

        }
        case HANDLE_EDIT_MODE: {
            return {
                ...state,
                editMode: !state.editMode
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.slice(0, action.postId - 1).concat([" "]).concat(state.posts.slice(state.currentPost, state.totalPostsCount*2))
            }
        }
        case CREATE_POST: {
            let newPost = {
                id: action.id,
                userId: action.userId,
                title: action.title,
                body: action.body,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                totalPostsCount: state.totalPostsCount + 1,
                editMode: false,
            }
        }
        case CHANGE_PAGE : {
            return {
                ...state,
                currentPage: action.page
            }
        }
        default: {
            return state;
        }
    }
}

export const setPosts = (newPostList) => ({type: SET_POSTS, newPostList})

export const handleEditMode = () => ({type: HANDLE_EDIT_MODE, })

export const choosePost = (postId) => ({type: CHOOSE_POST, postId})

export const changePost = (postId, newText) => ({type: CHANGE_POST, postId, newText})

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const createPost = (title, body, userId, id) => ({type: CREATE_POST, title, body, userId, id})

export const changePage = (page) => ({type: CHANGE_PAGE, page})


export const getPostsThunkCreator = () => async (dispatch) => {
    let data = await postsAPI.getPosts()
    dispatch(setPosts(data))
}

export const changePostThunkCreator = (postId, newText) => async (dispatch) => {
    let data = await postsAPI.changePost(postId, newText)
    dispatch(changePost(data.id, data.body))
}

export const deletePostThunkCreator = (postId) => async (dispatch) => {
    dispatch(handleEditMode())
    await postsAPI.deletePost(postId)
    dispatch(deletePost(postId))
}

export const createPostThunkCreator = (title, body, userId, id) => async (dispatch) => {
    let data = await postsAPI.createPost(title, body, userId, id)
    dispatch(createPost(data.title, data.body, data.userId, id))
}

export default tableReducer