import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export type Post = {
    id: string
    title: string
    views: number
}

export const apiSlice = createApi({
    reducerPath : 'data',
    baseQuery : fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Posts', 'Post'],
    endpoints : (builder) => ({
        getPosts: builder.query<Post[],void>({
            query: () => '/posts',
            providesTags : ['Posts']
        }),
        getPost: builder.query<Post,number>({
            query: (id) => `/posts/${id}`,
            providesTags: ['Posts']
        }),
        createPost: builder.mutation<Post, Partial<Post>>({
            query: (newPost) => ({
                url : '/posts',
                method: 'POST',
                body: newPost
            }),
            invalidatesTags: ['Posts']
        })
    })
})

export const {useGetPostsQuery, useCreatePostMutation, useLazyGetPostQuery} = apiSlice
