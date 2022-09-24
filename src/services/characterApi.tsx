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
            },
            //Если бы не нужны были данные для пагинации в компоненте CardsContainer: transformResponse: (responseData: any) => responseData.results
            //Подробнее про приходящие данные: https://rickandmortyapi.com/documentation/#filter-characters (убираем бесполезное info из response)
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
