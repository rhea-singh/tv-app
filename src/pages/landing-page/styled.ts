import styled from "styled-components";
import backgroundImage  from '../../assets/images/cinema-background.jpeg'

export const MainPageContainer = styled.main`
  width: 100vw;
  height: 100dvh;
  display: flex;
  padding: 0 16px;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

export const PageHeader = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.main};
  font-size: ${({ theme }) => theme.typography.size.font32};
  font-weight: ${({ theme }) => theme.typography.weight.regular};

  @media ${({ theme }) => theme.media.desktop} {
    margin-bottom: 16px;
  }
`;

export const PageContent = styled.div`
  width: 600px;
  height: 50px;
  align-items: center;
  justify-content: center;
  
  > [name="search-input"] {
    width: inherit;
    height: inherit;
    border-radius: 100px;
    border: 0px solid transparent;
  }

  @media ${({ theme }) => theme.media.desktop} {
    //margin-bottom: 16px;
  }
`;
