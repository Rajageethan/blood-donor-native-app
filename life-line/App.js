
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './app/Screens/Signup';
import  GetStarted from './app/Screens/GetStarted';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted'>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
