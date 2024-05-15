import Avatar from './Avatar';

interface UserData {
  avatar_url: string;
}

interface Props {
  userData: object;
}

const Header: React.FC<Props> = ({ userData }) => {
  const { avatar_url }: UserData = userData;

  return (
    <div>
      <Avatar avatar_url={avatar_url} />
    </div>
  );
};

export default Header;
