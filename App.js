// In App.js in a new project

import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import firebase from 'firebase/app'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/Redux/store';
import HomeScreen from './src/Screens/HomeScreen';
import { primaryColor, white } from './src/Theme/colors';
import { userLoggedIn, userSignOut } from './src/Redux/actions/authActions';
import { resetUser, setUser } from './src/Redux/actions/userActions';
import CarsScreen from './src/Screens/CarsScreen';
import CarInfoScreen from './src/Screens/CarInfoScreen';
import BookScreen from './src/Screens/BookScreen';
import OrderHistoryScreen from './src/Screens/OrderHistoryScreen';
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQPhWJklwhs8ze36MmrcbQIW9kzo0gl1M",
  authDomain: "car-rental-app-990e6.firebaseapp.com",
  projectId: "car-rental-app-990e6",
  storageBucket: "car-rental-app-990e6.appspot.com",
  messagingSenderId: "825411593570",
  appId: "1:825411593570:web:31545be53c7b7d34d7f83b",
  measurementId: "G-7Y5RX9D7R9"
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  return (
    <Provider store={store}>
      <NavContainer fontsLoaded={fontsLoaded} />
    </Provider>
  );
}


const NavContainer = (fontsLoaded) => {
  const authState = useSelector(state => state.authState)
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)


  React.useEffect(() => {
    setLoading(true)
    const listener = firebase.auth().onAuthStateChanged(user => {
      setLoading(false)
      if (user) {
        dispatch(userLoggedIn())
        dispatch(setUser({
          email: user.email,
          name: ''
        }))
      } else {
        dispatch(resetUser())
        dispatch(userSignOut())
      }
    })
    return () => listener()
  }, [])

  if (!fontsLoaded && loading) {
    return (
      <View style={{
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator size='large' color={primaryColor} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {
        authState ?
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Cars" component={CarsScreen} />
            <Stack.Screen name="CarInfo" component={CarInfoScreen} />
            <Stack.Screen name="Book" component={BookScreen} />
            <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
          </Stack.Navigator>
          :
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>

      }
    </NavigationContainer>
  )
}

export default App;