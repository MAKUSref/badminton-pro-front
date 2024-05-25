import { baseApi } from './baseApi';

export const playersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPlayers: builder.mutation<void, void>({
      query: () => ({
        url: `/players`,
        method: 'POST',
        body: {}
      }),
      invalidatesTags: ['group', 'singles']
    })
  })
});

export const { useAddPlayersMutation } = playersApi;
