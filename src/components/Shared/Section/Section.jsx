import Container from '../Container';
import { SectionBox } from './Section.styled';

const Section = ({ children }) => {
  return (
    <Container>
      <SectionBox>{children}</SectionBox>
    </Container>
  );
};

export default Section;
