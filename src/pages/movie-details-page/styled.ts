import styled from "styled-components";

interface PageHeaderProps {
  url: string;
}
interface SectionProps {
  gap?: string;
}

export const ShowPreview = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 599px;
    max-height: 2, 934px;
    padding: 72px 0px 144px 0px;
  }
`;

export const OverviewContainer = styled.div`
  padding: 32px;
  @media ${({ theme }) => theme.media.mobile} {
    gap: 24px;
  }
`;

export const PageContent = styled.div`
  width: 100%;
  height: inherit;
  gap: 24px;

  @media ${({ theme }) => theme.media.mobile} {
    gap: 24px;
  }
`;

export const PageHeader = styled.div<PageHeaderProps>`
  width: 1, 248px;
  height: auto;
  background-image: url(${(props) => props.url});
  background-size: cover;

  @media ${({ theme }) => theme.media.mobile} {
    max-height: 215px;
  }
`;

export const Section = styled.div<SectionProps>`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 16px;
  gap: ${(props) => (props.gap === "lg" ? "40px" : "16px")};

  font-size: ${({ theme }) => theme.typography.size.font20};

  .movie-title {
    font-family: initial;
    color: ${({ theme }) => theme.colors.typography.dark};
  }

  @media ${({ theme }) => theme.media.mobile} {
    gap: 16px;
  }
`;

export const EpisodeList = styled.div`
  height: fit-content;
  gap: 24px;
  padding-top: 64px;
  display: contents;
  overflow-x: auto;

  .title {
    padding: 24px 0px;
    font-family: initial;
    font-size: ${({ theme }) => theme.typography.size.font24};
  }

  @media ${({ theme }) => theme.media.mobile} {
    gap: 24px;
  }
`;

export const StarRating = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.typography.light};
  border-radius: 16px;
  padding: 8px 12px;

  img {
    height: max-content;
    width: 1rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    gap: 8px;
  }
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.font20};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const TextContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  padding-bottom: 16px;
  font-size: ${({ theme }) => theme.typography.size.font20};

  @media ${({ theme }) => theme.media.mobile} {
    gap: 16px;
  }
`;

export const EpisodeCarousel = styled.div`
  max-width: 200%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: auto;
  padding-bottom: 16px;
  font-size: ${({ theme }) => theme.typography.size.font20};

  @media ${({ theme }) => theme.media.mobile} {
    gap: 16px;
  }
`;
