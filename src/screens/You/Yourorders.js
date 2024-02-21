import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { ordersData } from '../../../data/ordersData'
import OrderItems from '../../components/Form/OrderItems'

const Yourorders = () => {
  return (
    <Layout>
    <View style={styles.container}>
      <Text style={styles.heading}>Your orders</Text>
      <ScrollView>
        {ordersData.map((order) => (
            <OrderItems key={order._id} order={order} />
        ))}
      </ScrollView>
    </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    heading: {
        textAlign: 'center',
        color: 'lightblue',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default Yourorders