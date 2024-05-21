import { useContext } from 'react';
import { UserContext } from '../../../context/AppContext';

const InputSearch = () => {
  const { updateUser } = useContext(UserContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    updateUser(inputValue);
  };

  return (
    <input
      onChange={handleChange}
      className='grow bg-background_secondary px-[7px] text-sm leading-3 text-text_secondary outline-none placeholder:text-text_secondary sm:pl-[20px] sm:text-xl dark:bg-background_secondary_dark dark:text-white dark:placeholder:text-white'
      placeholder='Search GitHub username...'
    ></input>
  );
};

export default InputSearch;
