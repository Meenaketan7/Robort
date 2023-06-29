import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';

const EmptyNotification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/image/notification.png')}
          style={{alignSelf: 'center',height:300,width:300}}
        />
        <Text style={styles.title}>Empty</Text>
        <Text style={styles.text}>You don't have any notification at this time.</Text>
      </View>
    </SafeAreaView>
  );
};

export default EmptyNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title: {
    textAlign: 'center',
    fontSize: fonts.xl,
    color: colors.black,
    fontWeight: '900',
    paddingVertical: spacing.lg,
  },
  text:{
    color:colors.black,
    textAlign:'center',
    fontSize:fonts.md,
  }
});
