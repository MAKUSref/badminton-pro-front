import { baseApi } from './baseApi';

import { TournamentStatus } from '../types/common';

export const registerStatusApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegisterStatus: builder.query<TournamentStatus, void>({
      query: () => `/registerStatus`,
      providesTags: ['registerStatus'],
      transformResponse: (res: { registerStatus: TournamentStatus }) => res.registerStatus
    }),
    setRegisterStatus: builder.mutation<{ registerStatus: TournamentStatus }, TournamentStatus>({
      query: (registerStatus) => ({
        url: `/registerStatus`,
        body: { registerStatus },
        method: 'POST'
      }),
      invalidatesTags: ['registerStatus']
    })
  })
});

export const { useGetRegisterStatusQuery, useSetRegisterStatusMutation } = registerStatusApi;
