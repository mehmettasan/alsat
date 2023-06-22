import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import styles from './AddPage.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import { AddProduct } from '../../Api/FirebaseApi';
import Uuid from "react-native-uuid"
import { useAtomValue } from 'jotai';
import { ActiveUserAtom } from '../../store/Atoms';

const AddPage = () => {
  const [image, setImage] = useState(null);
  const [productName,setProductName]=useState("")
  const [productDesc,setProductDesc]=useState("")
  const [productPrice,setProductPrice]=useState("")
  const user = useAtomValue(ActiveUserAtom)
  const [error,setError]=useState(false)

  const selectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    console.log(result.assets[0]);
    setImage(result.assets[0]);
  };

  const CreateProduct=async()=>{
    if (image==null || productName == "" || productDesc == "" || productPrice=="") {
      setError(true)
      return;
    }
    const product={
        id:Uuid.v4(),
        name:productName,
        desc:productDesc,
        price:productPrice,
        imageURL:image?.uri,
        userID:user.id,
        userName:user.name,
        UserProfile:user.photo,
        date:Date.now()
    }
    try{
        await AddProduct(product)
        setProductName("")
        setProductDesc("")
        setProductPrice("")
        setImage(null)
        setError(false)
    }catch(err){
        console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ÜRÜN EKLE</Text>
      <View style={styles.content}>
        <TextInput
          style={styles.textInput}
          placeholder="Ürün Adı"
          maxLength={50}
          value={productName}
          onChangeText={setProductName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Fiyatı"
          maxLength={50}
          value={productPrice}
          onChangeText={setProductPrice}
        />
        <TextInput
          style={styles.textInputMulti}
          placeholder="Ürün Açıklaması"
          maxLength={50}
          multiline={true}
          numberOfLines={4}
          value={productDesc}
          onChangeText={setProductDesc}
        />
        <View style={{width: '100%', paddingHorizontal: '2.5%', marginTop: 10}}>
          <TouchableOpacity style={styles.imageContainer} onPress={selectImage}>
            {image ? (
              <ImageBackground
                source={{uri: image?.uri}}
                style={styles.imageBackground}
                resizeMode='contain'
              />
            ) : (
              <Icon name={'camera'} size={50} color={'white'} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', paddingHorizontal: '2.5%', marginTop: 10}}>
            <TouchableOpacity style={styles.button} onPress={CreateProduct}>
                <Text style={styles.buttonTitle}>Kaydet</Text>
            </TouchableOpacity>
        </View>
      </View>
     {error && <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Hata: Lütfen bütün alanları doldurun !!!</Text>
      </View>}
    </View>
  );
};

export default AddPage;
