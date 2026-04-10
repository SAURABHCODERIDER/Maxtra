import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../slices/userSlice';

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(clearUser()); 

    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Password: {user.password}</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(62, 71, 101)',
    padding: 20,
  },
  text: {
    fontSize: 22,
    color: 'white',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default Dashboard;