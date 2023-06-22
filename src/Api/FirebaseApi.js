import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';

const uploadFile = async (filePath, fileName) => {
  const ref = storage().ref(fileName);
  await ref.putFile(filePath);
};

export const AddProduct = async product => {
  const imageName = uuid.v4() + '.jpg';
  const imagePath = product.imageURL;
  await uploadFile(imagePath, imageName);
  const url = await storage().ref(imageName).getDownloadURL();
  product.imageURL = url;

  await database()
    .ref(`/products/${product.id}`)
    .set(product)
    .then(() => console.log('Data set.'));
};

export const fetchAllProducts = async () => {
  return await database()
    .ref('products')
    .once('value')
    .then(snapshot => {
      const data = snapshot.val();
      const products = [];
      Object.values(data).forEach(item => {
        products.push(item);
      });
      return products;
    })
    .catch(error => {
      console.log('Ürünleri çekerken bir hata oluştu:', error);
      return null;
    });
};

export const addFavorite = async (userID, productID) => {
  let currentFavorites = await fetchFavorites(userID);
  if (currentFavorites != null && !currentFavorites.includes(productID)) {
    await database()
      .ref(`/users/${userID}`)
      .set({favorites: [...currentFavorites, productID]});
  } else if (currentFavorites == null) {
    await database()
      .ref(`/users/${userID}`)
      .set({favorites: [productID]});
  }
};

export const fetchFavorites = async userID => {
  let favorites = [];

  await database()
    .ref(`/users/${userID}/favorites`)
    .once('value')
    .then(snapshot => {
      favorites = snapshot.val();
    });
  return favorites;
};

export const removeFavorite = async (userID,productID)=>{
  let currentFavorites = await fetchFavorites(userID);
  if (currentFavorites!=null) {
    if (currentFavorites.includes(productID)) {
      await database()
      .ref(`/users/${userID}`)
      .set({favorites: currentFavorites.filter((item)=>item!=productID) });
    }
  }
}
