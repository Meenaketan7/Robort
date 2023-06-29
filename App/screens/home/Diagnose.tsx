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

const Diagnose = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.listContainer}>
          <View style={styles.item}>
            <View style={styles.itemView}>
              <Image
                source={require('../../assets/image/WhiteSpikes.png')}
                style={styles.image}
              />
              <View>
                <Text style={styles.itemHeading}>White Spike</Text>
                <Text style={styles.itemText}>Aug 20, 2022</Text>
                <TouchableOpacity>
                  <View style={styles.cardBar}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.barText}>Read More</Text>
                      </View>

                      <View style={[styles.square]}>
                        <Image
                          source={require('../../assets/image/Icon20.png')}
                          style={{height: 7, width: 7}}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.itemView}>
              <Image
                source={require('../../assets/image/WhiteSpikes2.png')}
                style={styles.image}
              />
              <View>
                <Text style={styles.itemHeading}>Posifolia fusiformis</Text>
                <Text style={styles.itemText}>Aug 20, 2022</Text>
                <TouchableOpacity>
                  <View style={styles.cardBar}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.barText}>Read More</Text>
                      </View>

                      <View style={[styles.square]}>
                        <Image
                          source={require('../../assets/image/Icon20.png')}
                          style={{height: 7, width: 7}}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.itemView}>
              <Image
                source={require('../../assets/image//WhiteSpikes3.png')}
                style={styles.image}
              />
              <View>
                <Text style={styles.itemHeading}>Rust</Text>
                <Text style={styles.itemText}>Aug 20, 2022</Text>
                <TouchableOpacity>
                  <View style={styles.cardBar}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.barText}>Read More</Text>
                      </View>

                      <View style={[styles.square]}>
                        <Image
                          source={require('../../assets/image/Icon20.png')}
                          style={{height: 7, width: 7}}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Diagnose;

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

    paddingVertical: spacing.md,
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
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: colors.green,
    borderWidth: 1,
    width: 350,
  },

  itemText: {
    paddingVertical: spacing.sm,
    color: colors.darkGrey,
    fontSize: fonts.md,
    paddingHorizontal: spacing.md,
    textAlign: 'center',
  },
  itemHeading: {
    fontWeight: '900',
    fontSize: fonts.md,
    color: colors.green,
    textAlign: 'center',
    paddingLeft: spacing.md,
    width: 150,
  },
  square: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  cardBar: {
    backgroundColor: colors.green,
    marginVertical: spacing.md,
    marginHorizontal: spacing.md,
    paddingHorizontal: 10,
    borderRadius: 10,
    padding: spacing.sm,
    width: 140,
    height: 40,
  },
  image: {
    width: 160,
    height: 110,
    borderRadius: 20,
    alignSelf: 'center',
  },
  barText: {
    paddingHorizontal: 5,
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
    alignItems: 'center',
  },
});
