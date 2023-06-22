import React from 'react';
import {Text,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomePage from './App';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddPage from './pages/AddPage/AddPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ActiveUserAtom} from './store/Atoms';
import {useAtomValue} from 'jotai/react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({name, focused}) => {
  let iconName;
  let iconColor;
  let pageName;

  if (name === 'Store') {
    iconName = 'shopping-cart';
    pageName = "Anasayfa";
  } else if (name === 'Search') {
    iconName = 'search';
    pageName = "Arama";
  } else if (name === 'Add') {
    iconName = 'plus';
    pageName = "Ekle";
  } else if (name === 'Favorites') {
    iconName = 'heart';
    pageName = "Favoriler";
  } else if (name === 'Profile') {
    iconName = 'user';
    pageName = "Profil";
  }

  iconColor = focused ? '#FF512F' : 'grey';

  return (
    <>
      <Icon name={iconName} size={20} color={iconColor} />
      <Text style={{color: iconColor, fontSize: 12}}>{pageName}</Text>
    </>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <TabIcon name={route.name} focused={focused} />
        ),
      })}>
      <Tab.Screen name="Store" component={HomePage} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="Add" component={AddPage} />
      <Tab.Screen name="Favorites" component={FavoritesPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

const Router = () => {
  const User = useAtomValue(ActiveUserAtom);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        {User ? (
          <Stack.Screen name="Home" component={TabNavigation} />
        ) : (
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
