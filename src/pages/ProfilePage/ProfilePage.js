import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./ProfilePage.style"
import { useAtom } from 'jotai'
import { ActiveUserAtom } from '../../store/Atoms'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const ProfilePage = () => {
  const [user,setUser]=useAtom(ActiveUserAtom)

  const exit = async()=>{
    GoogleSignin.signOut()
    setUser(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
          <Image style={styles.imageContainer} source={{uri:user?.photo}} />
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{user?.name}</Text>
        </View>
      </View>
      <View style={styles.buttomContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={exit}>
          <Text style={styles.buttonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfilePage