import { UserData } from '../../../types/types';
import Biography from './Biography';
import Header from './header';
import Loader from './Loader';
import Statistics from './statistics';

interface Props {
  userData: UserData;
}

const User: React.FC<Props> = ({ userData }) => {
  const { bio } = userData;

  const userDataLength = Object.keys(userData).length;

  return userDataLength ? (
    <div className='mt-[16px] rounded-[15px] bg-background_secondary px-[24px] pb-[46px] pt-[32px] shadow-shadow dark:bg-background_secondary_dark dark:[box-shadow:none]'>
      <Header userData={userData} />
      {bio && <Biography bio={bio} />}
      <Statistics userData={userData} />
    </div>
  ) : (
    <Loader />
  );
};

export default User;
