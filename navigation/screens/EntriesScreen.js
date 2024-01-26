import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid,  } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import color from "../../assets/colors.js";
import { TextInput } from "react-native-paper";
import fetchServices from '../../services/fetchServices.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.js';
import { useState } from "react";
import firestore from '@react-native-firebase/firestore';

function EntriesScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const SubmitPost = async ()=>{
      
    }
    return (
        <LinearGradient
        style={{flex: 1}} colors={[color.second, color.white]}>
            <View style={styles.container}>
                <Text style={styles.head}>Be Clique!</Text>
                <Text style={styles.text}>Post Your Group as a Clique!</Text>
                
            
            <TextInput
            style={styles.input}
            placeholder=''
            label='Group Name'
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Group Description'
            value={email}
            onChangeText={value=> setEmail(value)}
        
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Schedule'
            value={password}
            onChangeText={value=> setPassword(value)}
 
            
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Group-Link'
            value={repassword}
            onChangeText={value=> setRepassword(value)}
 
            
            />

            <TouchableOpacity style={styles.button1} /*onPress={handleSubmit}*/ >
                <Text style={styles.btntext1}>
                    Add
                </Text>
            </TouchableOpacity>

           
            
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        padding: 20,
        marginTop: 100,
    },
    head: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        margin: 20,
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        margin: 10,
    },
    button1: {
        backgroundColor: '#00B8A9',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 100,
        marginRight: 100,
    },
    btntext1: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    input: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderWidth: 3, 
        borderColor: '#9BBEC8', 
        borderRadius: 6,
        margin: 8,
        fontFamily: 'sans-serif',
        fontSize: 20, 
        backgroundColor: 'white',
    }
});

export default EntriesScreen;