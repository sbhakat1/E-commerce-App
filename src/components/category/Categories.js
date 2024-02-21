import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { categoriesData } from '../../../data/categoriesData'
import Entypo from 'react-native-vector-icons/Entypo'

const Categories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
      { categoriesData?.map(item => (
        <View key={item._id} >
            <TouchableOpacity style={styles.catContainer}>
                <Entypo name={item.icon} style={styles.catIcon}/>
                <Text style={styles.catTitle}>{item.name}</Text>
            </TouchableOpacity>
        </View>
      )) }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 5,
    flexDirection: 'row',
  },
  catContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  catIcon: {
    fontSize: 31,
    verticalAlign: "top"
  },
  catTitle: {
    fontSize: 15,
  }
})

export default Categories