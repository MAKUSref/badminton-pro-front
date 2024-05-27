import { baseApi } from './baseApi';

import { ScheduleDetails, ScheduleResponse } from '../types/Match';

export interface ScheduleForm {
  startDate: string;
  courtCount: number;
  startTime: string;
  endTime: string;
}

export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSchedule: builder.query<ScheduleDetails, void>({
      query: () => `/schedule`,
      providesTags: ['schedule']
    }),
    generateSchedule: builder.mutation<ScheduleResponse, ScheduleForm>({
      query: (scheduleForm) => ({
        url: `/schedule`,
        body: scheduleForm,
        method: 'POST'
      })
    }),
    saveSchedule: builder.mutation<ScheduleDetails, ScheduleResponse>({
      query: (schedule) => ({
        url: `/schedule/save`,
        body: schedule,
        method: 'POST'
      }),
      invalidatesTags: ['schedule']
    })
  })
});

export const { useGenerateScheduleMutation, useGetScheduleQuery, useSaveScheduleMutation } =
  scheduleApi;
