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

const Consultant = () => {
  return (
    <SafeAreaView>
      <Image
        source={require('../../assets/image/logo2.png')}
        style={{marginVertical: spacing.xxl, alignSelf: 'center'}}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.selectTitle}>Welcome, User</Text>
        <Text style={styles.selectSubTitle}>
          Let's start a conversation with Boba
        </Text>
        <TouchableOpacity onPress={() => 'Login'} style={styles.btn}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Consultant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  selectTitle: {
    textAlign: 'center',
    fontSize: fonts.lg,
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
  btn: {
    padding: 13,
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
    width: 300,
  },
  btnText: {
    fontWeight: '700',
    color: colors.white,
    alignSelf: 'center',
    fontSize: fonts.md,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: 5,
  },
  item: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    paddingVertical: spacing.sm,
    marginVertical: spacing.sm,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: colors.green,
    borderWidth: 1,
  },
  itemText: {
    padding: spacing.sm,
    color: colors.green,
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
});
