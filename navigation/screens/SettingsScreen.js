import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from'expo-linear-gradient';
import color from '../../assets/colors';
import { auth, database } from '../../config/firebase.js';
import { doc, getDoc, firestore, collection} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


function ProfileScreen(props) {
  const [name, setName] = useState(null);
  
  

  useEffect(() => {
    const fetchUserData = async () => {
      const usersCollection = collection(database, "users");
      console.log('Auth UID:', auth.currentUser.uid);
      const currentUserDoc = doc(usersCollection, auth.currentUser.uid);
    
      try {
        const snapshot = await getDoc(currentUserDoc);
        console.log('User Document Snapshot:', snapshot);
  
        if (snapshot.exists()) {
          const userData = snapshot.data();
          console.log('User Data:', userData);
  
          if (userData && userData.hasOwnProperty('name')) {
            const userName = userData.name;
            setName(userName);
          } else {
            console.log('User document does not contain a "name" field:', userData);
          }
        } else {
          console.log('User data not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);
  
  
  
  
  

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('User signed out successfully');
      props.navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <LinearGradient style={{ flex: 1 }} colors={[color.second, color.white]}>
      <View style={styles.container}>
         <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>.Clique</Text>
                </View>
        <Text style={styles.head}>Hello {name ? name : 'user'}! </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={styles.text}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>


        
<TouchableOpacity
 
style={styles.button} onPress={handleLogout}>
          <Text style={styles.btntext}>Log Out</Text>
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
    backgroundColor: '#164863',
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
export default ProfileScreen;