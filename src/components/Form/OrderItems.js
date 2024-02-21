import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OrderItems = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
      <Text>Order ID: {order._id}</Text>
      <Text>Order Date: {order.date}</Text>
      </View>
      <Text>Product name: {order.productInfo.name}</Text>
      <Text>Price: {order.productInfo.price}/-</Text>
      <Text>Quantity: {order.productInfo.qty}</Text>
      <Text>Total Amount: Rs.{order.totalAmount}/-</Text>
      <Text style={styles.status}>Order Status: {order.status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        margin: 8,
        padding: 10,
        borderRadius: 12,
    },
    orderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'lightblue',
        paddingBottom: 5,
    },
    status: {
        borderTopWidth: 1,
        fontWeight: 'bold',
        borderColor: 'lightblue',
        padding: 5,
    },
})

export default OrderItems