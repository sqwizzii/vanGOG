import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Створюю API через RTK Query. Це зручно, бо не треба вручну писати fetch-и.
// reducerPath – просто ім’я, за яким воно буде в сторі.
export const apiCategory = createApi({
    reducerPath: "apiCategory",

    // Вказую базову URL-адресу для всіх запитів.
    baseQuery: fetchBaseQuery({ baseUrl: "https://lohika.itstep.click/api/" }),

    // Тут описую всі ендпоінти (запити), які мені потрібні.
    endpoints: (builder) => ({

        // Запит для отримання списку категорій.
        getCategories: builder.query({
            // Просто повертає endpoint без параметрів.
            query: () => "Categories/list", // можливо, доведеться змінити на актуальний endpoint
        }),

        // Мутація для видалення категорії.
        deleteCategory: builder.mutation({
            // Передаю id категорії, формую URL і кажу, що це DELETE-запит.
            query: (id) => ({
                url: `Categories/delete/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

// Експортую готові хуки, щоб можна було викликати їх у компонентах.
// Наприклад, useGetCategoriesQuery() — для отримання даних,
// useDeleteCategoryMutation() — для видалення.
export const { useGetCategoriesQuery, useDeleteCategoryMutation } = apiCategory;
