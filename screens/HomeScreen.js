import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Camera from '../assets/camera.svg'
import Profile from '../assets/profile.svg'
import People from '../assets/people.svg'
import Shield from '../assets/shield.svg'
import Arrow from '../assets/arrow-right.svg'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <View className="relative items-center justify-center pt-8">
          <Image source={
           require("../assets/dashuser.png")
          }
            className="h-28 w-28"
          />
          <View className="h-10 w-10 rounded-full absolute bg-[#047CFF] items-center justify-center right-[145px] bottom-[60px]">
            <Camera width={20} height={20} className="h-full w-full"/>
          </View>
          <Text className="text-[#333] text-lg font-medium pt-4">Miriam de Jesús</Text>
          <Text className="text-[#B3B3B3] text-sm">h.mariano@gmail.com</Text>
        </View>
        <View className="px-2 space-y-5 pt-14">
         <TouchableOpacity className="flex-row items-center p-3 space-x-3 bg-white rounded-lg border-[#E5E5E5] border border-solid">
          <Profile width={28} height={28}/>
          <Text className="flex-1">Account information</Text>
          <Arrow width={24} height={24}/>
         </TouchableOpacity>
         <TouchableOpacity className="flex-row items-center p-3 space-x-3 bg-white rounded-lg border-[#E5E5E5] border border-solid">
          <Shield width={28} height={28}/>
          <Text className="flex-1">Google Business Profile</Text>
          <Arrow width={24} height={24}/>
         </TouchableOpacity>
         <TouchableOpacity className="flex-row items-center p-3 space-x-3 bg-white rounded-lg border-[#E5E5E5] border border-solid">
          <People width={28} height={28}/>
          <Text className="flex-1">Team members</Text>
          <Arrow width={24} height={24}/>
         </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen