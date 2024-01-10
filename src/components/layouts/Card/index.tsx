import {
  CardTitle,
  CardTopContentLeft,
  Overlay,
  PictureCard,
  StyledCard,
} from "./styled";
import { episodeType } from "../../../utils/types/episode-details";
import eyeIcon from "../../../assets/icons/eye.svg";

interface CardProps {
  episode: episodeType;
  onClick?: () => void;
}

export const Card = ({ episode, onClick }: CardProps) => {
  const { name, season, number, image } = episode;
  return (
    <StyledCard onClick={onClick}>
      <PictureCard className="image-container" backgroundImg={image.original} />
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
