import Header from './header';

interface Props {
  userData: object;
}

const User: React.FC<Props> = ({ userData }) => {
  return (
    <div className='mt-[16px] rounded-[15px] bg-background_secondary px-[24px] pb-[46px] pt-[32px] shadow-shadow dark:bg-background_secondary_dark dark:[box-shadow:none]'>
      <Header userData={userData} />
    </div>
  );
};

export default User;
