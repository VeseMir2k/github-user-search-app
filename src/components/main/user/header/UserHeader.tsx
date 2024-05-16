interface Props {
  name: string;
  login: string;
  created_at: string;
}

const UserHeader: React.FC<Props> = ({ name, login, created_at }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-Gb', options).format(date);
  };

  return (
    <div className='flex flex-col'>
      <p className='text-xl font-bold dark:text-white'>{name}</p>
      <p className='text-sm text-blue'>@{login}</p>
      {created_at && (
        <p className='mt-[6px] text-sm text-text_secondary dark:text-white'>
          Joined {formatDate(created_at)}
        </p>
      )}
    </div>
  );
};

export default UserHeader;
