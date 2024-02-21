import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native'

const Footer = () => {
  const route = useRoute()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("Main")}>
        <Icon name="home" style={[styles.icon, route.name === "Main" && styles.active]}/>
        <Text style={[styles.iconText, route.name === "home" && styles.active]}> home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("you")}>
        <Icon name="github" style={[styles.icon, route.name === "you" && styles.active]}/>
        <Text style={styles.iconText}>   you</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("Cart")}>
        <Icon name="shoppingcart" style={[styles.icon, route.name === "Cart" && styles.active]}/>
        <Text style={[styles.iconText, route.name === "cart" && styles.active]}>   cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("notification")}>
        <Icon name="bells" style={[styles.icon, route.name === "notification" && styles.active]}/>
        <Text style={[styles.iconText, route.name === "notification" && styles.active]}>notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => {alert("Logout Successfully"), navigation.navigate("login")}}>
        <Icon name="logout" style={styles.icon}/>
        <Text style={[styles.iconText, route.name === "logout" && styles.active]}>logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  menuContainer: {
    alignContent: "center",
    justifyContent: 'center',
  
  },
  icon: {
    fontSize: 30,
    color: '#000000',
    paddingHorizontal: 7
  },
  iconText: {
    fontSize: 12,
    color: '#000000',
    alignItems: 'center',
    paddingHorizontal: 3.5,
  },
  active: {
    color: "green",
  },
})

export default Footer