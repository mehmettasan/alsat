import {View, Text,FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './HomePage.style';
import ProductCard from '../../components/productCard/ProductCard';
import {fetchAllProducts} from "../../Api/FirebaseApi"
import { ActiveUserAtom } from '../../store/Atoms';
import { useAtomValue } from 'jotai';

const HomePage = () => {
  const [products,setProducts]=useState(null)
  const [refresh,setRefresh]=useState(false)
  const activeUser = useAtomValue(ActiveUserAtom)

  const getProducts= async()=>{
    const result =await fetchAllProducts()
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
          <Text style={styles.title_e}>ALSAT</Text>'ı Keşfet
        </Text>
      </View>
      <View style={styles.productContainer}>
      <FlatList
      data={products}
      renderItem={({item})=><ProductCard product={item} userID={activeUser.id}/>}
      numColumns={2}
      keyExtractor={(item, index) => index }
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshing={refresh}
      onRefresh={handleRefresh}
      />
      </View>
    </View>
  );
};

export default HomePage;
