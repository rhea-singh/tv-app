import {
  NotFoundMessage,
  NotFoundPageContainer,
  NotFoundTitle,
} from "./styled";

export const NotFound = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundMessage>Uh..oh! Page Not Found</NotFoundMessage>
      <NotFoundTitle>404</NotFoundTitle>
    </NotFoundPageContainer>
  );
};
