import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        signUp:build.mutation({

            query:(data)=>{
                return {
                    url: "/auth/register",
                    method: "POST",
                    data: data
                }
            }
        }),
        signIn: build.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                data:data
            })
        })
    })
})


export const {useSignInMutation,useSignUpMutation} = authApi