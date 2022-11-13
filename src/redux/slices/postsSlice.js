import { createSlice,  } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    loading: false,
    error: false,
    openedPost: {}
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, newPosts) => {
            state.posts = newPosts.payload
        },
        openPost:(state,openedPost) => {
            state.openedPost = openedPost.payload
        },

    },
})

export const {  setPosts, openPost  } = postSlice.actions

export default postSlice.reducer