import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import styles from './GoogleSingIn.styles';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useAtom} from 'jotai';
import {ActiveUserAtom} from '../../store/Atoms';

const GoogleSingIngButton = () => {
  const [activeUser, setActiveUser] = useAtom(ActiveUserAtom);

  const onPress =async() => {
    console.log("a")
    try {
      GoogleSignin.configure({
        webClientId:
          '818797502320-edai7j39p7pbr1r7go116fo7k5p88gcq.apps.googleusercontent.com',
      });
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();
      setActiveUser(user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log("error1",error);
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../images/googleLogo.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Google ile giriş yap</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GoogleSingIngButton;
