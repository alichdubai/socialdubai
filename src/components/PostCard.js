import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button';

const PostCard = ({ post }) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
      <Text style={styles.username}>{post.user.username}</Text>
    </View>
    <Image source={{ uri: post.image }} style={styles.postImage} />
    <View style={styles.footer}>
      <Button title="Like" onPress={() => {}} />
      <Button title="Comment" onPress={() => {}} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PostCard;
