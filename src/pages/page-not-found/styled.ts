import styled from "styled-components";

export const NotFoundPageContainer = styled.main`
  width: 100vw;
  height: 100dvh;
  display: flex;
  padding: 0 16px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.light};
`;

export const NotFoundMessage = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.dark};
  font-size: ${({ theme }) => theme.typography.size.font64};
  font-weight: ${({ theme }) => theme.typography.weight.medium};

  @media ${({ theme }) => theme.media.desktop} {
    margin-bottom: 16px;
  }
`;

export const NotFoundTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.dark};
  font-size: ${({ theme }) => theme.typography.size.font128};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};

  @media ${({ theme }) => theme.media.desktop} {
    margin-bottom: 16px;
  }
`;
