import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Platform} from 'react-native';
import {StatusBar} from 'react-native';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {Image} from 'react-native';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.text}>
        This Platform Can Let The User Recognize The Regarding Nearest Location Wherever They'll Park Their Vehicles,
        </Text>
        <Text style={styles.text}>
        It'll Let The User Comprehend Their Favorite Fuel Station And Their Name, Eventually It'll Let The User Comprehend The Place From Wherever They'll Get Their Flat Tyres Repaired
        </Text>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/image/Icon15.png')}
            style={{alignSelf: 'flex-end'}}
          />
          <Text
            style={[styles.text, {textAlign: 'center', alignSelf: 'flex-end'}]}>
            copyright Crobit team{' '}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: fonts.md,
    fontWeight: '400',
    color: colors.black,
    paddingVertical: spacing.md,
  },
});
