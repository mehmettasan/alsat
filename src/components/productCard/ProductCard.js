import {View, Text, Image, TouchableWithoutFeedback, Modal,TouchableOpacity,Linking} from 'react-native';
import React, {useState} from 'react';
import styles from './ProductCard.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addFavorite,removeFavorite } from '../../Api/FirebaseApi';
import { fetchFavorites } from '../../Api/FirebaseApi';


const ProductCard = ({product,userID}) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite,setIsFavorite]=useState(false)

  const openModal = async() => {
    const favorite = await fetchFavorites(userID)
    if (favorite!=null)
      favorite.includes(product.id) ? setIsFavorite(true) : null
    else
      setIsFavorite(false)
    setShowModal(true);
  };

  const closeModal=()=>{
    setShowModal(false)
  }

  const handleFavoritePress= async()=>{
    await addFavorite(userID,product.id)
    setShowModal("false")
  }

  const unFavorite= async()=>{
    await removeFavorite(userID,product.id)
    setIsFavorite(false)
    setShowModal(false)
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={openModal}>
        <View style={styles.container}>
          <Image
            source={{
              uri: product.imageURL,
            }}
            style={styles.image}
          />
          <View style={styles.buttomBar}>
            <Text style={styles.title}>{product.name}</Text>
          </View>
            <View style={styles.priceBar}>
              <Text style={styles.price}>{product.price}</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
        transparent={true}
        animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalTopBar}>
              <View style={styles.modalProfile}>
                <Image style={styles.modalPImage} source={{uri:product.UserProfile}} />
                <Text style={styles.modalPName}>{product.userName}</Text>
              </View>
              <View style={styles.closeButton}>
                <TouchableWithoutFeedback onPress={closeModal}>
                <Icon name={"close"} size={20} color={"black"} />
                </TouchableWithoutFeedback>
              </View>
            </View>
            <Image style={styles.modalImage} source={{uri:product.imageURL}} resizeMode='contain' />
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{product.name}</Text>
              <Text style={styles.modalDesc}>{product.desc}</Text>
            </View>
              <View style={styles.modalButtomBar}>
                <Text style={styles.modalPrice}>{product.price}</Text>
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity style={styles.favButton} onPress={isFavorite ? unFavorite : handleFavoritePress} >
                    <Text style={styles.mButtonText}>{isFavorite ? "Favorilerden Çıkar":"Favorilere Ekle"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buyButton} onPress={()=>{Linking.openURL("tel:123123123")}} >
                    <Text style={styles.mButtonText}>İletişime Geç</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProductCard;
