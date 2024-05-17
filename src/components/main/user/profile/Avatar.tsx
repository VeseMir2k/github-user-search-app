interface Props {
  avatar_url: string;
}

const Avatar: React.FC<Props> = ({ avatar_url }) => {
  return <img className='mr-[20px] size-[70px] rounded-full' src={avatar_url} alt='avatar' />;
};

export default Avatar;
