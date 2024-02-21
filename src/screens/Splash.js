import { View, Text } from 'react-native'
import React, { useEffect } from 'react'


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('login')
        }, 3000)
    }, [])


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:25, fontWeight:'800'}}>E-Commerce</Text>
    </View>
  )
}

export default Splash