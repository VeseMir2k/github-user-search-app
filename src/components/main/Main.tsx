import { useContext } from 'react';
import { UserContext } from '../../context/AppContext';
import Search from './search';

const Main = () => {
  const { userData } = useContext(UserContext);

  return (
    <main className='mt-[36px]'>
      <Search />
      {console.log(userData)}
    </main>
  );
};

export default Main;
