import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../../../components/Layout/Layout'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Dashboard = () => {
  return (
    <Layout>
      <View style={styles.main}>
       <Text style={styles.heading}>Dashboard</Text>
       <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="edit" />
            <Text style={styles.btnText}>Manage Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="home" />
            <Text style={styles.btnText}>Manage Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="user" />
            <Text style={styles.btnText}>Manage User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="bars" />
            <Text style={styles.btnText}>Manage Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="info" />
            <Text style={styles.btnText}>About App</Text>
        </TouchableOpacity>
       </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'lightblue',
        height: '95%',
    },
    heading: {
        backgroundColor: '#000000',
        color: '#ffffff',
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        margin: 8,
        borderRadius: 10,
        fontWeight: 'bold'
    },
    btnContainer: {
        margin: 10
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        elevation: 10,
        marginBottom: 20
    },
    icon: {
        fontSize: 20,
        marginRight: 15,
        marginLeft: 10
    },
    btnText: {
        fontSize: 17,
    }
})

export default Dashboard