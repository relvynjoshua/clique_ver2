import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import color from "../../assets/colors";

function HomeScreen(props) {
    console.log(props);

    return (
        <LinearGradient
            style={{ flex: 1 }} colors={[color.second, color.white]}>

            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>.Clique</Text>
                </View>

                {/* Rest of the content */}
                <Text style={styles.head}>Hello There!</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Text style={styles.text}>Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>

                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Clique')}>
                    <Text style={styles.btntext}>
                        Start!
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        padding: 20,
        justifyContent: 'center', 
    },
    logoContainer: {
        position: 'absolute',
        top: 50, 
        left: 5,
    },
    logoText: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'sans-serif', 
    },
    head: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 45,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#00B8A9',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    btntext: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: '#DDF2FD',
        textAlign: 'center',
    },
});

export default HomeScreen;
