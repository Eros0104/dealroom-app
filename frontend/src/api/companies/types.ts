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

interface CompanyResponse {
  uuid: string;
  images: CompanyImages;
  incomeStreams: IncomeStream[];
  industries: Industry[];
  name: string;
  tagline: string;
  totalJobsAvailable: number;
}

export type { CompanyResponse };
