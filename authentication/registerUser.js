import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

export const registerUser = async(email, password,name) => {
    try{
        const userCredential = await auth()?.createUserWithEmailAndPassword(email,password)
        await userCredential?.user?.updateProfile({displayName:name})
        return userCredential;
    }catch(error){
        Alert.alert("Error","Failed to register user",error)
        throw error;
    }
}