import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk('post/fetchPost', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
})

const postSlice = createSlice({
    name: 'post',
    initialState : {items: [], status: 'idle' },
    reducers: {},
    extraReducers : (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPost.fulfilled, (state, action)=> {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchPost.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default postSlice.reducer