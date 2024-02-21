import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

 const Cartitems = ({item}) => {
    const [Qty, setQty] = useState(1)
    const handleAddQty = () => {
        if (Qty === 10) return alert("You can't add more than 10 quantity")
        setQty((prev) => prev + 1)
    }
    const handleRemoveQty = () => {
        if (Qty === 1) return alert("atleast 1 quantity")
        setQty((prev) => prev - 1)
    }
  return (
    <View style={Styles.container}>
      <Image style={Styles.cartImage} source={{ uri: item?.imageUrl}}/>
      <View>
        <Text style={Styles.name}>{item?.name}</Text>
        <Text style={Styles.name}>{item?.price}</Text>
      </View>
      <View style={Styles.btnContainer}>
            <TouchableOpacity style={Styles.btnQty} onPress={handleRemoveQty}>
                <Text style={Styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text style={Styles.btnQtyText}>QTY : {Qty}</Text>
            <TouchableOpacity style={Styles.btnQty} onPress={handleAddQty}>
                <Text style={Styles.btnQtyText}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        margin: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    cartImage: {
        height: 60,
        width: 50,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 10,
    },
    btnQty: {
        backgroundColor: 'lightblue',
        width: 25,
        alignItems: 'center',
        marginHorizontal: 15, 
    },
    btnQtyText: {
         fontSize: 12,
         fontWeight: 'bold'
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 8,
    }
})

export default Cartitems