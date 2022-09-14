
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const URL = "https://rickandmortyapi.com/api/character";

export const characterApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints: (builder) => ({
        getPage: builder.mutation({
            query: (parameters: {page: number, name: string, status: string, species: string, type: string, gender: string}) => {
                return {
                    url: `/?page=${parameters.page}&name=${parameters.name}&status=${parameters.status}&species=${parameters.species}&type=${parameters.type}&gender=${parameters.gender}`,
                    method: 'GET'
                }
            }
        }),
        getCharacter: builder.mutation({
            query: (page) => `/?page=${page}`,
        }),
        getCharacterBySelector: builder.mutation({
            query: (name) => `/?name=${name}`,
        }),
    }),
});

export const {
    useGetPageMutation,
    useGetCharacterMutation,
    useGetCharacterBySelectorMutation
} = characterApi;
