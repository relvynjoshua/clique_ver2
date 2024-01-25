import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ToastAndroid, StatusBar } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import color from "../../assets/colors.js";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

function EntriesScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const SubmitPost = async ()=>{  
    }
    return (
        <LinearGradient
        style={{flex: 1}} colors={[color.first, color.white]}>
            <StatusBar backgroundColor={color.white} barStyle={"dark-content"}/>

            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header1}>
                        <Text style={styles.logo}>.Clique</Text>
                    </View>
                    <View style={styles.header2}>
                        <Text style={styles.name}>Add Group</Text>
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={styles.section1}>
                        <Text style={styles.head}>Be Clique!</Text>
                        <Text style={styles.text}>Post Your Group as a Clique!</Text>
                    </View>
                    <View style={styles.section2}>
                        <TextInput
                        style={styles.input}
                        placeholder=''
                        label='Group Name'
                        underlineColor='transparent'
                        />
                        <TextInput
                        style={styles.input}
                        placeholder=''
                        label='Group Description'
                        underlineColor='transparent'
                        value={email}
                        onChangeText={value=> setEmail(value)}
                        />
                        <TextInput
                        style={styles.input}
                        placeholder=''
                        label='Schedule'
                        underlineColor='transparent'
                        value={password}
                        onChangeText={value=> setPassword(value)}
                        />
                        <TextInput
                        style={styles.input}
                        placeholder=''
                        label='Group-Link'
                        underlineColor='transparent'
                        value={repassword}
                        onChangeText={value=> setRepassword(value)}
                        />

                        <TouchableOpacity style={styles.button1} /*onPress={handleSubmit}*/ >
                            <Text style={styles.btntext1}>
                                Add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}></View>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    /* Container and Sections */
    container: {
        height: hp(100),
        backgroundColor: 'transparent',
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
        height: hp(20),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    section2: {
        height: hp(60),
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
    text: {
        fontFamily: 'sans-serif',
        fontSize: hp(2),
        color: color.black,
        textAlign: 'center',
        margin: 10,
    },

    /* Body */
    input: {
        fontFamily: 'sans-serif',
        fontSize: hp(2.2), 
        paddingVertical: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 3,
        borderColor: color.grey,
        backgroundColor: color.fifth,
        margin: 10,
        marginLeft: hp(2),
        marginRight: hp(2),
    },
    button1: {
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
    btntext1: {
        fontFamily: 'sans-serif',
        fontSize: hp(2.6),
        fontWeight: 'bold',
        color: color.black,
        textAlign: 'center'
    },
});

export default EntriesScreen;