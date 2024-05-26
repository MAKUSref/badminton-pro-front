import { baseApi } from './baseApi';
import { USER_NULL_ERR } from './errorMessages';

import { Gender, Id } from '../types/common';
import { Player, PlayerWithoutId } from '../types/Player';

export const playerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlayers: builder.query<Player[], void>({
      query: () => `/players`,
      providesTags: ['player']
    }),
    getAllPlayersAvailableForSingle: builder.query<Player[], { gender?: Gender }>({
      query: ({ gender }) => `/players/availableForSingle${gender ? `?gender=${gender}` : ''}`,
      providesTags: ['player']
    }),
    addPlayer: builder.mutation<Player, PlayerWithoutId>({
      query: (player) => ({
        url: '/players/',
        method: 'POST',
        body: { ...player, role: [] } //TODO: get this from form
      }),
      invalidatesTags: ['player']
    }),
    updatePlayer: builder.mutation<Player, { id: Id; player: PlayerWithoutId }>({
      query: ({ id, player }) => ({
        url: `/players/${id}`,
        method: 'PUT',
        body: { ...player, role: [] } //TODO: get this from form
      }),
      invalidatesTags: ['player']
    }),
    suspendAccountById: builder.mutation<Player, Id>({
      query: (id) => ({
        url: `/players/${id}`,
        method: 'PUT'
      }),
      invalidatesTags: ['player']
    }),
    getPlayerById: builder.query<Player, Id>({
      query: (id) => {
        if (!id) throw new Error(USER_NULL_ERR);
        return `/players/${id}`;
      },
      providesTags: ['player']
    }),
    addAllPlayers: builder.mutation<void, void>({
      query: () => ({
        url: `/players/addAll`,
        method: 'POST',
        body: {}
      }),
      invalidatesTags: ['player']
    })
  })
});

export const {
  useAddPlayerMutation,
  useGetAllPlayersQuery,
  useGetAllPlayersAvailableForSingleQuery,
  useGetPlayerByIdQuery,
  useSuspendAccountByIdMutation,
  useUpdatePlayerMutation,
  useAddAllPlayersMutation
} = playerApi;
