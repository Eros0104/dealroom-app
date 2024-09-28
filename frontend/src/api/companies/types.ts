interface CompanyImages {
  "32x32": string;
  "74x74": string;
  "100x100": string;
}

interface IncomeStream {
  id: number;
  name: string;
}

interface Industry {
  id: number;
  name: string;
}

interface Company {
  uuid: string;
  images: CompanyImages;
  incomeStreams: IncomeStream[];
  industries: Industry[];
  name: string;
  tagline: string;
  totalJobsAvailable: number;
}

interface CompaniesResponse {
  items: Company[];
  total: number;
}

export type { CompaniesResponse };
