interface Props {
  name: string;
  login: string;
  created_at: string;
}

const Details = ({ name, login, created_at }: Props) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-Gb', options).format(date);
  };

  return (
    <div className='flex flex-col md:grid md:w-full'>
      <p className='text-xl font-bold text-text_primary sm:text-3xl md:col-span-1 md:col-start-1 dark:text-white'>
        {name}
      </p>
      <p className='text-sm text-blue sm:text-xl md:col-span-1 md:col-start-1 '>@{login}</p>
      <p className='mt-[6px] text-sm text-text_secondary sm:text-base md:col-span-1 md:col-start-2 md:row-start-1 md:text-right dark:text-white'>
        Joined {formatDate(created_at)}
      </p>
    </div>
  );
};

export default Details;
