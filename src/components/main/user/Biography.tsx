interface Props {
  bio: string;
}

const Biography: React.FC<Props> = ({ bio }) => {
  return <p>{bio}</p>;
};

export default Biography;
