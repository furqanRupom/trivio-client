import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath:"baseApi",
    baseQuery:axiosBaseQuery({
        baseUrl: "https://trivio-server.vercel.app/api/v1"
    }),
    endpoints:() =>({})

})