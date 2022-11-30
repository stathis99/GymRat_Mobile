import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//android navigation bar 
import SystemNavigationBar from 'react-native-system-navigation-bar';


//colors
export const GlobalStyles = {
  colors: {
    primary50: '#e4d9fd',
    primary100: '#c6affc',
    primary200: '#a281f0',
    primary400: '#5721d4',
    primary500: '#3e04c3',
    primary700: '#2d0689',
    primary800: '#200364',
    accent500: '#f7bc0c',
    error50: '#fcc4e4',
    error500: '#9b095c',
    gray500: '#39324a',
    gray700: '#221c30',
  },
};

//Screens 
import CkalCalculator from './screens/CkalCalculator';
import FoodScreen from './screens/FoodScreen';
import GymScreen from './screens/GymScreen';
import ProgressScreen from './screens/ProgressScreen'

//components
import IconButton from './components/UI/IconButton';


//navigators
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (

    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="settings-outline"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('CkalCalculator');
            }}
          />
        ),
      })}
    >

      <BottomTabs.Screen
        name="Food"
        component={FoodScreen}
        options={{
          title: 'Food',
          tabBarLabel: 'Food',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Gym"
        component={GymScreen}
        options={{
          title: 'Gym',
          tabBarLabel: 'Gym',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          title: 'Progress',
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics-outline" size={size} color={color} />
            
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}





export default function App() {
SystemNavigationBar.setNavigationColor('red');

  return (
    
    
    <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CkalCalculator"
              component={CkalCalculator}
              // options={{
              //   presentation: 'modal',
              // }}
            />

          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
