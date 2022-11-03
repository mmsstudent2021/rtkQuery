import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoAPI = createApi({
  reducerPath: "todoAPI",
  tagTypes: ["todo"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (name) => `/${name}`,
      providesTags: ["todo"],
      transformResponse: (res) => {
        console.log(res);
        return res.map((i) => ({ ...i, forDo: i.forDo.toUpperCase() }));
      },
    }),
    postTodo: builder.mutation({
      query: (data) => ({
        url: `/todo`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (data) => ({
        url: `/todo/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoAPI;
export default todoAPI;
