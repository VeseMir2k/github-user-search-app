import { UserData } from '../../../types/types';
import Biography from './Biography';
import Info from './info';
import Profile from './profile';
import Avatar from './profile/Avatar';
import Statistics from './statistics';

interface Props {
  userData: UserData;
}

const User = ({ userData }: Props) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    blog,
    location,
    twitter_username,
    company,
  } = userData;

  return (
    <div className='mt-[16px] rounded-[15px] bg-background_secondary px-[24px] py-[32px] shadow-shadow sm:p-[40px] md:grid md:grid-cols-[auto,1fr] md:p-[48px] dark:bg-background_secondary_dark dark:[box-shadow:none]'>
      <div className='hidden md:col-span-1 md:col-start-1 md:row-span-3 md:row-start-1 md:block'>
        <Avatar avatar_url={avatar_url} />
      </div>
      <Profile avatar_url={avatar_url} name={name} login={login} created_at={created_at} />
      {bio && <Biography bio={bio} />}
      <Statistics public_repos={public_repos} followers={followers} following={following} />
      <Info blog={blog} location={location} twitter_username={twitter_username} company={company} />
    </div>
  );
};

export default User;
