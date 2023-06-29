import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import {colors} from '../util/color';
const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.green}
      />
      <Image source={require('../assets/image/crobitend.png')} style={styles.image}/>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  image: {
    width: 342,
    height: 317,
    right:13,
  },
});
