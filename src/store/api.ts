import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// For this scalable setup, we'll use a mock API base URL.
// In a real environment, this would point to the Express backend.
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => '/products',
    }),
    getProductById: builder.query<any, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = api;
