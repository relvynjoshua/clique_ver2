import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import color from "../../assets/colors";

function LandingScreen(props) {
    console.log(props);

    return (
        <LinearGradient
        style={{flex: 1}} colors={[color.second, color.white]}>

        <View style={styles.container}>
            <Text style={styles.head}>.Clique</Text>
            <Text style={styles.text}>we keep it simple  -  “with just a clique” </Text>
            

            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.btntext}>
                    Log In
                </Text>
            </TouchableOpacity>
                      
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Signup')}>
                <Text style={styles.btntext}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        padding: 20,
        marginTop: 20,
    },
    head: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 80,
        color: 'black',
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 40,
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 80,
    },
    button: {
        backgroundColor: '#00B8A9',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 10,
        marginLeft: 50,
        marginRight: 50,
    },
    btntext: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: '#DDF2FD',
        textAlign: 'center'
    }
});

export default LandingScreen;