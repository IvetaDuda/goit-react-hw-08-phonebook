import Contacts from 'page/Contacts';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
    </Routes>
  );
};
export default App;
