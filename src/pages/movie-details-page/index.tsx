import {
  PageContent,
  OverviewContainer,
  PageHeader,
  Section,
  EpisodeList,
  StarRating,
  SubTitle,
  TextContent,
  ShowPreview,
  EpisodeCarousel,
} from "./styled";
import useFetch from "../../utils/hooks/useFetch";
import { API, defaultShowValue } from "../../utils/constants";
import { Skeleton } from "../../components/layouts/Skeleton";
import starIcon from "../../assets/icons/star-rate.svg";
import { NotFound } from "../page-not-found";
import { useParams } from "react-router-dom";
import { Card } from "../../components/layouts/Card";

interface DynamicHTMLComponentProps {
  htmlString: string | TrustedHTML;
}

const DynamicHTMLComponent = ({ htmlString }: DynamicHTMLComponentProps) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export const MovieOverviewPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: showDetails = defaultShowValue,
    loading,
    error,
  } = useFetch({
    url: `${API.getShowUrl}${id}${API.embedEpisodes}`,
  });

  return (
    <OverviewContainer>
      <ShowPreview>
        {loading && <Skeleton height="186px" />}
        {error && <NotFound />}
        <PageHeader
          aria-labelledby="movie-poster"
          url={showDetails.image.original}
        ></PageHeader>
        <PageContent aria-labelledby="movie-details">
          <Section gap="lg">
            <h1 className="movie-title">{showDetails.name}</h1>
            <StarRating>
              <img className="icon" src={starIcon} alt="star icon" />
              <p aria-labelledby="star rating">{showDetails.rating.average}</p>
            </StarRating>
          </Section>
          <Section>
            <SubTitle aria-labelledby="genres">Genres : </SubTitle>
            {showDetails.genres.map((genre) => {
              return <p aria-labelledby={genre}>{genre}</p>;
            })}
          </Section>
          <Section>
            <SubTitle aria-labelledby="genres">Language : </SubTitle>
            {showDetails.language}
          </Section>
          <Section>
            <SubTitle aria-labelledby="genres">Duration : </SubTitle>
            {`${showDetails.runtime} minutes`}
          </Section>
          <Section>
            <SubTitle aria-labelledby="genres">Ended on : </SubTitle>
            {showDetails.ended}
          </Section>
          <TextContent>
            <SubTitle aria-labelledby="movie plot">Plot</SubTitle>
            <DynamicHTMLComponent htmlString={showDetails.summary} />
          </TextContent>
        </PageContent>
      </ShowPreview>
      <EpisodeList>
        <h4 className="title">Episodes</h4>
        <EpisodeCarousel>
          {showDetails?._embedded &&
            showDetails?._embedded.episodes.map((episode, key) => {
              return (
                <Card
                  key={key}
                  episode={episode}
                 // onClick={() => console.log('card was clicked')}
                />
              );
            })}
        </EpisodeCarousel>
      </EpisodeList>
    </OverviewContainer>
  );
};
