import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconDefinition;
  text: string;
  link?: string;
}

const InfoSection: React.FC<Props> = ({ icon, text, link }) => {
  return (
    <p>
      <FontAwesomeIcon icon={icon} />
      {!text ? <span>Not Available</span> : link ? <a href={link}>{text}</a> : <span>{text}</span>}
    </p>
  );
};

export default InfoSection;
