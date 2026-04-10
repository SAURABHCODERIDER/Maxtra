/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


// import Register from './components/Register';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Home from "./components/Home";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import store from './store/store';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName="";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Dashboard") {
            iconName = focused ? "speedometer" : "speedometer-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard}  />
    </Tab.Navigator>
  );
};
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Register'  screenOptions={{headerStyle:{backgroundColor:"rgb(60, 128, 200)"},headerTintColor:"white",headerTitleStyle: {
            fontWeight: 'bold',
          },}} >
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="MainApp" component={TabNavigation} options={{headerShown:false}}  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App;
