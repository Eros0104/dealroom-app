import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tags = {
  companies: "companies",
};

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: [tags.companies],
  endpoints: () => ({}),
});

export default baseApi;
