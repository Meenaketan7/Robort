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
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../util/color';
import {fonts, spacing} from '../../util/size';



const Login = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/image/meisterplan-trust-center-header.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>New Password</Text>
        <Text style={styles.instruction}>Enter New Password</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../assets/image/icon_lock.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder=""
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

        <Text style={styles.instruction}>Confirm New Password</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../assets/image/icon_lock.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder=""
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

        <TouchableOpacity  style={styles.btn}>
          <Text style={styles.btnText}>Create New Password</Text>
        </TouchableOpacity>

        <Modal transparent={true} visible={false}>
          <View  style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View style={{alignItems:"center"}}>
              <Image source={require('../assets/image/Ellipse.png')} style={{zIndex:5}}/>
              <Image source={require('../assets/image/succ.png')} style={{zIndex:10,position:"absolute", top:50}} />
              </View>
              
              <Text style={styles.modalTitle}>
                Congratulation!
              </Text>
              <Text style={styles.modalSubtitle}>
              Your Account is ready to use . You will be redirected to the Home page in a few seconds.
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    paddingBottom: spacing.sm,
  },
  instruction: {
    fontFamily: 'PT Sans',
    fontWeight: '400',
    color: colors.lightGrey3,
    fontSize: fonts.md,
    paddingTop: spacing.md,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    marginTop: 10,
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
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#ffffff',
    margin: spacing.xl,
    padding: spacing.xl,
    borderRadius: spacing.md,
  },
  modalTitle: {
    fontSize: fonts.lg,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.black,
    paddingVertical: spacing.md,
  },
  modalSubtitle:{
    fontSize: fonts.md,
    paddingVertical: spacing.md,
    color: colors.black,
  }
});
