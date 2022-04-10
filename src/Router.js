import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Favorites from "./screens/Favorites/Favorites";
import Categories from "./screens/Categories/Categories";
import Basket from "./screens/Basket/Basket";
import Home from "./screens/Home/Home";
import Account from "./screens/Account/Account";
import ProductDetail from "./screens/ProductDetail/ProductDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) =>
                    generateIcon(focused, color, route),
                })}>
            <Tab.Screen name="Anasayfa" component={Home}/>
            <Tab.Screen name="Kategoriler" component={Categories}/>
            <Tab.Screen name="Sepetim" component={Basket}/>
            <Tab.Screen name="Favoriler" component={Favorites}/>
            <Tab.Screen name="Hesabım" component={Account}/>
        </Tab.Navigator>
    );
};

function App() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTab} />
            <Stack.Screen options={{headerShown: false}}
             name="ProductDetail" component={ProductDetail}/>

        </Stack.Navigator>
    </NavigationContainer>
    
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
        case 'Sepetim':
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

    return <Icon name={iconName} color={color} size={30} />;} 