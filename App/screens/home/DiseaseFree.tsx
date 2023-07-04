import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';

const DiseaseFree = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Diseases in your crop:</Text>
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/image/logo3.png')}
            style={styles.image}
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.selectTitle}>Good News</Text>
          <Text style={styles.selectSubTitle}>Your Plant is Disease Free</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DiseaseFree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  heading: {
    fontSize: fonts.lg,
    fontWeight: 'bold',
    color: colors.black,
  },
  image: {
    width: 312,
    height: 300,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
    left: 60,
  },
  selectTitle: {
    textAlign: 'center',
    fontSize: fonts.xl,
    fontWeight: '700',
    color: colors.black,
    marginBottom: spacing.md,
  },
  selectSubTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.black,
    marginBottom: spacing.md,
  },
});
