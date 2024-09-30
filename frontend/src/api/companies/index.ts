import baseApi, { tags } from "../base-api";
import { CompaniesResponse } from "./types";

const baseUrl = "api/companies";

export const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<CompaniesResponse, string>({
      query: (search: string) => `${baseUrl}?search=${search}`,
      providesTags: [tags.companies],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCompaniesQuery } = companyApi;
