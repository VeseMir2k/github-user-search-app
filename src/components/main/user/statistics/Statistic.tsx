interface Props {
  name: string;
  statistic: string;
}

const Statistic = ({ name, statistic }: Props) => {
  return (
    <div className='flex flex-col gap-[8px] text-center sm:text-left'>
      <p className='text-xs leading-5 text-text_secondary sm:text-sm dark:text-white'>{name}</p>
      <p className='text-xl font-bold leading-2 text-text_primary sm:text-2xl dark:text-white '>
        {statistic}
      </p>
    </div>
  );
};

export default Statistic;
