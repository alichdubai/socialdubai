import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = ({ uri, size = 40 }) => (
  <Image source={{ uri }} style={[styles.avatar, { width: size, height: size }]} />
);

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
  },
});

export default Avatar;
