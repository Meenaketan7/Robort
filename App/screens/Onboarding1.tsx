import React from 'react';
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
} from 'react-native';
import {colors} from '../util/color';
import {fonts, spacing} from '../util/size';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.skip}>Skip</Text>
      <View style={{flex:1,marginTop:spacing.lg}}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/image/undraw_stripe_payments_re_chlm.png')}
          style={styles.image}
        />
      </View>
      <View style={{paddingVertical: spacing.xl, top:40}}>
        <Text style={styles.title}>Monitoring soil and plant</Text>
        <Text style={styles.subTitle}>
          we aim to use optical (VIR) sensing to observe the fields and make
          timely crop management decisions.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: spacing.xxxl,
          marginTop: spacing.lg,
          top:60
        }}>
        <View style={[styles.indicator,{borderColor: colors.green,}]} />
        <View style={[styles.indicator]} />
        <View style={[styles.indicator]} />
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', top:120}}>
        <TouchableOpacity onPress={() => 'Login'} style={styles.btnBack}>
          <Text style={[styles.btnText,{color: colors.darkGrey,}]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 'Login'} style={styles.btnNext}>
          <Text style={[styles.btnText,{color: colors.white,}]}>Next</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  image: {
    width: 215,
    height: 236,
    resizeMode: 'contain',
  },
  title: {
    color: colors.black,
    fontSize: fonts.lg,
    fontWeight: 'bold',

    textAlign: 'center',
    paddingHorizontal: spacing.xxl,
  },
  subTitle: {
    color: colors.lightGrey3,
    fontSize: fonts.md,
    marginTop: 10,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.md,
    lineHeight: 23,
  },
  skip: {
    color: colors.lightGrey4,
    left: 300,
    fontSize: fonts.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  indicator: {
    borderWidth: 3,
    width: 40,
    borderRadius: 2,
    borderColor: colors.lightGrey3,
  },
  btnNext: {
    padding: 10,
    backgroundColor: colors.green,
    marginVertical: spacing.md,
    borderRadius: spacing.sm,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: spacing.xl,
    },
    width: 160,
    shadowOpacity: 0.3,
    shadowRadius: spacing.sm,
  },
  btnBack: {
    padding: 10,
    backgroundColor: colors.lightGrey1,
    marginVertical: spacing.md,
    borderRadius: spacing.sm,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: spacing.xl,
    },
    width: 160,
    shadowOpacity: 0.3,
    shadowRadius: spacing.sm,
  },
  btnText: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: fonts.md,
  },
});

export default Onboarding;
