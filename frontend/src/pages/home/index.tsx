import { useGetCompaniesQuery } from "@/api/companies";
import { Company } from "@/api/companies/types";
import { Container, IndustryCard, IndustryCardItem } from "@/components";
import { useMemo } from "react";

const Home = () => {
  const { data: companies = { items: [] } } = useGetCompaniesQuery();

  const companiesGroups = useMemo(() => {
    // Remove duplicate companies
    const uniqueCompanies = companies.items.filter(
      (company, index, self) =>
        index === self.findIndex((t) => t.uuid === company.uuid),
    );

    // Sort companies by name
    uniqueCompanies.sort((a, b) => a.name.localeCompare(b.name));

    // Group companies by industries
    return uniqueCompanies.reduce(
      (acc, company) => {
        company.industries.forEach((industry) => {
          if (!acc[industry.name]) {
            acc[industry.name] = { companies: [], totalJobs: 0 };
          }

          acc[industry.name].companies.push(company);
          acc[industry.name].totalJobs += company.totalJobsAvailable;
        });

        return acc;
      },
      {} as Record<string, { companies: Company[]; totalJobs: number }>,
    );
  }, [companies.items]);

  return (
    <div
      className={`
        bg-gray-100 min-h-lvh
      `}
    >
      <Container>
        <div
          className={`
            grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3
            py-4
          `}
        >
          {Object.entries(companiesGroups).map(
            ([group, { companies, totalJobs }]) => (
              <IndustryCard key={group} title={group} totalJobs={totalJobs}>
                {companies.map((company) => (
                  <IndustryCardItem
                    key={company.uuid}
                    name={company.name}
                    totalJobsAvailable={company.totalJobsAvailable}
                    imageUrl={company.images["32x32"]}
                  />
                ))}
              </IndustryCard>
            ),
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
