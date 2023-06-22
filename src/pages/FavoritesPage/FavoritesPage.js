import {View, Text,FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './FavoritesPage.style';
import ProductCard from '../../components/productCard/ProductCard';
import {fetchAllProducts,fetchFavorites} from "../../Api/FirebaseApi"
import { ActiveUserAtom } from '../../store/Atoms';
import { useAtomValue } from 'jotai';

const FavoritesPage = () => {
    const [products,setProducts]=useState(null)
    const [refresh,setRefresh]=useState(false)
    const activeUser = useAtomValue(ActiveUserAtom)

    const getProducts= async()=>{
        let result =await fetchAllProducts()
        const favorites = await fetchFavorites(activeUser.id)
        result = result.filter((item)=>favorites.includes(item.id))
        setProducts(result)
      }
      
      useEffect(()=>{
        getProducts()
      },[])
    
      const handleRefresh=()=>{
        getProducts()
      }

  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Favoriler
        </Text>
      </View>
      <View style={styles.productContainer}>
      <FlatList
      data={products}
      renderItem={({item})=><ProductCard product={item} userID={activeUser.id} />}
      numColumns={2}
      keyExtractor={(item, index) => index }
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshing={refresh}
      onRefresh={handleRefresh}
      />
      </View>
    </View>
  )
}

export default FavoritesPage