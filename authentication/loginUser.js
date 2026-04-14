import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const loginUser = async(email,password)=>{
    try{
        const userCredential = await auth()?.signInWithEmailAndPassword(email,password)
        return userCredential;
    }catch(error){
        Alert.alert("Error","Failed to login user",error)
        throw error;}
}