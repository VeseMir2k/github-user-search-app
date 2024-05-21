interface Props {
  name: string;
  statistic: string;
}

const Statistic = ({ name, statistic }: Props) => {
  return (
    <div className='flex flex-col gap-[8px] text-center sm:text-left'>
      <p className='text-xs text-text_secondary sm:text-sm dark:text-white'>{name}</p>
      <p className='text-xl font-bold text-text_primary sm:text-2xl dark:text-white '>
        {statistic}
      </p>
    </div>
  );
};

export default Statistic;
