import { ButtonLink, ErrorIcon, ErrorText, Paragraph, Wrapper } from "./styled";

const ErrorPage = () => (
  <Wrapper>
    <ErrorIcon />
    <ErrorText>Ooops! Something went wrong... </ErrorText>
    <Paragraph>Please check your network connection and try again</Paragraph>
    <ButtonLink to={"/"}>Back to home page</ButtonLink>
  </Wrapper>
);

export default ErrorPage;
