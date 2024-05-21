import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeContext } from '../../context/AppContext';

const SwitchTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => toggleTheme()}
      className='flex text-text_secondary hover:text-text_primary dark:text-white dark:hover:text-[#90A4D4]'
    >
      <span className='mr-[16px] text-sm font-bold tracking-[2.5px]'>
        {theme === 'dark' ? 'LIGHT' : 'DARK'}
      </span>

      <FontAwesomeIcon className='size-[20px]' icon={theme === 'dark' ? faSun : faMoon} />
    </button>
  );
};
export default SwitchTheme;
