import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputBox from '../../components/Form/InputBox'

//redux hooks
import { useDispatch, useSelector } from 'react-redux'

const Login = ({navigation}) => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
//hook
const dispatch = useDispatch()
//global state
const {loading, message, error} = useSelector(state => state.user)

const handleLogin = () => {
    if (!email || !password) {
        return alert("Please add email or password")
    }
    dispatch(login(email, password))
}
// life cycle
useEffect(() => {
    if(error) {
        alert(error)
        dispatch({type:"clearError"})
    }
    if(message) {
        alert(message)
        dispatch({type:"clearMessage"})
        navigation.navigate("Main")
    }
}, [error, message, dispatch])

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: "https://p.kindpng.com/picc/s/549-5493419_icon-png-download-sign-transparent-png.png"}}/>
        <InputBox placeholder={"Email or Phone No."} autoComplete={'email'} value={email} setValue={setEmail}/>
        <InputBox placeholder={"Password"} secureTextEntry={true} value={password} setValue={setPassword}/>
        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
            Not a user yet? Please{" "}
            <Text style={styles.link} onPress={() => navigation.navigate("registration")}>Register here!</Text>
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

export default Login