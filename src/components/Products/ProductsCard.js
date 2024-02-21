import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductsCard = ({p}) => {
    const navigation = useNavigation()

    //more details btn
    const handleMoreBtn = (id) => {
        navigation.navigate("ProductDetails", { _id: id})
        console.log(id)
    }

    //Add to Cart
    const handleAddToCart = () => {
        Alert.alert("Added to cart")
    }

  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: p?.imageUrl }}/>
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>{p?.description.substring(0,25)} ...more</Text>
        <View style={styles.BtnContainer}>
            <TouchableOpacity style={styles.btn1} onPress={() => handleMoreBtn(p._id)}>
                <Text style={styles.btnText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={handleAddToCart}>
                <Text style={styles.btnText}>ADD TO CARD</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "lightgray",
        marginVertical: 5,
        marginHorizontal: 8,
        width: "45%",
        padding: 8,
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    cardImage: {
        height: 120,
        width: '100%',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    cardDesc: {
        fontSize: 10,
        textAlign: 'left',
    },
    BtnContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn1: {
        backgroundColor: '#000000',
        height: 20,
        width: 75,
        borderRadius: 5,
        justifyContent: 'center'
    },
    btn2: {
        backgroundColor: "orange",
        height: 20,
        width: 75,
        borderRadius: 5,
        justifyContent: 'center'
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold'
    },
})

export default ProductsCard