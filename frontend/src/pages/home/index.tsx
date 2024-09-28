import { useGetCompaniesQuery } from "@/api/companies";
import { Company } from "@/api/companies/types";
import { Container, IndustryCard } from "@/components";
import { useMemo } from "react";

const Home = () => {
  const { data: companies = { items: [] } } = useGetCompaniesQuery();

  const companiesGroups = useMemo(
    () =>
      companies.items.reduce(
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
      ),
    [companies.items],
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
          {Object.entries(companiesGroups).map(([group]) => (
            <IndustryCard key={group} title={group} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
