import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonSearch from './ButtonSearch';
import InputSearch from './InputSearch';
import NoResults from './NoResults';

const Search: React.FC = () => (
  <div className='relative flex w-full items-center rounded-[15px] bg-background_secondary shadow-shadow dark:bg-background_secondary_dark dark:[box-shadow:none]'>
    <FontAwesomeIcon className='ml-[16px] size-[20px] text-blue' icon={faMagnifyingGlass} />
    <InputSearch />
    <ButtonSearch />
    <NoResults />
  </div>
);

export default Search;
