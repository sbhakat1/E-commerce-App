import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Form/InputBox'

const Registration = ({navigation}) => {
const [name, setName] = useState('')
const [phoneno, setPhoneno] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const handleRegister = () => {
    if (!email || !password || !name || !phoneno) {
        return alert("Please add email or password or name")
    }
    alert("Register Successfully")
    navigation.navigate("login")
}


  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: "https://p.kindpng.com/picc/s/549-5493419_icon-png-download-sign-transparent-png.png"}}/>
        <InputBox placeholder={"Name"} autoComplete={'name'} value={name} setValue={setName}/>
        <InputBox placeholder={"Phone no."} autoComplete={'tel'} value={phoneno} setValue={setPhoneno}/>
        <InputBox placeholder={"Email or Phone No."} autoComplete={'email'} value={email} setValue={setEmail}/>
        <InputBox placeholder={"Password"} secureTextEntry={true} value={password} setValue={setPassword}/>
        <InputBox placeholder={"Confirm Password"} secureTextEntry={true} value={password} setValue={setPassword}/>
        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
            Already a user?{" "}
            <Text style={styles.link} onPress={() => navigation.navigate("login")}>Login here!</Text>
        </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    image: {
        height: 150,
        width: '100%',
        resizeMode: 'contain',
        marginVertical: 18,
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtn: {
        backgroundColor: '#000000',
        width: '80%',
        justifyContent: 'center',
        height: 40,
        borderRadius: 18,
        marginVertical: 20,
    },
    loginBtnText: {
        color: '#ffffff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 18,
    },
    link: {
        color: 'green'
    }
})

export default Registration