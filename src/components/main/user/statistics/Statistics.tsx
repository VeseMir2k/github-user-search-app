import { UserData } from '../../../../types/types';
import Statistic from './Statistic';

interface Props {
  userData: UserData;
}

const Statistics: React.FC<Props> = ({ userData }) => {
  const { public_repos, followers, following } = userData;

  return (
    <div className='mt-[25px] flex justify-around rounded-[10px] bg-background_primary px-[15px] py-[20px] dark:bg-background_primary_dark'>
      <Statistic name='Repos' statistic={public_repos} />
      <Statistic name='Followers' statistic={followers} />
      <Statistic name='Following' statistic={following} />
    </div>
  );
};

export default Statistics;
