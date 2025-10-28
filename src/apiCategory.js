import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCategory = createApi({
    reducerPath: "apiCategory",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://lohika.itstep.click/api/Categories/",
    }),
    tagTypes: ["Category"],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "list",
            providesTags: ["Category"],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Category"],
        }),
    }),
});

export const { useGetCategoriesQuery, useDeleteCategoryMutation } = apiCategory;
