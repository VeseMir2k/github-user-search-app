import { UserData } from '../../../../types/types';
import Statistic from './Statistic';

type Props = Pick<UserData, 'public_repos' | 'followers' | 'following'>;

const Statistics = ({ public_repos, followers, following }: Props) => {
  return (
    <div className='mt-[25px] flex justify-around rounded-[10px] bg-background_primary px-[15px] py-[20px] md:col-span-1 md:col-start-2 dark:bg-background_primary_dark'>
      <Statistic name='Repos' statistic={public_repos} />
      <Statistic name='Followers' statistic={followers} />
      <Statistic name='Following' statistic={following} />
    </div>
  );
};

export default Statistics;
