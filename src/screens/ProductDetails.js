import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { productsData } from '../../data/productsData'
import Layout from '../components/Layout/Layout'

const ProductDetails = ({ route }) => {
    const [pDetails, setPDetails] = useState({})
    const [Qty, setQty] = useState(1)
    //get product details
    useEffect(() => {
        const getProduct = productsData.find((p) => {
            return p?._id === params?._id
        })
        setPDetails(getProduct)
    },[params?._id])
    
    const handleAddQty = () => {
        if (Qty === 10) return alert("You can't add more than 10 quantity")
        setQty((prev) => prev + 1)
    }
    const handleRemoveQty = () => {
        if (Qty === 1) return alert("atleast 1 quantity")
        setQty((prev) => prev - 1)
    }

    const {params} = route

    return (
    <Layout>
      <Image source={{ uri: pDetails?.imageUrl }} style={styles.image}/>
      <View style={styles.container}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.title}>Price : ₹{pDetails?.price}</Text>
        <Text style={styles.desc}>Description : {pDetails?.description}</Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
                <Text style={styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.btnQtyText}>QTY : {Qty}</Text>
            <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                <Text style={styles.btnQtyText}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity 
                style={styles.btnCart} 
                onPress={() => alert(`${Qty} items added to cart`)}
                disabled={pDetails?.quantity <= 0}
            >
                <Text style={styles.btnText}>
                    {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBuy}>
                <Text style={styles.btnText}>BUY</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: "100%"
    },
    container: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
    },
    desc: {
        fontSize: 10,
        textTransform: 'capitalize',
        textAlign: 'justify',
        marginVertical: 8,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 10,
    },
    btnCart: {
        width: 160,
        backgroundColor: '#000000',
        borderRadius: 6,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnBuy: {
        width: 160,
        backgroundColor: 'orange',
        borderRadius: 6,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    btnQty: {
       backgroundColor: 'lightblue',
       width: 40,
       alignItems: 'center',
       marginHorizontal: 10, 
    },
    btnQtyText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default ProductDetails