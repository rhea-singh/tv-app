import {
  PageContent,
  OverviewContainer,
  PageHeader,
  Section,
  EpisodeDetails,
  StarRating,
  SubTitle,
  TextContent,
} from "./styled";
import useFetch from "../../utils/hooks/useFetch";
import { API, defaultEpisodeValue } from "../../utils/constants";
import { Skeleton } from "../../components/layouts/Skeleton";
import starIcon from "../../assets/icons/star-rate.svg";
import { NotFound } from "../page-not-found";
import { useParams } from "react-router-dom";

export const EpisodeDetailsPage = () => {
  const { episodeId } = useParams<{ episodeId: string }>();
  const {
    data: episodeDetails = defaultEpisodeValue,
    loading,
    error,
  } = useFetch({
    url: `${API.getEpisodeUrl}${episodeId}`,
  });

  return (
    <>
      {loading && <Skeleton height="186px" />}
      {error && <NotFound />}
      {episodeDetails.id && (
        <OverviewContainer>
          <PageHeader
            aria-labelledby="episode-poster"
            url={episodeDetails.image.original}
          />
          <EpisodeDetails>
            <PageContent aria-labelledby="movie-details">
              <Section gap="lg">
                <h1 className="episode-title">{episodeDetails.name}</h1>
                <StarRating>
                  <img className="icon" src={starIcon} alt="star icon" />
                  <p aria-labelledby="star rating">
                    {episodeDetails.rating.average}
                  </p>
                </StarRating>
              </Section>
              <Section>
                <SubTitle aria-labelledby="season number">Season : </SubTitle>
                {episodeDetails.season}
              </Section>
              <Section>
                <SubTitle aria-labelledby="season number">Episode : </SubTitle>
                {episodeDetails.number}
              </Section>
              <Section>
                <SubTitle aria-labelledby="show duration">Duration : </SubTitle>
                {`${episodeDetails.airtime} minutes`}
              </Section>
              <Section>
                <SubTitle aria-labelledby="aired date">Aired on : </SubTitle>
                {episodeDetails.airdate}
              </Section>
              <TextContent>
                <SubTitle aria-labelledby="episode summary">Summary</SubTitle>
                <div
                  dangerouslySetInnerHTML={{ __html: episodeDetails.summary }}
                />
              </TextContent>
            </PageContent>
          </EpisodeDetails>
        </OverviewContainer>
      )}
    </>
  );
};
