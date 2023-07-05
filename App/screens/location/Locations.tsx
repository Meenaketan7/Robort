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

const Locations = () => {
  const [selected, setSelected] = useState(0);
  const [done, setDone] = useState(0);
  return (
    <>
      <Image
        source={require('../../assets/image/selection.png')}
        style={{
          marginVertical: spacing.xxl,
          alignSelf: 'center',
          width: 392,
          height: 260,
          overflow: 'hidden',
          paddingHorizontal: spacing.sm,
        }}
        resizeMode="contain"
      />
      {!selected ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.selectTitle}>To be able to continue........</Text>
          <Text style={styles.selectSubTitle}>Please,Selected your field.</Text>
          <TouchableOpacity onPress={() => 'Login'} style={styles.btn}>
            <Text style={styles.btnText}>Select</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.listContainer}>
            <View style={styles.item}>
              <TouchableOpacity style={{padding: spacing.sm}}>
                <Image
                  source={require('../../assets/image/Icon17.png')}
                  style={{alignSelf: 'flex-end'}}
                />
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: colors.green,
                  padding: spacing.md,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../../assets/image/plant2.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemText}>Field1</Text>
                <TouchableOpacity style={{padding: spacing.md}}>
                  <Image
                    source={require('../../assets/image/Icon18.png')}
                    style={{alignSelf: 'flex-end'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {done ? (
            <View>
              <TouchableOpacity
                onPress={() => 'Login'}
                style={[
                  styles.btn,
                  {
                    backgroundColor: colors.white,
                    borderWidth: 2,
                    alignSelf: 'center',
                    borderColor: colors.green,
                    width: 350,
                    borderRadius: 15,
                  },
                ]}>
                <Text style={[styles.btnText, {color: colors.green}]}>Add</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => 'Login'}
                style={[
                  styles.btn,
                  {
                    alignSelf: 'center',
                    width: 350,
                    borderRadius: 15,
                  },
                ]}>
                <Text style={[styles.btnText]}>Done</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default Locations;

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
