import { useContext } from 'react';
import { UserContext } from '../../context/AppContext';
import Search from './search';
import User from './user';

const Main = () => {
  const { userData } = useContext(UserContext);

  return (
    <main className='mt-[36px]'>
      <Search />
      <User userData={userData} />
    </main>
  );
};

export default Main;
