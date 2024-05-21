import { UserData } from '../../../../types/types';

type Props = Pick<UserData, 'avatar_url'>;

const Avatar = ({ avatar_url }: Props) => {
  return (
    <img
      className='mr-[20px] size-[70px] rounded-full sm:mr-[40px] sm:size-[120px]'
      src={avatar_url}
      alt='avatar'
    />
  );
};

export default Avatar;
