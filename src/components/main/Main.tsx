import { useContext } from 'react';
import { UserContext } from '../../context/AppContext';
import Loader from './Loader';
import Search from './search';
import User from './user';

const Main = () => {
  const { userData } = useContext(UserContext);

  return (
    <main className='mx-auto mt-[36px]'>
      <Search />
      {userData ? <User userData={userData} /> : <Loader />}
    </main>
  );
};

export default Main;
