import Avatar from './header/Avatar';

interface UserData {
  avatar_url: string;
}

interface UserProps {
  userData: UserData;
}

const User: React.FC<UserProps> = ({ userData }) => {
  const { avatar_url } = userData;
  return <Avatar avatar_url={avatar_url} />;
};

export default User;
