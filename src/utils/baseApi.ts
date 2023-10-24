import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query';

export const baseApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'http://localhost',
  }),
  endpoints: () => ({}),
});

export const baseGraphqlApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost/graphql',
  }),
  endpoints: () => ({}),
});
