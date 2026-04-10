import { View, Text, StyleSheet,Button } from 'react-native';
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Home Screen!</Text>
            <Button title="Go to Register" onPress={()=>navigation.navigate('Login')} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(62, 71, 101)',
    },
    text: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
});
export default Home;