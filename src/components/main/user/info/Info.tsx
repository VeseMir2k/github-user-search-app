import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import InfoSection from './InfoSection';

const Info: React.FC = () => {
  return (
    <div>
      <InfoSection icon={faLocationDot} text='San Francisco' />
      <InfoSection icon={faLink} text='https://github.blog' />
      <InfoSection icon={faXTwitter} text='Not Available' />
      <InfoSection icon={faBuilding} text='@github' />
    </div>
  );
};

export default Info;
