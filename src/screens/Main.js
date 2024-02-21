import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'
import Categories from '../components/category/Categories'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
const Main = () => {
  return (
    <Layout>
      <Header/>
      <Categories />
      <Banner/>
      <Products/>
    </Layout>
  )
}

export default Main