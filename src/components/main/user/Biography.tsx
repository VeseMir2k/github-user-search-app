interface Props {
  bio: string;
}

const Biography: React.FC<Props> = ({ bio }) => {
  return <p className='mt-[35px] text-sm text-text_secondary dark:text-white'>{bio}</p>;
};

export default Biography;
