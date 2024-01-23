import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Camera from '../assets/camera.svg'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <View>
          <Image source={
           require("../assets/dashuser.png")
          }
          className="h-20 w-20"ex 
          />
          <Camera width={20} height={20} className="h-20 w-20"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen