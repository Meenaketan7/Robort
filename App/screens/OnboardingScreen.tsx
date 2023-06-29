import React, {useState,useRef} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
  Button,
} from 'react-native';
import {colors} from '../util/color';
import {fonts, spacing} from '../util/size';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Onboarding from 'react-native-onboarding-swiper';

// const Skip = ({...props}) => (
//   <TouchableOpacity {...props} style={styles.btn}>
//     <Text style={styles.btnText}>Skip</Text>
//   </TouchableOpacity>
// );

// const Next = ({...props}) => (
//   <TouchableOpacity {...props} style={styles.btn}>
//     <Text style={styles.btnText}>Skip</Text>
//   </TouchableOpacity>
// );
// const Square = ({selected}) => {
//   let backgroundColor;
//   backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
//   return (
//     <View
//       style={{
//         width: 6,
//         height: 6,
//         marginHorizontal: 3,
//         backgroundColor,
//       }}
//     />
//   );
// };

const OnboardingScreen = ({navigation}: {navigation: any}) => {
  const pages = [
    {
      backgroundColor: '#fff',
      image: (
        <Image
          source={require('../assets/image/undraw_stripe_payments_re_chlm.png')}
        />
      ),
      title: 'Monitoring soil and plant',
      subtitle:
        'we aim to use optical (VIR) sensing to observe the fields and make timely crop management decisions.',
    },
    {
      backgroundColor: '#fff',
      image: (
        <Image
          source={require('../assets/image/undraw_welcoming_re_x0qo.png')}
        />
      ),
      title: 'Early detection of plant and soil diseases',
      subtitle:
        'our project can detect plant and soil diseases using an existing camera sensor that tracks the plants in real-time day by day.',
    },
    {
      backgroundColor: '#fff',
      image: (
        <Image source={require('../assets/image//undraw_join_re_w1lh.png')} />
      ),
      title: 'Improve agriculture precision',
      subtitle:
        'we will use satellite imagery, image processing, deep learning, computer vision, and remote sensing to detect changes in the field and crops and solve the problems whenever they pop.',
    },
  ];
  const handleDone = () => navigation.navigate('Login');
  return (
    <Onboarding
      // DotComponent={Square}
      // SkipButtonComponent={Skip}
      // NextButtonComponent={Next}
      onSkip={handleDone}
      onDone={handleDone}
      // onSkip={() => navigation.navigate('Login')}
      pages={pages}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  btn: {
    padding: 10,
    backgroundColor: colors.green,
    marginHorizontal: spacing.sm,
    borderRadius: spacing.sm,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: spacing.xl,
    },
    shadowOpacity: 0.3,
    shadowRadius: spacing.sm,
    width: 150,
  },
  btnText: {
    fontWeight: '700',
    color: colors.white,
    alignSelf: 'center',
    fontSize: fonts.md,
  },
});

export default OnboardingScreen;
