import { baseApi } from './baseApi';

import { Tournament, TournamentWithoutId } from '../types/Tournament';

export const tournamentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyTournament: builder.query<Tournament, void>({
      query: () => {
        return `/tournament`;
      },
      providesTags: ['tournament']
    }),
    finishTournament: builder.mutation<Tournament, void>({
      query: () => ({
        url: `/tournament/finish`,
        method: 'PUT'
      }),
      invalidatesTags: ['tournament']
    }),
    updateTournament: builder.mutation<Tournament, { tournament: TournamentWithoutId }>({
      query: ({ tournament }) => ({
        url: `/tournament`,
        method: 'PUT',
        body: tournament
      }),
      invalidatesTags: ['tournament']
    })
  })
});

export const { useFinishTournamentMutation, useUpdateTournamentMutation, useGetMyTournamentQuery } =
  tournamentApi;
