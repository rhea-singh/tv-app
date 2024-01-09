import { PageHeader, MainPageContainer, PageContent } from "./styled";
import SearchBar from "../../components/ui/Search";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../utils/constants";

export const LandingPage = () => {
  const navigate = useNavigate();
  const handleSearch = (query: any) => {
    navigate(`${RoutePath.ShowOverviewPath}${query}`);
  };

  return (
    <MainPageContainer>
      <PageHeader>Search a movie</PageHeader>
      <PageContent>
        <SearchBar name="search-input" handleSearch={handleSearch} />
      </PageContent>
    </MainPageContainer>
  );
};
