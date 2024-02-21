import { View } from 'react-native'
import React from 'react'
import { productsData } from '../../../data/productsData'
import ProductsCard from './ProductsCard'

const Products = () => {
  return (
    <View>
      {productsData.map((p) => (
        <ProductsCard key={p._id} p={p} />
      ))}
    </View>
  )
}

export default Products