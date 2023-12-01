import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statesDataApi = createApi({
    reducerPath: "statesDataApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API}/api`
    }),
    endpoints: (builder) => {
        return {
            getPageData: builder.query({
                query: () => "/states?pagination[pageSize]=50"
            })
        }
    }
})

export const {useGetStatesDataQuery} = statesDataApi;