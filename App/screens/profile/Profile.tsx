import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profile = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Drawer');
        }}>
        <Image source={require('../../assets/image/Icon22.png')} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/image/User1.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.userName}>Ali Mohamed</Text>
        <Text style={styles.number}>+039828288282</Text>
        <View style={styles.listContainer}>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/image/Icon4.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.itemText}>My Account</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/image/Icon2.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/image/Icon5.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.itemText}>Privacy Policy</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/image/Icon2.png')}
                style={[styles.arrow, {left: 110}]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/image/icon1.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.itemText}>My Field</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/image/Icon2.png')}
                style={[styles.arrow, {left: 152}]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/image/Icon3.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.itemText}>Help center</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/image/Icon2.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/image/icon6.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.itemText}>Rate Us</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/image/Icon2.png')}
                style={[styles.arrow, {left: 152}]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/image/Icon7.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.itemText}>Log Out</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/image/Icon2.png')}
                style={[styles.arrow, {left: 152}]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Modal transparent={true} visible={false}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View
                style={{
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBlockColor: colors.lightGrey2,
                }}>
                <Text style={styles.modalTitle}>Logout</Text>
              </View>
              <Text style={styles.modalSubtitle}>
                Are you sure you want to logout?
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={[styles.modalButtonText, {color: 'red'}]}>
                    Yes,Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 0,
  },
  userName: {
    color: colors.black,
    textAlign: 'center',
    padding: spacing.sm,
    fontWeight: '800',
  },
  number: {
    color: colors.lightGrey3,
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: colors.white,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
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
        elevation: 15,
        shadowColor: colors.lightGrey4,
      },
    }),
    borderRadius: 20,
    overflow: 'hidden',
  },
  iconContainer: {
    height: 42,
    width: 42,
    backgroundColor: colors.lightGreen2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  itemText: {
    padding: spacing.md,
    color: colors.lightGrey4,
    fontSize: fonts.md,
  },
  arrow: {
    left: 125,
    height: spacing.md,
    width: spacing.md,
  },

  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#ffffff',
    // margin: spacing.xl,
    padding: spacing.xl,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: hp('28%'),
    overflow: 'hidden',
  },
  modalTitle: {
    fontSize: fonts.lg,
    fontWeight: '900',
    color: colors.black,
    paddingVertical: spacing.sm,
  },
  modalSubtitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: spacing.md,
    color: colors.black,
  },

  modalButton: {
    padding: 10,
    backgroundColor: colors.lightGrey1,
    marginVertical: spacing.md,
    borderRadius: spacing.sm,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: spacing.xl,
    },
    width: 160,
    shadowOpacity: 0.3,
    shadowRadius: spacing.sm,
  },
  modalButtonText: {
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: fonts.md,
  },
});
