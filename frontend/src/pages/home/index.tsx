import { useGetCompaniesQuery } from "@/api/companies";
import { Company } from "@/api/companies/types";
import { Container, IndustryCard, IndustryCardItem } from "@/components";
import { useMemo } from "react";

const Home = () => {
  const { data: companies = { items: [] } } = useGetCompaniesQuery();

  const companiesGroups = useMemo(() => {
    // Remove duplicate companies
    const filteredDuplicates = companies.items.filter(
      (company, index, self) =>
        index === self.findIndex((t) => t.uuid === company.uuid),
    );

    // Group companies by industries
    return filteredDuplicates.reduce(
      (acc, company) => {
        company.industries.forEach((industry) => {
          if (!acc[industry.name]) {
            acc[industry.name] = [];
          }
          acc[industry.name].push(company);
        });

        return acc;
      },
      {} as Record<string, Company[]>,
    );
  }, [companies.items]);

  const totalJobsAvailable = companies.items.reduce(
    (acc, company) => acc + company.totalJobsAvailable,
    0,
  );

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
          {Object.entries(companiesGroups).map(([group, companies]) => (
            <IndustryCard
              key={group}
              title={group}
              totalJobs={totalJobsAvailable}
            >
              {companies.map((company) => (
                <IndustryCardItem
                  key={company.uuid}
                  name={company.name}
                  totalJobsAvailable={company.totalJobsAvailable}
                  imageUrl={company.images["32x32"]}
                />
              ))}
            </IndustryCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
