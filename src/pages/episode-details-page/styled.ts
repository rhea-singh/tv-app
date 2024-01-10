import styled from "styled-components";

interface PageHeaderProps {
  url: string;
}
interface SectionProps {
  gap?: string;
}

export const OverviewContainer = styled.div`
  padding: 32px;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 16px;
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
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.media.mobile} {
    height: 300px;
    margin-bottom: 16px;
    background-size: contain;
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

  .episode-title {
    font-family: initial;
    color: ${({ theme }) => theme.colors.typography.dark};
  }

  @media ${({ theme }) => theme.media.mobile} {
    gap: 16px;
  }
`;

export const EpisodeDetails = styled.div`
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
