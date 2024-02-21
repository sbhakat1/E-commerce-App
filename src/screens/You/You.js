import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { userData } from '../../../data/userData'
import AntDesign from "react-native-vector-icons/AntDesign"

const You = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: userData.profilePic }}/>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.name}>
                Hello
                <Text style={{color: 'green'}}> {userData.name} </Text>
                👋
            </Text>
            <Text>email : {userData.email}</Text>
            <Text>contact : {userData.phoneno}</Text>
            <View style={styles.btnContainer}>
                <Text style={styles.heading}>Account Setting</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("profile", { id: userData._id })}>
                    <AntDesign style={styles.btnText} name='edit'/>
                    <Text style={styles.btnText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("adminpanel", { id: userData._id })}>
                    <AntDesign style={styles.btnText} name='idcard'/>
                    <Text style={styles.btnText}>Admin Panel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("yourorders", { id: userData._id })}>
                    <AntDesign style={styles.btnText} name='CodeSandbox'/>
                    <Text style={styles.btnText}>Your Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("notification")}>
                    <AntDesign style={styles.btnText} name='bells'/>
                    <Text style={styles.btnText}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <AntDesign style={styles.btnText} name='menuunfold'/>
                    <Text style={styles.btnText}>Your Lists</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <AntDesign style={styles.btnText} name='customerservice'/>
                    <Text style={styles.btnText}>Customer Service</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </Layout>
    
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    image: {
        height: 100,
        width: '100%',
        resizeMode: 'contain'
    },
    name: {
        fontSize: 20,
        marginTop: 20,
    },
    btnContainer: {
        padding: 70,
        paddingTop: 8,
        backgroundColor: '#ffffff',
        margin: 10,
        marginVertical: 20,
        elevation: 5,
        borderRadius: 10,
        paddingBottom: 30,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
        textAlign: "center",
        borderBottomWidth: 2,
        borderColor: "lightblue"
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '12',
        padding: 8,
    },
    btnText: {
        fontSize: 18,
        marginRight: 10,
    },
})

export default You