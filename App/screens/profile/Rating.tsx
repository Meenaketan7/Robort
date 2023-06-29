import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Modal,
} from 'react-native';
import React from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {AirbnbRating} from 'react-native-ratings';

const Rating = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Modal transparent={true} visible={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View style={{alignItems: 'center'}}></View>
              <TouchableOpacity>
                <Image source={require('../../assets/image/Icon16.png')} style={{alignSelf:'flex-end'}}/>
              </TouchableOpacity>

              <Text style={styles.modalTitle}>Rate Us</Text>
              <AirbnbRating
                count={5}
                defaultRating={3}
                size={30}
                showRating={false}
                ratingContainerStyle={{marginVertical: spacing.md}}
                
              />
              <TextInput
                placeholder="write Something here..."
                placeholderTextColor="grey"
                style={styles.inputStyle}
                autoCorrect={false}
                returnKeyType="next"
                underlineColorAndroid="#0000"
              />
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.white,
  },
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#ffffff',
    margin: spacing.xl,
    padding: spacing.xl,
    borderRadius: spacing.md,
  },
  modalTitle: {
    fontSize: fonts.lg,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.green,
    paddingVertical: spacing.md,
  },
  btn: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: colors.green,
    marginVertical: spacing.lg,
    borderRadius: spacing.sm,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: spacing.xl,
    },
    shadowOpacity: 0.1,
    shadowRadius: spacing.sm,
    width: 200,
  },
  btnText: {
    fontWeight: '700',
    color: colors.white,
    alignSelf: 'center',
    fontSize: fonts.md,
  },
  inputStyle: {
    borderWidth: 1.5,
    padding: spacing.md,
    height: 100,
    borderRadius: 10,
    borderColor: colors.black,
    color: colors.black,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});
