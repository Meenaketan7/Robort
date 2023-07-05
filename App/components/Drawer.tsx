import {
  Animated,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {images} from '../util/image';
import {colors} from '../util/color';
import {spacing} from '../util/size';
import TabButton from './TabButton';
import Notify from '../screens/notification/Notify';
import Home from '../screens/home/Home';
import Map from '../screens/location/Map';
import Locations from '../screens/location/Locations';
import Consultant from '../screens/home/Consultant';

interface Props {
  navigation: any;
}
const App: React.FC<Props> = ({navigation}) => {
  const [currentTab, setCurrentTab] = useState<string>('Home');
  // To get the current Status of menu ...
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // Animated Properties...

  const offsetValue = useRef<Animated.Value>(new Animated.Value(0)).current;
  // Scale Initially must be One...
  const scaleValue = useRef<Animated.Value>(new Animated.Value(1)).current;
  const closeButtonOffset = useRef<Animated.Value>(
    new Animated.Value(0),
  ).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={showMenu ? false : true}
        backgroundColor={colors.green}
        showHideTransition={'slide'}
      />
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Image
          source={images.profile}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}>
          Jenna Ezarik
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text
            style={{
              marginTop: 6,
              color: 'white',
            }}>
            View Profile
          </Text>
        </TouchableOpacity>
        <View style={{flexGrow: 1, marginTop: 50}}>
          {
            // Tab buttons...
          }

          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            image={images.home}
            title={'Home'}
          />

          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            image={images.map}
            title={'Map'}
          />
          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            image={images.chat}
            title={'Chat'}
          />
          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            image={images.notifications}
            title={'Notification'}
          />
        </View>
        <View>
          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            image={images.logout}
            title={'Log Out'}
            navigation={navigation}
          />
        </View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={[
          styles.animationView,
          {
            // transforming view
            borderRadius: showMenu ? 15 : 0,
            transform: [{scale: scaleValue}, {translateX: offsetValue}],
          },
        ]}>
        {
          // menu button...
        }
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: showMenu ? 30 : 8,
            }}>
            <TouchableOpacity
              onPress={() => {
                //Do Action horizontally...
                //Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(closeButtonOffset, {
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
              }}>
              <Image
                source={showMenu ? images.close : images.menu}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'black',
                }}></Image>
            </TouchableOpacity>

            <Text
              style={{
                color: 'black',
                marginLeft: 20,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {currentTab}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              flex: 1,
              marginTop: showMenu ? spacing.xl + 10 : spacing.md + 5,
              zIndex: 5,
            }}>
            {
              // Screen Navigation...
            }
            {
              <View
                style={{
                  // position: 'absolute',
                  alignSelf: 'center',
                }}>
                {currentTab === 'Home' ? (
                  <Home navigation={navigation} />
                ) : null}
                {currentTab === 'Notification' ? <Notify /> : null}
                {currentTab === 'Map' ? <Locations /> : null}
                {currentTab === 'Chat' ? <Consultant /> : null}
              </View>
            }
          </View>
          <View
            style={{
              width: wp('100%'),
              position: 'absolute',
              bottom: -732,
              zIndex: 10,
              height: 52,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'white',
              left: -15,
            }}>
            <TouchableOpacity
              style={{
                width: wp('20%'),
                height: hp('100'),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image source={images.homeTab} style={{height: 30, width: 30}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: wp('20%'),
                height: hp('100'),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image source={images.map} style={{height: 30, width: 30}} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: wp('20%'),
                height: hp('100'),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image source={images.chat} style={{height: 30, width: 30}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: wp('20%'),
                height: hp('100'),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image source={images.notify} style={{height: 30, width: 30}} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

// For multiple Buttons.....

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.green,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  animationView: {
    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
