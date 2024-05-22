import { UserData } from '../../../../types/types';

type Props = Pick<UserData, 'name' | 'login' | 'created_at'>;

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('en-Gb', options).format(date);
};

const Details = ({ name, login, created_at }: Props) => {
  return (
    <div className='flex flex-col md:grid md:w-full'>
      <p className='text-xl font-bold leading-1 text-text_primary sm:text-3xl md:col-span-1 md:col-start-1 dark:text-white'>
        {name}
      </p>
      <p className='text-sm leading-4 text-blue sm:text-xl md:col-span-1 md:col-start-1 '>
        @{login}
      </p>
      <p className='mt-[6px] text-sm leading-3 text-text_secondary sm:text-base md:col-span-1 md:col-start-2 md:row-start-1 md:text-right dark:text-white'>
        Joined {formatDate(created_at)}
      </p>
    </div>
  );
};

export default Details;
