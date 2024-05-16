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
      <div>{name}</div>
      <div>@{login}</div>
      <div>Joined {created_at && formatDate(created_at)}</div>
    </>
  );
};

export default UserHeader;
