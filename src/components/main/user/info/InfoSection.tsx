import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconDefinition;
  text: string;
  link?: string;
  colStart: string;
  rowStart: string;
}

const InfoSection = ({ icon, text, link, colStart, rowStart }: Props) => {
  const textElement = link ? (
    <a className='hover:underline' href={link}>
      {text}
    </a>
  ) : (
    <span>{text}</span>
  );

  const notAvailableElement = <span>Not Available</span>;

  const colStartVariants: Record<string, string> = {
    1: 'sm:col-start-1',
    2: 'sm:col-start-2',
  };

  const rowStartVariants: Record<string, string> = {
    1: 'sm:row-start-1',
    2: 'sm:row-start-2',
  };

  return (
    <p
      className={`
        flex text-sm leading-3 sm:col-span-1 sm:row-span-1
        sm:text-base
        ${colStartVariants[colStart]}
        ${rowStartVariants[rowStart]}
        ${text ? 'text-text_secondary dark:text-white' : 'text-grey dark:text-grey_dark'}
      `}
    >
      <span className='mr-[16px] w-[20px]'>
        <FontAwesomeIcon className='text-[16px]' icon={icon} />
      </span>
      {text ? textElement : notAvailableElement}
    </p>
  );
};

export default InfoSection;
