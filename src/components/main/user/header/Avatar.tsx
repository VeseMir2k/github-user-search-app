import React from 'react';

interface AvatarProps {
  avatar_url: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar_url }) => {
  return <img src={avatar_url} alt='' />;
};

export default Avatar;
