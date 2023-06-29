import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {TouchableOpacity} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.hederView}>
          <Image
            source={require('../../assets/image/crobitenddddddd.png')}
            style={styles.headerLog}
          />
          <Image
            source={require('../../assets/image/User.png')}
            style={styles.headerLog}
          />
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
          <View style={styles.bar}>
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

        <View style={styles.listContainer}>
          <TouchableHighlight underlayColor={colors.green}>
            <View style={styles.item}>
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: spacing.md,
                  borderRadius: 50,
                  width: 60,
                }}>
                <Image
                  source={require('../../assets/image/glass.png')}
                  style={{alignSelf: 'center', height: 30, width: 30}}
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

                  <View
                    style={[
                      styles.square,
                      {paddingHorizontal: 14, borderRadius: 7},
                    ]}>
                    <Image
                      source={require('../../assets/image/Icon20.png')}
                      style={{height: 7, width: 7}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={colors.green}>
            <View style={styles.item}>
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: spacing.md,
                  borderRadius: 50,
                  width: 60,
                }}>
                <Image
                  source={require('../../assets/image/plant.png')}
                  style={{alignSelf: 'center', height: 30, width: 30}}
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

                  <View
                    style={[
                      styles.square,
                      {paddingHorizontal: 14, borderRadius: 7},
                    ]}>
                    <Image
                      source={require('../../assets/image/Icon20.png')}
                      style={{height: 7, width: 7}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.listContainer}>
          <TouchableHighlight underlayColor={colors.green}>
            <View style={styles.item}>
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: spacing.md,
                  borderRadius: 50,
                  width: 60,
                }}>
                <Image
                  source={require('../../assets/image/glass.png')}
                  style={{alignSelf: 'center', height: 30, width: 30}}
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

                  <View
                    style={[
                      styles.square,
                      {paddingHorizontal: 14, borderRadius: 7},
                    ]}>
                    <Image
                      source={require('../../assets/image/Icon20.png')}
                      style={{height: 7, width: 7}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={colors.green}>
            <View style={styles.item}>
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: spacing.md,
                  borderRadius: 50,
                  width: 60,
                }}>
                <Image
                  source={require('../../assets/image/plant.png')}
                  style={{alignSelf: 'center', height: 30, width: 30}}
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

                  <View
                    style={[
                      styles.square,
                      {paddingHorizontal: 14, borderRadius: 7},
                    ]}>
                    <Image
                      source={require('../../assets/image/Icon20.png')}
                      style={{height: 7, width: 7}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
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
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.md,
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
        elevation: 5,
        alignItems: 'center',
      },
    }),
    borderRadius: 20,
    overflow: 'hidden',
    width: 170,
    height: 160,
  },
  itemText: {
    padding: spacing.sm,
    color: colors.green,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardBar: {
    backgroundColor: colors.green,
    marginVertical: spacing.sm,
    paddingHorizontal: 5,
    borderRadius: 10,
    padding: spacing.sm,
    width: 162,
    height: 40,
  },
});
