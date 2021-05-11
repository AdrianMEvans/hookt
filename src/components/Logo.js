import React from 'react';
import { Image, StyleSheet } from 'react-native';
import logo from '../../assets/Logo_no_bg.png';

const Logo = ({ children }) => {
  return (
  <Image
    source={logo}
    style={{ resizeMode: 'stretch', width: 300, height: 200 }}
  />
  )
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default Logo;