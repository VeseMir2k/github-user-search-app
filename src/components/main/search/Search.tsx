import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonSearch from './ButtonSearch';

const Search = () => (
  <div className='shadow-input_shadow  w-full rounded-[15px] bg-background_secondary'>
    <FontAwesomeIcon className='ml-[16px] size-[22px]' icon={faMagnifyingGlass} />
    <ButtonSearch />
  </div>
);

export default Search;
