import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {registerUser} from "../authentication/registerUser";
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);    
  const dispatch= useDispatch();

  const handleRegister = () => {
  let valid = true;

  const user = { name, email, password };

  // 🔹 Reset validation
  setIsNameValid(false);
  setIsEmailValid(false);
  setIsPasswordValid(false);

  // 🔹 Name Validation
  if (!name || name?.length < 3) {
    setIsNameValid(true);
    valid = false;
  }

  // 🔹 Email Validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setIsEmailValid(true);
    valid = false;
  }

  // 🔹 Password Validation
  if (!password || password?.length < 8) {
    setIsPasswordValid(true);
    valid = false;
  }

  // ❌ Stop if invalid
  if (!valid) {
    Alert.alert("Error", "Please enter valid details");
    return;
  }

  // ✅ Success Alert
  
  // 🔥 Firebase Register
  registerUser(email, password, name);
  
  // Alert.alert(
  //   "Success",
  //   `Welcome ${name} (${email})! Registration successful`
  // );
  // 🔹 Redux store
  dispatch(setUser(user));

  // 🔹 Navigate
  navigation.navigate("Login");
};
 
  return (
    <KeyboardAvoidingView
      style={{ flex: 1,alignItems:'center',justifyContent:"flex-start",margin: 16,padding: 16 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        {isNameValid && <Text style={{ color: 'red' }}>Name must be at least 3 characters long.</Text>  }
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {isEmailValid && <Text style={{ color: 'red' }}>Please enter a valid email address.</Text>  }
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {isPasswordValid && <Text style={{ color: 'red' }}>Password must be at least 8 characters long.</Text>  }
        <Button title="Register" onPress={handleRegister} style={styles.button} />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"hsla(195, 50%, 42%, 0.86)",
    width:'100%',
    gap: 20,
    borderRadius: 8,
    borderColor:"#73b3c2",
    borderWidth:8,
    elevation: 5,
  },
  input: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 8,
  },
  text: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'semi-bold',
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    width: '90%',
    borderRadius: 18,
  },
});
export default Register;
