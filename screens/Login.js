import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
//import CheckBox from '@react-native-community/checkbox';
import Checkbox from 'expo-checkbox';
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../assets/Logo.svg'
import Msg from '../assets/sms.svg'
import Facebook from '../assets/Facebook.svg'
import Apple from '../assets/Apple - Negative.svg'
import Google from '../assets/Google.svg'
import Lock from '../assets/lock.svg'
import User from '../assets/user.svg'
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation()

  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="relative flex-1">
          <View className="justify-center items-center my-10 space-y-3">
              <Logo width={74} height={74} />
              <Text className="text-3xl text-regal-blue font-bold">Sign In</Text>
              <Text className="text-gray-400 text-sm font-normal">
                  You don’t have account let’s create account
              </Text>
          </View>
          <View className="space-y-4">
            <View>
                <View className="flex-row items-center bg-[#F8F8F8] rounded-xl p-4 mx-3 space-x-3">
                    <Msg/>
                    <TextInput placeholder='username' className="flex-1 h-58 w-100"/>
                </View>
                <Text className="text-red-500 text-sm px-4">wrong password</Text>
            </View>
            <View>
                <View className="flex-row items-center bg-[#F8F8F8] rounded-xl p-4 mx-3 space-x-3">
                    <Lock/>
                    <TextInput placeholder='username' className="flex-1 h-58 w-100 "/>
                </View>
                <Text className="text-red-500 text-xs px-4">wrong password</Text>
            </View>
            <View className="flex-row px-4 items-center">
              <View className="flex-row flex-1 space-x-2 items-center">
                <Checkbox 
                  className={`h-6 w-6 bg-[#047CFF] border-[#047CFF] border-0 rounded-md`}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#047CFF' : undefined}
                />
                <Text className="text-xs font-normal">Remember me</Text>
              </View>
              <Text className='text-regal-blue text-xs font-medium'>Forgot password</Text>
            </View>
            
            <View className="items-center justify-center pt-6 space-y-10">
              <View className="flex-row space-x-12">
                <Facebook width={50} height={50} />
                <Apple width={50} height={50} />
                <Google width={50} height={50} />
              </View>
              <Text className="text-regal-blue text-xs font-normal">or</Text>
              <Pressable>
                <Text clossName="text-sm text-[#8083A3] font-medium">
                  Don't have an account? <Text className="text-regal-blue" onPress={()=>navigation.navigate("Registration")}>Sign Up</Text>
                </Text>
              </Pressable>
            </View>
        </View>
        <View className="items-center justify-center space-y-5  absolute bottom-3 left-5">
          <TouchableOpacity className="p-4 bg-[#047CFF] rounded-[60px] w-[370px]">
              <Text className="text-white font-medium text-base text-center">Proceed</Text>
          </TouchableOpacity>
          <View className="w-[134px] rounded-[100px] h-[5px] bg-[#000]"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login
