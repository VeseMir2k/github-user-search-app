import { UserData } from '../../../../types/types';
import Avatar from './Avatar';
import UserHeader from './UserHeader';

interface Props {
  userData: UserData;
}

const Header: React.FC<Props> = ({ userData }) => {
  const { avatar_url, name, login, created_at }: UserData = userData;

  return (
    <div>
      <Avatar avatar_url={avatar_url} />
      <UserHeader name={name} login={login} created_at={created_at} />
    </div>
  );
};

export default Header;
