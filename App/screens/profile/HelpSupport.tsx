import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../util/color';
import {fonts, spacing} from '../../util/size';

const HelpSupport = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'column'}}>
        <TouchableOpacity >
        <View style={{flexDirection: 'row', padding: spacing.md}}>
          <Image
            source={require('../../assets/image/Icon11.png')}
            style={{height: 25, width: 25}}
          />
          <Text style={styles.text}>About Us</Text>
          <Image
            source={require('../../assets/image/Icon10.png')}
            style={{height: 22, width: 22, left:150}}
          />
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={{flexDirection: 'row', padding: spacing.md}}>
          <Image
            source={require('../../assets/image/Icon12.png')}
            style={{height: 25, width: 25}}
          />
          <Text style={styles.text}>Term And Condition</Text>
          <Image
            source={require('../../assets/image/Icon10.png')}
            style={{height: 22, width: 22, left:42}}
          />
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HelpSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.white,
  },
  text: {
    paddingHorizontal: spacing.md,
    color: colors.black,
    fontSize: 22,
    fontWeight: '500',
  }
});
