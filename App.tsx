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
import  Settings  from './components/Settings';
import Cart from './components/Cart';
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
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }else if(route.name==="Cart"){
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgb(9, 68, 105)",
        headerStyle:{
          backgroundColor:"#7cb8b1",
        },
        headerTitleStyle:{
          color:"#f2f2f2",
          fontWeight:"bold",
        },
        tabBarActiveBackgroundColor:"hsla(195, 50%, 42%, 0.86)",
        // tabBarInactiveBackgroundColor:"hsla(195, 50%, 42%, 0.86)",
        /* tabBarStyle:{
          borderRadius: 8,
          borderColor:"#73b3c2",
          elevation: 5,
          paddingBottom: 5,
          paddingTop: 5,
        } */
      })}
    >
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Dashboard" component={Dashboard}  />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Register'  screenOptions={{headerStyle:{backgroundColor:"#7cb8b1"},headerTintColor:"#f2f2f2",headerTitleStyle: {
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
