import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { cartData } from '../../data/cartData'
import PriceTable from '../components/Cart/PriceTable'
import Cartitems from '../components/Cart/Cartitems'

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(cartData)
  return (
    <Layout>
      <View>
        <Text style={styles.heading}>
          {cartItems?.length > 0
          ? `You Have ${cartItems?.length} Items Left In Your Cart`
          : "OOPs Your Cart Is EMPTY !"}
        </Text>
        {cartItems?.length > 0 && (
          <>
          <ScrollView>
            {
              cartItems?.map((item) => (
                <Cartitems item={item} key={item._id}/>
              ))
            }
          </ScrollView>
          <View>
            <PriceTable title={"Price"} price={83999} />
            <PriceTable title={"Tax"} price={6.25} />
            <PriceTable title={"Shipping"} price={12.75} />
          </View>
          <View style={styles.grandTotal}>
            <PriceTable title={"Grand Total"} price={84018} />
          </View>
          <TouchableOpacity 
            style={styles.btnCheckout}
            onPress={() => navigation.navigate("checkout")}
          >
            <Text style={styles.btnCheckoutText}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
          </>
        )}
      </View>
    </Layout>
    
  )
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10
  },
  grandTotal: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: 'lightblue',
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 20,
    width: '90%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  btnCheckoutText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold"
  }
})

export default Cart