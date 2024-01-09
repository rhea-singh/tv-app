import { PageHeader, MainPageContainer, PageContent } from "./styled";
import useFetch from "../../utils/hooks/useFetch";
import { useState } from "react";
import { API } from "../../utils/constants";

export const EpisodeDetailsPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, loading, error } = useFetch({
    url: `${API.getShowUrl}${searchQuery}`,
  });
  return (
    <MainPageContainer>
      <PageHeader>Search a show</PageHeader>
      <PageContent>
        <input
          name="search-input"
          placeholder="Search a movie here"
          value={searchQuery}
        />
      </PageContent>
    </MainPageContainer>
  );
};
