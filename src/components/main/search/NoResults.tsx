import { useContext } from 'react';
import { UserContext } from '../../../context/AppContext';

const NoResults = () => {
  const { userDataError } = useContext(UserContext);

  return (
    userDataError && (
      <div className='absolute right-[100px] text-sm leading-3 text-red sm:right-[120px] sm:text-base'>
        No results
      </div>
    )
  );
};
export default NoResults;
