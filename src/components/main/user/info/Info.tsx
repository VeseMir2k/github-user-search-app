import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { UserData } from '../../../../types/types';
import InfoSection from './InfoSection';

interface Props {
  userData: UserData;
}

const Info: React.FC<Props> = ({ userData }) => {
  const { blog, location, twitter_username, company } = userData;

  return (
    <div className='mt-[24px] flex flex-col gap-[16px] md:col-span-1 md:col-start-2'>
      <InfoSection icon={faLocationDot} text={location} />
      <InfoSection icon={faLink} text={blog} link={blog} />
      <InfoSection
        icon={faXTwitter}
        text={twitter_username}
        link={`https://twitter.com/${twitter_username}`}
      />
      <InfoSection icon={faBuilding} text={company} />
    </div>
  );
};

export default Info;
