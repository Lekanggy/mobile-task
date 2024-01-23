import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  Text, View } from 'react-native';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name='Login' component={Login}
          options={{
            headerShown: false
          }}
          init
        />
         <Stack.Screen 
          name='Registration' component={Registration}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen 
          name='Dashboard' component={Dashboard}
          options={{
            headerShown: false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

