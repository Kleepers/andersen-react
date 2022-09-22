import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://rickandmortyapi.com/api/character";

export const characterApi = createApi({
    reducerPath: "characterApi",
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
        getCharacterById: builder.query({
            query: (idArr) => {
                const characterUrl = idArr.map((id: number) => `${id}`).join(',');
                return {
                    url: `/${characterUrl}`
                }
            }
        }),
    }),
});

export const {
    useGetCharacterQuery,
    useGetCharacterByIdQuery
} = characterApi;
