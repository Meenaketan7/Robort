import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <View style={styles.hederView}>
          <Image
            source={require('../../assets/image/crobitenddddddd.png')}
            style={styles.headerLog}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              source={require('../../assets/image/User.png')}
              style={styles.headerLog}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.weatherView}>
          <Image
            source={require('../../assets/image/Rectangle.png')}
            style={styles.shape}
          />
          <Image
            source={require('../../assets/image/cloud.png')}
            style={styles.cloud}
          />
          <Text style={styles.temperature}>29°</Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  position: 'absolute',
                  zIndex: 10,
                  padding: spacing.sm,
                  top: -70,
                  color: colors.lightGreen1,
                }}>
                H:32° L:27°
              </Text>
              <Text style={styles.weatherText}>Egypt, Mansora</Text>
            </View>
            <Text style={[styles.weatherText, {left: 230}]}>Cloudy</Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={[styles.bar, {marginHorizontal: spacing.sm}]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../../assets/image/logo.png')} />
                <Text
                  style={{
                    paddingHorizontal: spacing.lg,
                    color: colors.white,
                    fontSize: fonts.md,
                    fontWeight: 'bold',
                  }}>
                  Add Crop
                </Text>
              </View>

              <View style={styles.square}>
                <Image source={require('../../assets/image/Icon20.png')} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>Main Feature</Text>

        <ScrollView>
          <View style={styles.listContainer}>
            <TouchableHighlight underlayColor={colors.green}>
              <View style={styles.item}>
                <View style={styles.cardLogoCircle}>
                  <Image
                    source={require('../../assets/image/glass.png')}
                    style={styles.cardLogo}
                  />
                </View>
                <Text style={styles.itemText}>Diagnose your crop</Text>
                <View style={styles.cardBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          paddingHorizontal: 5,
                          color: colors.white,
                          fontSize: 12,
                          fontWeight: 'bold',
                        }}>
                        Diagnose Diseases
                      </Text>
                    </View>

                    <View style={styles.cardBtn}>
                      <Image
                        source={require('../../assets/image/Icon20.png')}
                        style={styles.cardBtnImg}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={colors.green}>
              <View style={styles.item}>
                <View style={styles.cardLogoCircle}>
                  <Image
                    source={require('../../assets/image/plant.png')}
                    style={styles.cardLogo}
                  />
                </View>
                <Text style={styles.itemText}>Follow your soil status</Text>
                <View style={styles.cardBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          paddingHorizontal: 5,
                          color: colors.white,
                          fontSize: 12,
                          fontWeight: 'bold',
                        }}>
                        Soil Status
                      </Text>
                    </View>

                    <View style={styles.cardBtn}>
                      <Image
                        source={require('../../assets/image/Icon20.png')}
                        style={styles.cardBtnImg}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  hederView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
    paddingVertical: spacing.sm,
  },
  headerLog: {
    width: 50,
    height: 50,
  },
  weatherView: {
    padding: spacing.sm,
  },
  shape: {
    zIndex: 5,
    alignSelf: 'center',
  },
  cloud: {
    position: 'absolute',
    top: -50,
    left: 170,
    zIndex: 10,
  },
  temperature: {
    position: 'absolute',
    color: colors.white,
    zIndex: 15,
    fontSize: 70,
    fontWeight: '300',
    padding: spacing.md,
  },
  weatherText: {
    position: 'absolute',
    zIndex: 15,
    padding: spacing.sm,
    top: -50,
    color: colors.white,
    fontWeight: '600',
  },
  bar: {
    backgroundColor: colors.lightGreen1,
    padding: spacing.sm,
    marginVertical: spacing.lg,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
  },
  square: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: spacing.md,
    marginHorizontal: spacing.sm,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.md,
    marginHorizontal: spacing.sm,
  },
  item: {
    backgroundColor: colors.lightGreen1,
    padding: 5,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
      },
      android: {
        elevation: 1,
        alignItems: 'center',
      },
    }),
    borderRadius: 15,
    overflow: 'hidden',
    width: 172,
    height: 180,
  },
  itemText: {
    paddingVertical: spacing.sm,
    color: colors.green,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardBar: {
    backgroundColor: colors.green,
    borderRadius: 10,
    padding: spacing.sm,
    width: 156,
    height: 30,
    justifyContent: 'center',
    bottom: -12,
  },
  cardBtn: {
    height: 18,
    width: 24,
    borderRadius: 4,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  cardBtnImg: {
    height: 10,
    width: 5,
    alignSelf: 'center',
  },
  cardLogoCircle: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: 50,
    width: 80,
    height: 75,
    marginVertical: spacing.sm,
  },
  cardLogo: {alignSelf: 'center', height: 41, width: 41},
});
