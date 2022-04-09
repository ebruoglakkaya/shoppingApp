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

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
};

function App() {
    return <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) =>
                    generateIcon(focused, color, route),
                })}>
            
            <Tab.Screen name="HomeTab" component={HomeStack}/>
            <Tab.Screen name="CategoriesTab" component={Categories}/>
            <Tab.Screen name="BasketTab" component={Basket}/>
            <Tab.Screen name="FavoritesTab" component={Favorites}/>
            <Tab.Screen name="AccountTab" component={Account}/>

        </Tab.Navigator>
    </NavigationContainer>
    
}



export default App;

function generateIcon(focused, color, route) {
    let iconName;

    switch (route.name) {
        case 'HomeTab':
            iconName = focused ? 'home' : 'home';
            break;
        case 'CategoriesTab':
            iconName = focused ? 'menu' : 'menu';
            break;
        case 'BasketTab':
                iconName = focused ? 'basket' : 'basket';
            break;
        // case 'FavoritesTab':
        //         iconName = focused ? 'favorite' : 'favorite';
        //     break;
        case 'AccountTab':
                iconName = focused ? 'account' : 'account';
            break;

        default:
            break;
    }

    return <Icon name={iconName} color={color} size={30} />;} 