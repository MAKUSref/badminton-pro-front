import { baseApi } from './baseApi';
import { USER_NULL_ERR } from './errorMessages';

import { Id } from '../types/common';
import { Match, MatchWithoutId } from '../types/Match';

export const matchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateMatch: builder.mutation<Match, { id: Id; match: MatchWithoutId }>({
      query: ({ id, match }) => ({
        url: `/matches/${id}`,
        method: 'PUT',
        body: { ...match } //TODO: get this from form
      }),
      invalidatesTags: ['match']
    }),
    getMatchById: builder.query<Match, Id>({
      query: (id) => {
        if (!id) throw new Error(USER_NULL_ERR);
        return `/matches/${id}`;
      },
      providesTags: ['match']
    })
  })
});

export const { useGetMatchByIdQuery, useUpdateMatchMutation } = matchApi;
