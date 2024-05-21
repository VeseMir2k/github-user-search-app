import { UserData } from '../../../types/types';

type Props = Pick<UserData, 'bio'>;

const Biography = ({ bio }: Props) => {
  return (
    <p className='mt-[35px] text-sm leading-3 text-text_secondary sm:text-base md:col-span-1 md:col-start-2 dark:text-white'>
      {bio}
    </p>
  );
};

export default Biography;
