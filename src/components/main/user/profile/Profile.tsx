import { UserData } from '../../../../types/types';
import Avatar from './Avatar';
import Name from './Name';

interface Props {
  userData: UserData;
}

const Profile: React.FC<Props> = ({ userData }) => {
  const { avatar_url, name, login, created_at }: UserData = userData;

  return (
    <div className='flex'>
      <Avatar avatar_url={avatar_url} />
      <Name name={name} login={login} created_at={created_at} />
    </div>
  );
};

export default Profile;
