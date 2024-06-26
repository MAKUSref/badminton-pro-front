import { baseApi } from './baseApi';
import { GROUP_NULL_ERR } from './errorMessages';

import { Id } from '../types/common';
import { Single, SingleWithoutId } from '../types/Group';

export const singlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleById: builder.query<Single, { id: Id }>({
      query: ({ id }) => {
        if (!id) throw new Error(GROUP_NULL_ERR);
        return `/singles/${id}`;
      },
      providesTags: ['singles']
    }),
    getSingleScoreById: builder.query<
      { allMatches: number; playedMatches: number; score: number },
      Id
    >({
      query: (id) => {
        if (!id) throw new Error(GROUP_NULL_ERR);
        return `/singles/${id}/score`;
      },
      providesTags: ['singles', 'match', 'schedule']
    }),
    getSingles: builder.query<Single[], { groupId?: Id }>({
      query: ({ groupId }) => {
        if (!groupId) throw new Error(GROUP_NULL_ERR);
        return `/singles/${groupId ? `?groupId=${groupId}` : ''}`;
      },
      providesTags: ['singles']
    }),
    removeSingleById: builder.mutation<Single, { id: Id }>({
      query: ({ id }) => ({
        url: `/singles/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['singles', 'player']
    }),
    addSingle: builder.mutation<Single, { single: SingleWithoutId }>({
      query: ({ single }) => ({
        url: `/singles`,
        method: 'POST',
        body: single
      }),
      invalidatesTags: ['singles', 'player']
    }),
    addManySingles: builder.mutation<Single[], { singles: SingleWithoutId[] }>({
      query: ({ singles }) => ({
        url: `/singles/addMany`,
        method: 'POST',
        body: singles
      }),
      invalidatesTags: ['singles', 'player']
    })
  })
});

export const {
  useAddSingleMutation,
  useGetSingleByIdQuery,
  useGetSinglesQuery,
  useLazyGetSinglesQuery,
  useRemoveSingleByIdMutation,
  useAddManySinglesMutation,
  useGetSingleScoreByIdQuery,
  useLazyGetSingleScoreByIdQuery
} = singlesApi;
