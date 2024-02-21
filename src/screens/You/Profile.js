import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import InputBox from '../../components/Form/InputBox'
import { userData } from '../../../data/userData'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Profile = ({navigation}) => {
//state:
const [name, setName] = useState(userData.name)
const [profilePic, setprofilePic] = useState(userData.profilePic)
const [phoneno, setPhoneno] = useState(userData.phoneno)
const [email, setEmail] = useState(userData.email)
const [password, setPassword] = useState(userData.password)

const handleUpdate = () => {
    if (!email || !password || !name || !phoneno) {
        return alert("Please add email or password or name")
    }
    alert("Profile Update Successfully")
    navigation.navigate("you")
}

  return (
    <Layout>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri : profilePic }}/>
              <Pressable onPress={() => alert("update your profile pic")}>
               <AntDesign style={{fontSize: 20,}} name="edit" />
              </Pressable>
            </View>
        <InputBox placeholder={"Name"} autoComplete={'name'} value={name} setValue={setName}/>
        <InputBox placeholder={"Phone no."} autoComplete={'tel'} value={phoneno} setValue={setPhoneno}/>
        <InputBox placeholder={"Email or Phone No."} autoComplete={'email'} value={email} setValue={setEmail}/>
        <InputBox placeholder={"Password"} secureTextEntry={true} value={password} setValue={setPassword}/>
        <InputBox placeholder={"Confirm Password"} secureTextEntry={true} value={password} setValue={setPassword}/>
        <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>Update Profile</Text>
        </TouchableOpacity>
        </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: "flex-end",
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 160
    },
    image: {
        height: 100,
        width: '100%',
        resizeMode: 'contain',
    },
    btnUpdate: {
        backgroundColor: "#000000",
        height: 40,
        borderRadius: 50,
        marginHorizontal: 30,
        justifyContent: 'center',
        marginTop: 10
    },
    btnUpdateText: {
        color: '#ffffff',
        fontSize: 19,
        textAlign: 'center'
    }
})

export default Profile