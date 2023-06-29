import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';

const MyAccount = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.imageContainer}>
          
          <TouchableOpacity>
          <Image
            source={require('../../assets/image/User1.png')}
            style={styles.image}
          />
          </TouchableOpacity>
            <Text style={styles.userName}>Change Picture</Text>
        </View>

        <View style={{flexDirection: 'column', marginTop: spacing.lg}}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              returnKeyType="next"
              underlineColorAndroid="#0000"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="email-address"
              underlineColorAndroid="#0000"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              keyboardType="numeric"
              returnKeyType="next"
              underlineColorAndroid="#0000"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              returnKeyType="done"
              underlineColorAndroid="#0000"
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => 'Login'} style={styles.btn}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: spacing.xl,
  },
  userName: {
    color: colors.black,
    textAlign: 'center',
    padding: spacing.sm,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'column',
    marginTop: spacing.md,
  },
  label: {
    fontWeight: 'bold',
    color: colors.black,
    padding: spacing.sm,
  },
  inputStyle: {
    borderWidth: 1,
    marginLeft: spacing.sm,
    padding: spacing.md,
    height: 45,
    borderRadius: 10,
    borderColor: colors.lightGrey3,
    color: colors.black,
  },
  btn: {
    padding: 13,
    backgroundColor: colors.green,
    marginVertical: spacing.md,
    marginTop: spacing.xxl,
    borderRadius: spacing.sm,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: spacing.xl,
    },
    shadowOpacity: 0.3,
    shadowRadius: spacing.sm,
    marginHorizontal: 5,
  },
  btnText: {
    fontWeight: '700',
    color: colors.white,
    alignSelf: 'center',
    fontSize: fonts.md,
  },
});
