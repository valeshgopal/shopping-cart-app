import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavbar from './bottomNavbar'
import Home from '../screens/home'
import Cart from '../screens/cart'
import Product from '../screens/product'
import Favorites from '../screens/favorites'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={props => <BottomNavbar {...props} />}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
            />
        </Tab.Navigator>
    )
}

const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'TabMenu'}
        >
            <Stack.Screen
                name="Product"
                component={Product}
            />
            <Stack.Screen name="Cart" component={Cart} options={{
                animation: 'fade_from_bottom',
            }} />
            <Stack.Screen
                name="TabMenu"
                component={TabNavigator}
                options={{ animation: 'fade_from_bottom' }}
            />
        </Stack.Navigator>
    )
}
export default Navigator
