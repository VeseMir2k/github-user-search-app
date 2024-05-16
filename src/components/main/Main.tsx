import { useContext } from 'react';
import { UserContext } from '../../context/AppContext';
import { UserData } from '../../types/types';
import Search from './search';
import User from './user';

const Main: React.FC = () => {
  const { userData } = useContext(UserContext);

  return (
    <main className='mx-auto mt-[36px]'>
      <Search />
      <User userData={userData as UserData} />
    </main>
  );
};

export default Main;
