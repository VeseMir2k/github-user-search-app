import { useContext } from 'react';
import { UserContext } from '../../../context/AppContext';

const NoResults: React.FC = () => {
  const { userDataError } = useContext(UserContext);

  return userDataError && <div className='absolute right-[100px] text-sm text-red'>No results</div>;
};
export default NoResults;
