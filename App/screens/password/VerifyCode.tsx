import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../util/color';
import {fonts, spacing} from '../../util/size';

const VerifyCode = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/image/meisterplan-trust-center-header.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.instruction}>
          Enter 4-digits code sent to you at +02 335 897 680 648
        </Text>

        <View style={styles.SectionStyle}>
          <TextInput
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
          <TextInput
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
          <TextInput
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />

          <TextInput
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
        </View>

        <Text style={{color:'black', textAlign:'center', marginTop:spacing.xl}}>00:60 sec</Text>

        <TouchableOpacity onPress={() => 'Verify Code'} style={styles.btn}>
          <Text style={styles.btnText}>Verify Code</Text>
        </TouchableOpacity>

        <View style={styles.signUp}>
          <Text style={{color:colors.lightGrey4}}>Having a Problem ?</Text>
          <Text style={{fontWeight: '700', color: colors.green}}>
            Send Again
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 250,
    height: 200,
    top: 60,
  },
  title: {
    fontFamily: 'PT Sans',
    fontSize: fonts.lg,
    fontWeight: '700',
    color: colors.black,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.lg,
  },
  instruction: {
    fontFamily: 'PT Sans',
    fontWeight: '400',
    color: colors.lightGrey3,
    fontSize: fonts.md,
    paddingBottom: spacing.lg,
  },
  SectionStyle: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  inputStyle: {
    fontSize: fonts.md,
    paddingHorizontal: spacing.sm,
    color: colors.black,
    borderRadius: 18,
    borderWidth: 2.5,
    borderColor: colors.green,
    width: 55,

    // borderWidth: 1,
  },

  btn: {
    padding: 10,
    backgroundColor: colors.green,
    marginTop: 30,
    marginBottom: 50,
    borderRadius: spacing.sm,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: spacing.xl,
    },
    shadowOpacity: 0.3,
    shadowRadius: spacing.sm,
  },
  btnText: {
    fontWeight: '700',
    color: colors.white,
    alignSelf: 'center',
    fontSize: fonts.md,
  },

  signUp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: spacing.lg,
    marginHorizontal: spacing.xxl,
  },
});
