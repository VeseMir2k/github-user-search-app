interface Props {
  name: string;
  statistic: string;
}

const Statistic: React.FC<Props> = ({ name, statistic }) => {
  return (
    <div className='flex flex-col gap-[8px] text-center '>
      <p className='text-xs text-text_secondary dark:text-white'>{name}</p>
      <p className='text-xl font-bold dark:text-white '>{statistic}</p>
    </div>
  );
};

export default Statistic;
