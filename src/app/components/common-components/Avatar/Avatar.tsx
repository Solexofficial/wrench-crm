import React from 'react';
import { ReactComponent as AvatarLogo } from '../../../assets/svg/ic_person.svg';

type AvatarProps = {
  profileName?: string;
};

const Avatar: React.FC<AvatarProps> = ({ profileName }) => {
  return (
    <div className='avatar'>
      <AvatarLogo />
      {profileName && <p className='avatar-profileName avatar-profileName--white'>{`${profileName}`}</p>}
    </div>
  );
};

export default Avatar;
