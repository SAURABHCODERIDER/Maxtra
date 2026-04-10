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
//   const setUser =
  const handleRegister = () => {
     let valid =true;
    const user = { name, email, password };
    if(!name){
      setIsNameValid(true)
        valid=false
    }else if(name.length<3){
        setIsNameValid(true)
        valid=false
    }
    if(!email){
      setIsEmailValid(true)
      valid=false
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        setIsEmailValid(true)
        valid=false
    }
    if(!password){
      setIsPasswordValid(true)
      valid=false
    }else if(!password.length>=8){
         setIsPasswordValid(true)
        valid=false
    }
    if(!valid) return;
    if(!name || !email || !password){
        Alert.alert("Error","Each fields must be enter")
        return
    }
    Alert.alert(
      'Success',
      `Welcome ${name} (${email}) and ${password}! Your registration was successful.`
    );
    dispatch(setUser(user));
    navigation.navigate('Login');
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1,backgroundColor: 'rgb(62, 71, 101)', }}
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
    flex: 1,
    justifyContent: 'center',
    padding: 20,

  },
  input: {
    fontSize: 18,
    color: 'white',
    padding: 10,
    marginVertical: 10,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 18,
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    width: '90%',
  },
});
export default Register;
