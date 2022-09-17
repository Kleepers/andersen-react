
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const URL = "https://rickandmortyapi.com/api/character";

export const characterApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints: (builder) => ({
        getCharacter: builder.query({
            query: ({page, name, status, species, type, gender}) => {
                return {
                    params: {page, name, status, species, type, gender},
                    url: '/'
                }
            }
        }),
        getCharacterBySelector: builder.mutation({
            query: (name) => `/?name=${name}`,
        }),
    }),
});

export const {
    useGetCharacterQuery,
    useGetCharacterBySelectorMutation
} = characterApi;
