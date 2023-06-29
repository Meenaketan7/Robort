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
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../util/color';
import {fonts, spacing} from '../util/size';


const SignUp = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/image/undraw_access_account_re_8spm.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.instruction}>Create an account to continue</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../assets/image/Group.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="First Name"
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            autoCorrect={false}
            returnKeyType="next"
            underlineColorAndroid="#0000"
          />
        </View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../assets/image/Group.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            autoCorrect={false}
            returnKeyType="next"
            underlineColorAndroid="#0000"
          />
        </View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../assets/image/email.png')}
            style={styles.inputIcon}
          />
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
        </View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../assets/image/icon_lock.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            underlineColorAndroid="#0000"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={{padding: 8}}
            onPress={togglePasswordVisibility}>
            <Image source={require('../assets/image/icon_Eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../assets/image/icon_lock.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor={colors.lightGrey2}
            style={styles.inputStyle}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            underlineColorAndroid="#0000"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={{padding: 8}}
            onPress={togglePasswordVisibility}>
            <Image source={require('../assets/image/icon_Eye.png')} />
          </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={() => 'Login'} style={styles.btn}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>

        
        <View style={styles.signContainer}>
          <View style={styles.signBorder} />
          <Text style={styles.signText}>or sign up with</Text>
          <View style={styles.signBorder} />
        </View>
        <View style={styles.socialMediaContainer}>
          <Image
            source={require('../assets/image/facebook.png')}
            style={styles.socialMedia}
          />
          <Image
            source={require('../assets/image/google.png')}
            style={styles.socialMedia}
          />
        </View>
        <View
          style={styles.signUp}>
          <Text style={{color:colors.lightGrey4}}>Already have an account ?</Text>
          <Text style={{fontWeight: '700',color:colors.green}}>Log In</Text>
        </View>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
    width: 220,
    height: 200,
    top: 5,
    left: 27,
    paddingVertical: spacing.sm,
  },
  title: {
    fontFamily: 'PT Sans',
    fontSize: fonts.xl,
    fontWeight: '700',
    color: colors.black,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  instruction: {
    fontFamily: 'PT Sans',
    fontWeight: '400',
    color: colors.lightGrey3,
    fontSize: fonts.md,
    paddingHorizontal: spacing.lg,
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
    paddingHorizontal: spacing.xl,
    color: colors.black,
    width: 240,
    // borderWidth: 1,
  },
  inputIcon: {
    top: 8,
    height: 25,
    width: 25,
  },
  btn: {
    padding: 10,
    backgroundColor: colors.green,
    marginVertical: spacing.md,
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
  signContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
  },
  signText: {
    fontSize: fonts.md,
    fontWeight: '400',
    color: '#262626',
    marginHorizontal: 10,
  },
  signBorder: {
    flex: 1,
    height: 1,
    backgroundColor: '#8b9cb5',
  },
  socialMedia: {
    height: 50,
    width: 50,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.xxxl,
    marginTop: spacing.sm,
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: spacing.lg,
    marginHorizontal: spacing.xxl,
  },
});
