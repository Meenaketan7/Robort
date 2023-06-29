import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {TouchableOpacity} from 'react-native';

const MyField = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.listContainer}>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: spacing.sm,
              }}>
              <Text style={styles.itemHeading}>Field1</Text>
              <TouchableOpacity>
                <Text style={styles.dots}>...</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginBottom: spacing.sm}}>
              <Image source={require('../../assets/image/Icon8.png')} />
              <Text style={styles.itemText}>Wheat</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: spacing.sm}}>
              <Image source={require('../../assets/image/Icon9.png')} />
              <Text style={styles.itemText}>
                El Mansoura, El Dakahlia, Egypt
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: spacing.sm,
              }}>
              <Text style={styles.itemHeading}>Field2</Text>
              <TouchableOpacity>
                <Text style={styles.dots}>
                  ...
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginBottom: spacing.sm}}>
              <Image source={require('../../assets/image/Icon8.png')} />
              <Text style={styles.itemText}>Wheat</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: spacing.sm}}>
              <Image source={require('../../assets/image/Icon9.png')} />
              <Text style={styles.itemText}>
                El Mansoura, El Dakahlia, Egypt
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: spacing.sm,
              }}>
              <Text style={styles.itemHeading}>Field3</Text>
              <TouchableOpacity>
                <Text style={styles.dots}>
                  ...
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginBottom: spacing.sm}}>
              <Image source={require('../../assets/image/Icon8.png')} />
              <Text style={styles.itemText}>Wheat</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: spacing.sm}}>
              <Image source={require('../../assets/image/Icon9.png')} />
              <Text style={styles.itemText}>
                El Mansoura, El Dakahlia, Egypt
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  listContainer: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: colors.white,
    padding: spacing.md,

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
  icon: {
    alignSelf: 'center',
  },
  itemText: {
    paddingBottom: spacing.sm,
    color: colors.black,
    fontSize: fonts.md,
    paddingHorizontal: spacing.md,
  },
  itemHeading: {
    fontWeight: '500',
    fontSize: fonts.lg,
    color: colors.black,
  },
  dots: {
    fontWeight: '900',
    fontSize: fonts.xl,
    top: -12,
    color: colors.black,
  },
});
