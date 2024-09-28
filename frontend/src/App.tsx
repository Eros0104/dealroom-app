import { useGetCompaniesQuery } from "@/api/companies";
import { Container, IndustryCard, Providers } from "@/components";
import "./index.css";

const Home = () => {
  const { data: companies = [] } = useGetCompaniesQuery();
  return (
    <div className="bg-gray-100 min-h-lvh">
      <Container>
        {companies.map((company) => (
          <IndustryCard key={company.uuid} title={company.name} />
        ))}
      </Container>
    </div>
  );
};

function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;
