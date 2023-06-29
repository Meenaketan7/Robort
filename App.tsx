import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import Splash from './App/screens/Splash';
import Login from './App/screens/Login';
import SignUp from './App/screens/SignUp';
import OnboardingScreen from './App/screens/OnboardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './App/screens/Onboarding1';
import ForgotPassword from './App/screens/password/ForgotPassword';
import VerifyCode from './App/screens/password/VerifyCode';
import NewPassword from './App/screens/password/NewPassword';
import Profile from './App/screens/profile/Profile';
import MyAccount from './App/screens/profile/MyAccount';
import MyField from './App/screens/profile/MyField';
import PrivacyPolicy from './App/screens/profile/PrivacyPolicy';
import {colors} from './App/util/color';
import About from './App/screens/profile/About';
import TermCondition from './App/screens/profile/TermConditions';
import HelpSupport from './App/screens/profile/HelpSupport';
import Rating from './App/screens/profile/Rating';
import Notify from './App/screens/notification/Notify';

import Locations from './App/screens/location/Locations';
import OverView from './App/screens/location/OverView';

const Stack = createStackNavigator();
const App = () => {
  return (
    // <Login/>
    // <NavigationContainer>
    //   <Stack.Navigator >
    //     <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}}/>
    //     <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <VerifyCode/>
    // <Onboarding/>
    // <Profile/>
    // <MyAccount/>

    // For My Field
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="My Fields"
    //       component={MyField}
    //       options={{
    //         headerShown: true,
    //         headerTintColor: 'black',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //         },
    //         headerTitleAlign: 'center',
    //         headerStyle: {
    //           elevation: 0,
    //           shadowOpacity: 0,
    //           borderBottomWidth: 1,
    //           borderColor: 'grey',
    //         },
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //For Privacy, Help,about us, term and conditions,
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="About Us"
    //       component={HelpSupport}

    //       options={{
    //         headerShown: true,
    //         headerTintColor: 'white',
    //         headerTitle: (props) => ( // App Logo
    //         <View style={{flexDirection:'row'}}>
    //           <Image
    //           style={{ width:60, height: 40,padding:10, alignSelf: 'center' }}
    //           source={require('./App/assets/image/Icon13.png')}
    //           resizeMode='contain'
    //         />
    //         <Text style={{alignSelf:'center',fontSize:24,fontWeight:'900',padding:10,color:'white'}}>Help & Support</Text>

    //         </View>
    //       ),
    //         headerStyle: {
    //           elevation: 0,
    //           shadowOpacity: 0,
    //           backgroundColor: colors.lightGreen1,
    //         },
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <Rating/>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Over View"
          component={OverView}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderColor: 'grey',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
