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
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const NotifyList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.listContainer}>
          <Image
            source={require('../../assets/image/unsplash_pLKgCsBOiw4.png')}
            style={{alignSelf: 'center', height: 50, width: 50}}
          />
          <View
            style={{flexDirection: 'column', paddingHorizontal: spacing.md}}>
            <Text style={styles.title}>Diseases</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <Image
            source={require('../../assets/image/unsplash_pLKgCsBOiw4.png')}
            style={{alignSelf: 'center', height: 50, width: 50}}
          />
          <View
            style={{flexDirection: 'column', paddingHorizontal: spacing.md}}>
            <Text style={styles.title}>Diseases</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <Image
            source={require('../../assets/image/unsplash_pLKgCsBOiw4.png')}
            style={{alignSelf: 'center', height: 50, width: 50}}
          />
          <View
            style={{flexDirection: 'column', paddingHorizontal: spacing.md}}>
            <Text style={styles.title}>Diseases</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <Image
            source={require('../../assets/image/unsplash_pLKgCsBOiw4.png')}
            style={{alignSelf: 'center', height: 50, width: 50}}
          />
          <View
            style={{flexDirection: 'column', paddingHorizontal: spacing.md}}>
            <Text style={styles.title}>Diseases</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotifyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    top: -50,
  },
  listContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor:colors.lightGrey2,
    padding: 20,
    justifyContent: 'flex-end',
    width: wp('85%'),
  },
  title: {
    fontSize: fonts.md,
    color: colors.black,
    fontWeight: '900',
    paddingVertical: spacing.sm,
    textTransform: 'uppercase',
  },
  text: {
    color: colors.black,

    fontSize: fonts.sm,
  },
});
