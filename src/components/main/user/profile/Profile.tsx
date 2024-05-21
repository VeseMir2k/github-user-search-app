import { UserData } from '../../../../types/types';
import Avatar from './Avatar';
import Name from './Name';

type Props = Pick<UserData, 'avatar_url' | 'name' | 'login' | 'created_at'>;

const Profile = ({ avatar_url, name, login, created_at }: Props) => {
  return (
    <div className='flex md:col-span-1 md:col-start-2'>
      <div className='md:hidden'>
        <Avatar avatar_url={avatar_url} />
      </div>
      <Name name={name} login={login} created_at={created_at} />
    </div>
  );
};

export default Profile;
