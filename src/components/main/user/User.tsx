import { UserData } from '../../../types/types';
import Biography from './Biography';
import Info from './info';
import Loader from './Loader';
import Profile from './profile';
import Avatar from './profile/Avatar';
import Statistics from './statistics';

interface Props {
  userData: UserData;
}

const User: React.FC<Props> = ({ userData }) => {
  const { bio, avatar_url } = userData;

  const userDataLength = Object.keys(userData).length;

  return userDataLength ? (
    <div className='mt-[16px] rounded-[15px] bg-background_secondary px-[24px] py-[32px] shadow-shadow sm:p-[40px] md:grid md:p-[48px] dark:bg-background_secondary_dark dark:[box-shadow:none]'>
      <div className='hidden md:col-span-1 md:col-start-1 md:row-span-3 md:row-start-1 md:block'>
        <Avatar avatar_url={avatar_url} />
      </div>
      <Profile userData={userData} />
      {bio && <Biography bio={bio} />}
      <Statistics userData={userData} />
      <Info userData={userData} />
    </div>
  ) : (
    <Loader />
  );
};

export default User;
