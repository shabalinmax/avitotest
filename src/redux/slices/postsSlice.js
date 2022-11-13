import { createSlice,  } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    loadingPageOpened: true,
    openedPost: {},
    errorPageOpened: false
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
        setLoading:(state,action) => {
            state.loadingPageOpened = action.payload
        },

    },
})

export const {  setPosts, openPost, setLoading  } = postSlice.actions

export default postSlice.reducer