import React from 'react';
import { Image, Text, View } from 'react-native';

import logo from '../../../assets/pictures/logo.png'
import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <View>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image
        source={logo}
        style={{
          resizeMode: 'contain',
          height: 180,
        }}
      />
    </View>
  );
}