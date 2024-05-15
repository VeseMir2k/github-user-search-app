interface Props {
  avatar_url: string;
}

const Avatar: React.FC<Props> = ({ avatar_url }) => {
  return <img src={avatar_url} alt='' />;
};

export default Avatar;
