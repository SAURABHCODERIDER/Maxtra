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
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { loginUser } from '../authentication/loginUser';
// import auth from '@react-native-firebase/auth';
// import { useFocusEffect } from '@react-navigation/native';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const user = useSelector(state => state?.user);
  /* useFocusEffect(
    useCallback(() => {
      if (user.email && user.password) {
        navigation.navigate('MainApp');
      }
    }, [user]),
  ); */
  const handleLogin = () => {
    let valid = true;
    if (!email) {
      setEmail(true);
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsEmailValid(true);
      valid = false;
    } else {
      setEmail(false);
    }
    if (!password) {
      setIsPasswordValid(true);
      valid = false;
    } else if (!password?.length >= 8) {
      setIsPasswordValid(true);
      valid = false;
    } else {
      setIsEmailValid(false);
    }
    if (!valid) return;
    if (!email || !password) {
      Alert.alert('Error', 'Each fields must be enter');
      return;
    }
    if (email === user?.email && password === user?.password) {
      loginUser(email, password);
      navigation.navigate('MainApp');
    } else {
      Alert.alert('Error', 'Invalid Email or Password');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 16,
        padding: 16,
      }}
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
        {isEmailValid && (
          <Text style={{ color: 'red' }}>
            Please enter a valid email address.
          </Text>
        )}

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        {isPasswordValid && (
          <Text style={{ color: 'red' }}>
            Password must be at least 8 characters long.
          </Text>
        )}

        <Button title="Login" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'hsla(195, 50%, 42%, 0.86)',
    width: '100%',
    gap: 20,
    borderRadius: 8,
    borderColor: '#73b3c2',
    borderWidth: 8,
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
    color: 'white',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default Login;
