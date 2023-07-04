import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import profile from './App/assets/image/drawer/profile.png';

// Tab ICons...
import home from './App/assets/image/drawer/home.png';
import search from './App/assets/image/drawer//search.png';
import notifications from './App/assets/image/drawer/bell.png';
import settings from './App/assets/image/drawer/settings.png';
import logout from './App/assets/image/drawer/logout.png';
// Menu
import menu from './App/assets/image/drawer/menu.png';
import close from './App/assets/image/drawer/close.png';

// Photo
import photo from './App/assets/image/drawer/photo.jpg';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('Home');
  // To get the curretn Status of menu ...
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
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Image
          source={profile}
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
        <TouchableOpacity>
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
          {TabButton(currentTab, setCurrentTab, 'Home', home)}
          {TabButton(currentTab, setCurrentTab, 'Search', search)}
          {TabButton(currentTab, setCurrentTab, 'Notification', notifications)}
          {TabButton(currentTab, setCurrentTab, 'Settings', settings)}
        </View>
        <View>{TabButton(currentTab, setCurrentTab, 'LogOut', logout)}</View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          // transforming view
          borderRadius: showMenu ? 15 : 0,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
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
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginTop: 20,
              }}></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20,
            }}>
            {currentTab}
          </Text>
          <Image
            source={photo}
            style={{
              width: '100%',
              height: 300,
              borderRadius: 15,
              marginTop: 25,
            }}></Image>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 15,
              paddingBottom: 5,
            }}>
            Jenna Ezarik
          </Text>
          <Text style={{}}>
            Techie, YouTuber, PS Lover, Apple Sheep's Sister
          </Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

// For multiple Buttons.....

// const TabButton: React.FC<{
//   currentTab: string;
//   setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
//   title: string;
//   image: any;
// }> = ({currentTab, setCurrentTab, title, image})

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title === 'LogOut') {
          // Do Your stuff
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab === title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab === title ? '#5359d1' : 'white',
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab === title ? '#5359D1' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
