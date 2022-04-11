import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Favorites from './screens/Favorites/Favorites';
import Categories from './screens/Categories/Categories';
import Cart from './screens/Cart/Cart';
import Home from './screens/Home/Home';
import Account from './screens/Account/Account';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import { Provider } from 'react-redux';
import store from './redux/store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => generateIcon(focused, color, route),
      })}>
      <Tab.Screen name="Anasayfa" component={Home} />
      <Tab.Screen name="Kategoriler" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favoriler" component={Favorites} />
      <Tab.Screen name="Hesabım" component={Account} />
    </Tab.Navigator>
  );
};

function App() {
  return (
      <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProductDetail"
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;

function generateIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case 'Anasayfa':
      iconName = focused ? 'home' : 'home';
      break;
    case 'Kategoriler':
      iconName = focused ? 'menu' : 'menu';
      break;
    case 'Cart':
      iconName = focused ? 'basket' : 'basket';
      break;
    // case 'Favoriler':
    //         iconName = focused ? 'favorite' : 'favorite';
    //     break;
    case 'Hesabım':
      iconName = focused ? 'account' : 'account';
      break;

    default:
      break;
  }

  return <Icon name={iconName} color={color} size={30} />;
}
