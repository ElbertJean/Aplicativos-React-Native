import React from 'react';
import { Image } from 'react-native';

import pacman from '../assents/pacman.jpg';

function LogoTitle() {
  return (
    <Image
    style={{ marginBottom:25,width: 270, height: 56 }}
    source={pacman}
    />
  );
}

export default LogoTitle