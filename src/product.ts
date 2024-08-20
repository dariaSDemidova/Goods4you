import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface SearchProductsQueryParams {
  q: string;
  limit: number;
  skip: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  quantity: number;
  thumbnail: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  warrantyInformation: string;
  shippingInformation: string;
  images: string[];
}

interface SearchProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    searchProducts: builder.query<SearchProductsResponse, SearchProductsQueryParams>({
      query: ({ q, limit, skip }) => `products/search?q=${q}&limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useSearchProductsQuery } = productApi;