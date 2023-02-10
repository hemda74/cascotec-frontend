import React from 'react';
import DeafultPP from '../public/DefaultProfilePic.png';
import { useAppSelector } from '../app/hooks';
import { userDataSelector } from '../features/user';
import Avatar from 'react-avatar';

// this component for all users profile pictures.
const ProfileImage = (src: string | any, width: number, height: number) => {
  const { userData } = useAppSelector(userDataSelector);
  // if no image provieded it will put the default Profile pic.
  if (src.trim() == '' || src == undefined || src == null) {
    src = DeafultPP;
  }
  // a funtion to get user name from first and las names.
  const userName = () => {
    let firstName = userData.user.first_name;
    let lastName = userData.user.last_name;
    if (firstName === null && lastName === null) {
      firstName = 'Unknown';
      lastName = 'User';
    }
    const twoLetters: string = firstName + ' ' + lastName;
    return twoLetters;
  };

  return (
    <Avatar
      size={width > height ? width.toString() : height.toString()}
      name={userName()}
      textSizeRatio={1.75}
      maxInitials={2}
      round={true}
    />
  );
};

export default ProfileImage;
