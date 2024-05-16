import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader: React.FC = () => (
  <div className='mt-[50px] text-center'>
    <FontAwesomeIcon
      className='size-[70px] text-text_primary dark:text-white'
      icon={faSpinner}
      spin
    />
  </div>
);
export default Loader;
