import { baseApi } from "./baseApi";

const quizzesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createQuizzes: build.mutation({

            query: (data) => {
                return {
                    url: "/admin/create-quiz",
                    method: "POST",
                    data: data
                }
            }
        }),
        updateQuiz: build.mutation({
            query: (data) => ({
                url: "/admin/update-quiz",
                method: "PUT",
                data: data
            })
        }),
        deleteQuiz: build.mutation({
            query: (args) => ({
                url: `/admin/delete-quiz/${args.id}`,
                method: "DELETE",
            })
        }),
        fetchedQuizzes: build.query({
            query: () => ({
                url: "/quizzes",
                method: "GET",
            })
        }),
        getSingleQuizzes: build.query({
            query: (args) => {
                return {
                    url: `/quizzes/${args.id}`,
                    method: "GET",
                }
            }
        })
    })
})


export const { useCreateQuizzesMutation,useUpdateQuizMutation,useDeleteQuizMutation,useFetchedQuizzesQuery,useGetSingleQuizzesQuery } = quizzesApi