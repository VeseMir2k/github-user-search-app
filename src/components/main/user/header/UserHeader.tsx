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
    <>
      <p className='text-xl font-bold'>{name}</p>
      <p className='text-sm text-blue'>@{login}</p>
      {created_at && <p className='text-sm text-text_secondary'>Joined {formatDate(created_at)}</p>}
    </>
  );
};

export default UserHeader;
