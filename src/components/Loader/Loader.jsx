import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox>
      <RotatingLines strokeColor="#232323" height={300} width={300} />
    </LoaderBox>
  );
};
export default Loader;
