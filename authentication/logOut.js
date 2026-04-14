import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const logOut  = async () => {
    try {
        await auth()?.signOut();
        Alert.alert("Success","User logged out successfully");
    } catch (error) {
        Alert.alert("Error","Error logging out user:", error);
        throw error;
    }
}