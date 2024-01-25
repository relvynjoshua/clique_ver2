import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import color from "../../assets/colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

function HomeScreen(props) {
    console.log(props);

    return (
        <LinearGradient
            style={{ flex: 1 }} colors={[color.first, color.white]}>
            <StatusBar backgroundColor={color.white} barStyle={"dark-content"}/>

            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header1}>
                        <Text style={styles.logo}>.Clique</Text>
                    </View>
                    <View style={styles.header2}>
                        <Text style={styles.name}>Home</Text>
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={styles.section1}>
                        {/* Rest of the content */}
                        <Text style={styles.head}>Hello There!</Text>
                        <Text style={styles.text}>Welcome to CLIQUE! Your friend in making friends!</Text>
                        <Text style={styles.text}>Discover circles, share ideas, meet in real life, 
                        and really 'clique' with them!</Text>
                    </View>
                    <View style={styles.section2}>
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Clique')}>
                            <Text style={styles.btntext}>
                                Start!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}></View>        
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    /* Container and Sections */
    container: {
        height: hp(100),
        backgroundColor: 'transparent',
        justifyContent: 'center', 
    },
    header: {
        height: hp(10),
        display: 'flex',
        flexDirection: 'row',
    },
    header1: {
        width: wp(50),
        backgroundColor: color.white,
        justifyContent: 'center',

    },
    header2: {
        width: wp(50),
        backgroundColor: color.white,
        justifyContent: 'center',

    },
    main: {
        height: hp(80),
        backgroundColor: 'transparent',
    },
    section1: {
        height: hp(50),
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    section2: {
        height: hp(30),
        backgroundColor: 'transparent',
    },
    footer: {
        height: hp(10),
        backgroundColor: 'transparent',
    },

    /* Header */
    logo: {
        fontSize: hp(3.4),
        color: color.first,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: hp(2),
    }, 
    name: {
        fontSize: hp(3.4),
        color: color.black,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: hp(2),
    }, 
    head: {
        fontSize: hp(4),
        color: color.black,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: hp(2),
    },

    /* Body */
    text: {
        fontSize: hp(2),
        color: 'black',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        margin: hp(2),
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
        color: color.black,
        textAlign: 'center'
    },
});

export default HomeScreen;
