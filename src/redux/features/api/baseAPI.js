import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://tracker-board-backend.vercel.app/",
    }),
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: () => "/tasks",
            providesTags: ["Tasks"],
        }),
        // getSearchedTask: builder.query({
        //     query: (search) => `/tasks?search=${search}`,
        // }),
        getSingleTask: builder.query({
            query: (id) => `/tasks/${id}`,
        }),
        addTask: builder.mutation({
            query: (data) => ({
                url: "/tasks",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Tasks"],
        }),
        updateTask: builder.mutation({
            query: ({ data, id }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            }),
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"],
        }),
    }),
});

export const {
    useGetAllTasksQuery,
    useGetSingleTaskQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = baseApi;
export default baseApi;
