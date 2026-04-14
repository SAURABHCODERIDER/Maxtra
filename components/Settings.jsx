import {View, Text, StyleSheet} from 'react-native';
const Settings = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is the Settings Screen</Text>
        </View> 
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold',
    },
});
export default Settings;
