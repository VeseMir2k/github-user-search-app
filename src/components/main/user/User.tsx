import Header from './header';

interface Props {
  userData: object;
}

const User: React.FC<Props> = ({ userData }) => {
  return (
    <div>
      <Header userData={userData} />
    </div>
  );
};

export default User;
