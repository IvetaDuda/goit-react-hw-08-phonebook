import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox>
      <RotatingLines strokeColor="#eeecec" height={300} width={300} />
    </LoaderBox>
  );
};
export default Loader;
