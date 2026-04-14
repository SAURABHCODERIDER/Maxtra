import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../slices/userSlice';
import {logOut} from "../authentication/logOut";
const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.user);

  const handleLogout = () => {
    logOut();
    dispatch(clearUser()); 
  // Alert.alert("Success", "Logged out successfully");
    navigation?.navigate("Register");
  };

  return (
    <View style={styles.container}>
     {user?.name&& <Text style={styles.text}>Name: {user?.name}</Text>}
      {user?.email&& <Text style={styles.text}>Email: {user?.email}</Text>}
      {user?.password&& <Text style={styles.text}>Password: {user?.password}</Text>}

      {user?.name && <Button title="Logout" onPress={handleLogout} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 22,
    color: '#333',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default Dashboard;