interface Props {
  name: string;
  login: string;
  created_at: string;
}

const Details: React.FC<Props> = ({ name, login, created_at }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-Gb', options).format(date);
  };

  return (
    <div className='flex flex-col'>
      <p className='text-xl font-bold text-text_primary sm:text-3xl dark:text-white'>{name}</p>
      <p className='text-sm text-blue sm:text-xl'>@{login}</p>
      <p className='mt-[6px] text-sm text-text_secondary sm:text-base dark:text-white'>
        Joined {formatDate(created_at)}
      </p>
    </div>
  );
};

export default Details;
