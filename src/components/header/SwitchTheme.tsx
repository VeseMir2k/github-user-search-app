import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SwitchTheme = () => (
  <button className='text-text_secondary hover:text-text_primary flex'>
    <span className='mr-[16px] text-sm font-bold tracking-[2.5px]'>DARK</span>
    <FontAwesomeIcon className='size-[20px]' icon={faMoon} />
  </button>
);
export default SwitchTheme;
