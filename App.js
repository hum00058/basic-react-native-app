import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './pages/Home'
import Details from './pages/Details'
import List from './pages/List'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#2f2f2e' },
            headerTintColor: 'white'
          }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerStyle: { backgroundColor: '#2f2f2e' },
              headerTintColor: 'white'
            }}
          />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
