import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  
  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    let valid = true;
    if (!email) {
        setEmail(true)
        valid = false;
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        setIsEmailValid(true)
        valid=false
    }
    else{
        setEmail(false)
    }
    if(!password){
      setIsEmailValid(true)
      valid=false
    }else if(!password.length>=8){
         setIsPasswordValid(true)
        valid=false
    }else{
        setIsEmailValid(false)
    }
    if(!valid) return;
    if(!email || !password){
        Alert.alert("Error","Each fields must be enter")
        return
    }
    if (email === user.email && password === user.password) {
      Alert.alert("Success", "Login Successful");

      navigation.navigate("MainApp"); // ✅ Home/Dashboard
    } else {
      Alert.alert("Error", "Invalid Email or Password");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'rgb(62, 71, 101)' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        {isEmailValid && <Text style={{ color: 'red' }}>Please enter a valid email address.</Text>  }

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        {isPasswordValid && <Text style={{ color: 'red' }}>Password must be at least 8 characters long.</Text>  }

        <Button title="Login" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
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
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default Login;