import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    loading: false,
    error: '',
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, newPosts) => {
            state.posts = newPosts.payload
            console.log(newPosts)
        },


    },
})

export const {  setPosts  } = postSlice.actions

export default postSlice.reducer