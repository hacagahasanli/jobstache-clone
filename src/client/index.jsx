import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const Rapid_API_Key = import.meta.env.VITE_Rapid_API_Key;
const Rapid_Key_Value = import.meta.env.VITE_Rapid_Key_Value;
const Rapid_API_Host = import.meta.env.VITE_Rapid_API_Host;
const Rapid_API_Host_Value = import.meta.env.VITE_Rapid_API_Host_Value;
const BASE_URL = import.meta.env.VITE_BASE_URL

export const getJobsApi = createApi({
    reducerPath: "josbApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set(Rapid_API_Key, Rapid_Key_Value)
            headers.set(Rapid_API_Host, Rapid_API_Host_Value)
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSearchedPosts: builder.query({
            query: (query = "Python developer in Texas, USA", num_pages = 1) =>
                `/search?query=${query}&num_pages=${num_pages}`
        })
    })
})
//https://jsearch.p.rapidapi.com/search?query=Python developer in Texas, USA&num_pages=1
//{ query = 'Python developer in Texas, USA', num_pages = '1' }
export const { useGetSearchedPostsQuery } = getJobsApi