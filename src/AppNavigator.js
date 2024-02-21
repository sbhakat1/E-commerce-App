import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './screens/Splash'
import ProductDetails from './screens/ProductDetails'
import Cart from './screens/Cart'
import Main from './screens/Main'
import Checkout from './screens/Checkout'
import Login from './screens/auth/Login'
import Registration from './screens/auth/Registration'
import You from './screens/You/You'
import Notification from './screens/Notification'
import Profile from './screens/You/Profile'
import Yourorders from './screens/You/Yourorders'
import Dashboard from './screens/You/AdminPanel/Dashboard'

const Stack= createNativeStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
        <Stack.Screen name='login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='registration' component={Registration} options={{headerShown:false}}/>
        <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
        <Stack.Screen name='you' component={You} options={{headerShown:false}}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}} />
        <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}} />
        <Stack.Screen name='checkout' component={Checkout} options={{headerShown:false}} />
        <Stack.Screen name='notification' component={Notification} options={{headerShown:false}} />
        <Stack.Screen name='profile' component={Profile} options={{headerShown:false}} />
        <Stack.Screen name='yourorders' component={Yourorders} options={{headerShown:false}} />
        <Stack.Screen name='adminpanel' component={Dashboard} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator