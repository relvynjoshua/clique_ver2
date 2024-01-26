import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, ScrollView } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import color from "../../assets/colors";
import { TextInput } from "react-native-paper";
import { getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase.js';

function LoginScreen({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState("");

  const showToast = (message = 'Something went wrong') => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleLogin = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail('');
        setPassword('');
        navigation.navigate('MainContainer');
      } catch (err) {
        console.log('got error', err.message);
        showToast('Login failed. Please check your credentials.');
      }
    }
  };

  return (
    <LinearGradient style={{ flex: 1 }} colors={[color.first, color.second]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>.Clique</Text>
            </View>
            <Text style={styles.head}>Log In</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder=''
                label='Email'
                value={email}
                onChangeText={setEmail}
                error={errors?.email}
              />
              <TextInput
                style={styles.input}
                placeholder=''
                label='Password'
                secureTextEntry={!showPass}
                right={
                  <TextInput.Icon
                    icon={!showPass ? "eye" : "eye-off"}
                    onPress={() => setShowPass(!showPass)}
                  />
                }
                value={password}
                onChangeText={setPassword}
                error={errors?.password}
              />
              <TouchableOpacity style={styles.button1} onPress={handleLogin}>
                <Text style={styles.btntext1}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Landing')}>
                <Text style={styles.btntext2}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    padding: 20,
    
  },
  head: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    textAlign: 'right',
    margin: 20,
  },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 25,
    },
    button1: {
        backgroundColor: '#00B8A9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 6,
    },
    button2: {
      backgroundColor: '#00B8A9',
      paddingVertical: 10,
    paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: '10%',
      marginLeft: 100,
      marginRight: 100,
      borderRadius: 6,
    },

    button3: {
      backgroundColor: '#00B8A9',
      paddingVertical: 10,
    paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 100,
      marginRight: 100,
      borderRadius: 6,
    },
    btntext1: {
        fontFamily: 'sans-serif',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    btntext2: {
        fontFamily: 'sans-serif',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '100%', // Make TextInput take full width
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderWidth: 3,
      borderColor: '#9BBEC8',
      borderRadius: 6,
      marginVertical: 8,
      fontFamily: 'sans-serif',
      fontSize: 20,
      backgroundColor: 'white',
    },
    logoContainer: {
      position: 'absolute',
      top: 50, 
      left: 5,
  },
  logoText: {
      fontSize: 30,
      color: 'black',
      fontFamily: 'sans-serif', 
  },
});

export default LoginScreen;