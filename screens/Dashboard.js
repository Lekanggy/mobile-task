import { View, Text , Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen'
import { SafeAreaView } from 'react-native-safe-area-context';
import Tab1 from '../assets/tab1.svg'
import { MsgIcon,Tab1Icon1, Tab1Icon2, Tab1Icon3, Tab1Icon4 } from '../icons';

const tabsItems = [
  {
    id: 1,
    Item: Tab1Icon1,
    name: "Home"
  },
  {
    id: 2,
    Item: Tab1Icon2,
    name: "Home1"
  },
  {
    id: 3,
    Item: Tab1Icon3,
    name: "Home2"
  },
  {
    id: 4,
    Item: MsgIcon,
    name: "Home3"
  },
  {
    id: 5,
    Item: Tab1Icon4,
    name: "Home4"
  },
]

const Tab = createBottomTabNavigator();
const Dashboard = () => {
  return (
   
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
          elevation: 5,
          height: 120,
          position: 'relative',
          //bottom: 10,
        },
      }}
    
      >
        {
          tabsItems.map(d=>{
            const Icon = d?.Item
            return(
              <Tab.Screen 
              name={d.name} 
              key={d.id}
              component={HomeScreen}
              options={{
                tabBarIcon:({focused})=>(
                  <View 
                    className={`rounded-full ${focused && 'bg-[#047CFF]'} 
                    h-12 w-12 items-center justify-center`}
                 >
                    <Icon color={focused && "#fff"}/>
                  </View>
                ),
              }}
            />
            )
          })
        }

        <Tab.Screen 
          name="adf"
          component={HomeScreen}
          options={{
            tabBarIcon:({focused})=>(
              <View 
                className={`rounded-full ${focused && 'bg-[#047CFF]'} 
                h-12 w-12 items-center justify-center`}
              >
                <Icon color={focused && "#fff"}/>
              </View>
            ),
            tabBarButton:()=> <View className="w-[154px] rounded-[100px] h-[5px] bg-[#000] absolute bottom-[12] right-[140px] mt-7"/>,
          }}
          
      
        />
    
    </Tab.Navigator>
   
   
  )
}

export default Dashboard