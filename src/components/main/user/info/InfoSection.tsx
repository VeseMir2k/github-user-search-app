import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconDefinition;
  text: string;
  link?: string;
}

const InfoSection: React.FC<Props> = ({ icon, text, link }) => {
  const textElement = link ? (
    <a className='hover:underline' href={link}>
      {text}
    </a>
  ) : (
    <span>{text}</span>
  );
  const notAvailableElement = <span>Not Available</span>;

  return (
    <p
      className={`flex text-sm ${text ? 'text-text_secondary dark:text-white' : 'dark:text-grey_dark text-grey'}`}
    >
      <div className='mr-[16px] w-[20px]'>
        <FontAwesomeIcon className='text-[16px]' icon={icon} />
      </div>
      {!text ? notAvailableElement : textElement}
    </p>
  );
};

export default InfoSection;
