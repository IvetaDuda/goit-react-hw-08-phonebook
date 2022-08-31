import Png from '../../image/pngegg.png';
import { Container, NotFoundTitle } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <img src={Png} alt="Error" width="550" />
      <NotFoundTitle>Page not found</NotFoundTitle>
    </Container>
  );
};
export default NotFound;
