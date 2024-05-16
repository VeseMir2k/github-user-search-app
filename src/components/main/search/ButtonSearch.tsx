import { useContext } from 'react';
import { UserContext } from '../../../context/AppContext';

const ButtonSearch: React.FC = () => {
  const { updateUserData } = useContext(UserContext);

  const handleButton = () => {
    updateUserData();
  };

  return (
    <button
      onClick={handleButton}
      className='my-[7px] mr-[7px] rounded-[10px] bg-blue px-[16px] py-[12px] text-[14px] font-bold text-white hover:bg-light_blue'
    >
      Search
    </button>
  );
};

export default ButtonSearch;
