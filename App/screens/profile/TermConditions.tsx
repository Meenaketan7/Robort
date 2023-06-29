import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Platform} from 'react-native';
import {StatusBar} from 'react-native';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {Image} from 'react-native';

const TermCondition = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.text}>
        We're on a mission to make renting the new black, by providing seamless comfort with affordable pricing.
        </Text>
        <Text style={styles.text}>
        With us, you can rent a wide range of well-conditioned vehicles, like, SUVs, MUVs, sedans, vintage cars and chariots at very affordable prices.
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

export default TermCondition;

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
