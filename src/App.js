import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './App.styles';
import GoogleSingIngButton from './components/GoogleSingInButton/GoogleSingIngButton';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={"#FF512F"} />
      <LinearGradient colors={['#FF512F', '#DD2476']} style={styles.container}>
        <Text style={styles.title}>ALSAT</Text>
        <GoogleSingIngButton/>
      </LinearGradient>
    </View>
  );
};

export default App;
