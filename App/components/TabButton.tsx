import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../util/color';

const TabButton = ({
  currentTab,
  setCurrentTab = () => {},
  title,
  image,
  navigation,
}: {
  currentTab: string;
  setCurrentTab: (title: string) => void;
  title: string;
  image: any;
  navigation?: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title === 'Log Out') {
          // Do Your stuff
          navigation.navigate('Login');
        } else {
          setCurrentTab(title);
          if (title === 'Home') {
          }
        }
      }}>
      <View
        style={[
          styles.btn,
          {backgroundColor: currentTab === title ? 'white' : 'transparent'},
        ]}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab === title ? colors.green : 'white',
          }}
        />
        <Text
          style={[
            styles.btnText,
            {color: currentTab === title ? colors.green : 'white'},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 13,
    paddingRight: 35,
    borderRadius: 8,
    marginTop: 15,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
});
