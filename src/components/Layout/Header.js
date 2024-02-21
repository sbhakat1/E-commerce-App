import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
const Header = () => {
  const [searchText, setSearchText] = useState("");
  //function for search
  const handleSearch = () => {
    console.log(searchText);
    setSearchText("");
  }  
  return (
    <View style={{height: 70, backgroundColor: 'lightblue'}}>
      <View style={styles.container}>
      <TextInput 
        placeholder='Search...'
        style={styles.searchBox}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        />
      <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
        <Icon name='search' style={styles.icon} />
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchBox: {
    borderWidth: 0.3,
    width: '100%',
    position: 'absolute',
    left: 15,
    height: 40,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    fontSize: 17,
    borderRadius: 6,
  },
  searchBtn: {
    position: 'absolute',
    left: '95%'
  },
  icon: {
    color: '#000000',
    fontSize: 18,
  }
})

export default Header