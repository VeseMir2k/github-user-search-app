interface Props {
  bio: string;
}

const Biography: React.FC<Props> = ({ bio }) => {
  return (
    <p className='mt-[35px] text-sm leading-3 text-text_secondary sm:text-base dark:text-white'>
      {bio}
    </p>
  );
};

export default Biography;
