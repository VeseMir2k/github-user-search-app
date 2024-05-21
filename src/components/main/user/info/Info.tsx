import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { UserData } from '../../../../types/types';
import InfoSection from './InfoSection';

type Props = Pick<UserData, 'blog' | 'location' | 'twitter_username' | 'company'>;

const Info = ({ blog, location, twitter_username, company }: Props) => {
  return (
    <div className='mt-[24px] flex flex-col gap-[16px] sm:grid md:col-span-1 md:col-start-2'>
      <InfoSection icon={faLocationDot} text={location} colStart='1' rowStart='1' />
      <InfoSection icon={faLink} text={blog} link={blog} colStart='1' rowStart='2' />
      <InfoSection
        icon={faXTwitter}
        text={twitter_username}
        link={`https://twitter.com/${twitter_username}`}
        colStart='2'
        rowStart='1'
      />
      <InfoSection icon={faBuilding} text={company} colStart='2' rowStart='2' />
    </div>
  );
};

export default Info;
