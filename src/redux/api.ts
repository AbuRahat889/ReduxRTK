
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({

    reducerPath: "myApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    tagTypes:["posts"],
    endpoints: (builder) =>({
        getPosts: builder.query<Post[], string>({
            query: () => `/posts`,
            providesTags:["posts"],
        }),
        newPost : builder.mutation<Post, Post>({
            query: (post)=>({
                url: "/posts",
                method: "POST",
                body: post,

            }),
            invalidatesTags : ["posts"],
            
        })

    })
})

export const { useGetPostsQuery, useNewPostMutation } = myApi


// http://localhost:3000/posts