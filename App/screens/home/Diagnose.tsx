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
import React, {useState} from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {TouchableOpacity} from 'react-native';

const Diagnose = () => {
  const [disease, setDisease] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Diseases in your crop:</Text>
      <View style={{flex: 1}}>
        <View style={styles.listContainer}>
          <View style={styles.item}>
            <View style={styles.itemView}>
              <Image
                source={require('../../assets/image/WhiteSpikes.png')}
                style={styles.image}
              />

              <View>
                <Text style={styles.itemHeading}>Posifolia fusiformis</Text>
                <Text style={styles.itemText}>Aug 20, 2022</Text>
                <TouchableOpacity>
                  <View style={styles.cardBar}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.barText}>Read More</Text>
                    </View>

                    <View style={[styles.square]}>
                      <Image
                        source={require('../../assets/image/Icon20.png')}
                        style={{width: 5, height: 11}}
                      />
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
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.barText}>Read More</Text>
                    </View>

                    <View style={[styles.square]}>
                      <Image
                        source={require('../../assets/image/Icon20.png')}
                        style={{width: 5, height: 11}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.itemView}>
              <Image
                source={require('../../assets/image/WhiteSpikes3.png')}
                style={styles.image}
              />

              <View>
                <Text style={styles.itemHeading}>Posifolia fusiformis</Text>
                <Text style={styles.itemText}>Aug 20, 2022</Text>
                <TouchableOpacity>
                  <View style={styles.cardBar}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.barText}>Read More</Text>
                    </View>

                    <View style={[styles.square]}>
                      <Image
                        source={require('../../assets/image/Icon20.png')}
                        style={{width: 5, height: 11}}
                      />
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
  heading: {
    fontSize: fonts.lg,
    fontWeight: 'bold',
    color: colors.black,
  },
  listContainer: {
    flexDirection: 'column',
    flex: 1,
    marginTop: spacing.sm,
    alignItems: 'center',
  },
  item: {
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
      },
      android: {
        elevation: 1,
      },
    }),
    borderRadius: 15,
    borderColor: colors.green,
    borderWidth: 1,
    width: 360,
    height: 130,
    padding: spacing.sm,
    marginVertical: spacing.md,
  },

  itemText: {
    padding: 5,
    color: colors.darkGrey,
    fontSize: 14,
    textAlign: 'center',
  },
  itemHeading: {
    fontWeight: '700',
    fontSize: fonts.md,
    color: colors.green,
    textAlign: 'center',
  },
  square: {
    backgroundColor: colors.white,
    borderRadius: 4,
    height: 20,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBar: {
    backgroundColor: colors.green,
    marginVertical: spacing.md,
    // marginHorizontal: spacing.md,
    // paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    width: 160,
    height: 33,
    justifyContent: 'space-around',
  },
  image: {
    width: 160,
    height: 96,
    borderRadius: 15,
  },
  barText: {
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
