import {View, Text, FlatList, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './SearchPage.style';
import ProductCard from '../../components/productCard/ProductCard';
import {fetchAllProducts} from '../../Api/FirebaseApi';
import {ActiveUserAtom} from '../../store/Atoms';
import {useAtomValue} from 'jotai';

const SearchPage = () => {
  const [products, setProducts] = useState(null);
  const [sText, setSText] = useState('');
  const activeUser = useAtomValue(ActiveUserAtom);

  const getProducts = async () => {
    let result = await fetchAllProducts();
    if (sText != '' && sText.length >= 3)
      {result = result.filter(item => {
        return item.name.toLowerCase().includes(sText.toLowerCase());
      });
      setProducts(result);}
    else 
      setProducts(null);
  };

  useEffect(() => {
    getProducts();
  }, [sText]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Arama</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={sText}
            onChangeText={setSText}
            placeholder="Ara..."
          />
        </View>
      </View>
      <View style={styles.productContainer}>
        {products  && 
          <FlatList
            data={products}
            renderItem={({item}) => (
              <ProductCard product={item} userID={activeUser.id} />
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        }
      </View>
    </View>
  );
};

export default SearchPage;
