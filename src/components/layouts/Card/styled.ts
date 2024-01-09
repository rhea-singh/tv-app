import styled from "styled-components";

interface CardProps {
  backgroundImg: string;
}
export const StyledCard = styled.div`
  width: 400px;
  min-width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 24px 20px 24px;
  position: relative;
  animation: slide 3000ms ease-in-out;
  font-family: initial;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.font20};

  &:hover .image-container {
    filter: blur(5px);
  }
  &:hover img {
    display: block;
    opacity: 1;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: "358px";
    padding: 16px;
  }
  @keyframes slide {
    0% {
      background-position: 100% 0;
    }
    50% {
      background-position: 50% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
export const PictureCard = styled.div<CardProps>`
  height: 80%;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
`;

export const CardTopContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  max-height: 29px;
  gap: 16px;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  img {
    position: relative;
    top: 40%;
    left: 40%;
    display: none;
    height: 50px;
    width: 80px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;
