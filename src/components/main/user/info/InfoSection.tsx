import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconDefinition;
  text: string;
  link?: string;
}

const InfoSection: React.FC<Props> = ({ icon, text, link }) => {
  const textElement = link ? <a href={link}>{text}</a> : <span>{text}</span>;
  const notAvailableElement = <span>Not Available</span>;

  return (
    <p>
      <FontAwesomeIcon icon={icon} />
      {!text ? notAvailableElement : textElement}
    </p>
  );
};

export default InfoSection;
