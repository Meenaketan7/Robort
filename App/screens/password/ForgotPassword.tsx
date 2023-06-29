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

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/image/meisterplan-trust-center-header.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.instruction}>Enter the email address you used when you joined and we'll send you instructions to reset your password.</Text>
        <View style={styles.SectionStyle}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            underlineColorAndroid="#0000"
          />
          <Image
            source={require('../assets/image/email.png')}
            style={styles.inputIcon}
          />
        </View>
        <TouchableOpacity onPress={() => 'Send link'} style={styles.btn}>
          <Text style={styles.btnText}>Send Link</Text>
        </TouchableOpacity>

        <View
          style={styles.signUp}>
          <Text style={{color:colors.lightGrey4}}>Having a Problem ?</Text>
          <Text style={{fontWeight: '700',color:colors.green}}>Send Again</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
    height: 50,
    marginTop: 20,
    borderBottomWidth: 1.0,
    borderBlockColor: colors.lightGrey3,
    
  },
  inputStyle: {
    fontSize: fonts.md,
    paddingHorizontal: spacing.sm,
    color: colors.black,
    width: 240,
    // borderWidth: 1,
  },
  inputIcon: {
    top: 20,
    height: 25,
    width: 25,
    left:40,
  },
  
  btn: {
    padding: 10,
    backgroundColor: colors.green,
    marginTop: 60,
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
