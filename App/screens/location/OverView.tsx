import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {fonts, spacing} from '../../util/size';
import {colors} from '../../util/color';
import {TouchableOpacity} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const OverView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Select Date');
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectValue = (value: any) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    const x2 = x1[2] + '/' + x1[1] + '/' + x1[0];
    setSelectedDate(x2);
    setDatePickerVisibility(false);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.item}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: spacing.sm,
            }}>
            <Text style={styles.itemHeading}>Field1</Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: fonts.xl,
                  top: -12,
                  color: colors.white,
                }}>
                ...
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginBottom: spacing.sm}}>
            <View style={styles.circle}>
              <Image source={require('../../assets/image/Icon8.png')} />
            </View>
            <Text style={styles.itemText}>Wheat</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: spacing.sm}}>
            <View style={styles.circle}>
              <Image source={require('../../assets/image/Icon9.png')} />
            </View>
            <Text style={styles.itemText}>El Mansoura, El Dakahlia, Egypt</Text>
          </View>
        </View>

        <View style={{flexDirection: 'column', marginTop: spacing.lg}}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Field Name</Text>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              returnKeyType="next"
              underlineColorAndroid="#0000"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Scouting Date</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={showDatePicker}>
              <Text style={styles.dropText}>{selectedDate}</Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </TouchableOpacity>
              <Image
                source={require('../../assets/image/Icon19.png')}
                style={{left: 300, top: -38}}
              />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Crop Name</Text>

            <View style={styles.containerDrop}>
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={toggleDropdown}>
                <Text style={styles.dropText}>
                  {selectedValue || 'Select an option'}
                </Text>
                
              </TouchableOpacity>
              <Image
                  source={require('../../assets/image/Icon18.png')}
                  style={{left: 300, top: -30}}
                />
              {isOpen && (
                <View style={styles.dropdownContent}>
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleSelectValue('Wheat')}>
                    <Text style={styles.dropText}>Wheat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleSelectValue('Carrot')}>
                    <Text style={styles.dropText}>Carrot</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleSelectValue('Potato')}>
                    <Text style={styles.dropText}>Potato</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  item: {
    backgroundColor: colors.green,
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
  },
  icon: {
    alignSelf: 'center',
  },
  itemText: {
    color: colors.white,
    fontSize: fonts.md,
    paddingHorizontal: spacing.md,
    top: 10,
  },
  itemHeading: {
    fontWeight: '500',
    fontSize: fonts.lg,
    color: colors.white,
  },
  circle: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: 30,
  },
  inputContainer: {
    flexDirection: 'column',
    marginTop: spacing.md,
  },
  label: {
    fontWeight: 'bold',
    color: colors.black,
    padding: spacing.sm,
    fontSize: fonts.md,
  },
  inputStyle: {
    borderWidth: 1.5,
    marginLeft: spacing.sm,
    padding: spacing.md,
    height: 55,
    borderRadius: 10,
    borderColor: colors.green,
    color: colors.black,
    fontSize: fonts.md,
  },

  containerDrop: {
    justifyContent: 'center',
  },
  dropdownButton: {
    borderWidth: 1.5,
    marginLeft: spacing.sm,
    padding: spacing.md,
    height: 55,
    borderRadius: 10,
    borderColor: colors.green,
    color: colors.black,
    flexDirection: 'row',
  },
  dropdownContent: {
    marginLeft: spacing.sm,
    position: 'absolute',
    top: 40,
    width: widthPercentageToDP('86%'),
    borderWidth: 1,
    borderColor: colors.lightGreen1,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  dropdownItem: {
    padding: 10,
  },
  dropText: {
    color: colors.black,
  },
});
