import { CardTitle, CardTopContentLeft, Overlay, PictureCard, StyledCard } from "./styled";
import { episodeType } from "../../../utils/types/movie-details";
import eyeIcon from "../../../assets/icons/eye.svg";

interface CardProps {
  episode: episodeType;
}

export const Card = ({ episode }: CardProps) => {
  const { name, season, number, image } = episode;
  return (
    <StyledCard>
      <PictureCard className="image-container" backgroundImg={image.original}/>
      <Overlay>
        <img className="icon" src={eyeIcon} alt="watch icon" />
      </Overlay>
      <CardTopContentLeft>
        {`Season ${season} : Episode${number}`}
      </CardTopContentLeft>
      <CardTitle>{name}</CardTitle>
    </StyledCard>
  );
};
