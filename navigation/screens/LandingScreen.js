import { Button, Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from "../../assets/colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

function LandingScreen(props) {
    console.log(props);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={color.first} barStyle={"light-content"}/>
            <View style={styles.header}></View>

            <View style={styles.main}>
                <View style={styles.section1}>
                    <Text style={styles.head}>.Clique</Text>
                    <Text style={styles.text}>We keep it simple - 'JUST A CLIQUE'</Text>
                </View>

                <View style={styles.section2}>
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
            </View>

            <View style={styles.footer}>

            </View>            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: hp(100),
    },
    header: {
        height: hp(10),
        backgroundColor: color.first,
    },
    main: {
        height: hp(80),
        display: 'flex',
        backgroundColor: color.white,
    },
    section1: {
        height: hp(50),
        backgroundColor: color.first,
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    section2: {
        height: hp(30),
        backgroundColor: color.white,
        justifyContent: 'center',
    },
    footer: {
        height: hp(10),
        backgroundColor: color.white,
    },
    head: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: hp(5.4),
        color: color.black,
        textAlign: 'center',
        margin: 5,
    },
    text: {
        fontFamily: 'sans-serif',
        fontWeight: '500',
        fontSize: hp(2.4),
        color: color.black,
        textAlign: 'center',
        margin: 5,
    },
    button: {
        backgroundColor: color.first,
        borderRadius: 50,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: hp(1.6),
        marginLeft: 90,
        marginRight: 90,
    },
    btntext: {
        fontFamily: 'sans-serif',
        fontSize: hp(2.6),
        fontWeight: 'bold',
        color: color.white,
        textAlign: 'center'
    }
});

export default LandingScreen;