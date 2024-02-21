import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Checkout = () => {
  const handleCOD = () => {
    alert('Your Order Has Been Placed Successfully');
  };
  const handleOnline = () => {
    alert('You Are Redirecting To Payment Gateway');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Payment Options</Text>
        <Text style={styles.price}>Total Amount : 101$</Text>
        <View style={styles.paymentCard}>
          <Text style={styles.method}>Select Your Payment Method</Text>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
            <Text style={styles.paymentyBtnText}>Cash On Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
            <Text style={styles.paymentyBtnText}>
              Online (CREDIT | DEBIT CARD)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    fontSize: 24,
    marginBottom: 10,
    color: 'grey',
  },
  paymentCard: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  method: {
    fontSize: 15,
    fontWeight: '400',
    marginVertical: 10,
  },
  paymentBtn: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginVertical: 10,
    height: 40,
  },
  paymentyBtnText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default Checkout;
