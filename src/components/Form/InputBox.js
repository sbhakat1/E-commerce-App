import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputBox = ({
    value,
    setValue,
    autoComplete,
    placeholder,
    secureTextEntry,
}) => {
  return (
    <View style={styles.conatainer}>
      <TextInput 
      style={styles.input}
      autoComplete={autoComplete}
      value={value}
      onChangeText={(text) => setValue(text)}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
    conatainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        width: "80%",
        backgroundColor: '#ffffff',
        height: 40,
        padding: 10,
        borderRadius: 20,
        color: '#000000',
        borderColor: 'lightblue',
        borderWidth: 1,
    }
})

export default InputBox