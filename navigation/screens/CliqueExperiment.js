import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import color from "../../assets/colors";


const Clique = () => {
  return (
  <LinearGradient
        style={{flex: 1}} colors={[color.second, color.white]}>
    <View style={styles.container}>
      <Text style={styles.time}>9:41</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.groupName}>Wise Owls</Text>
        <Text style={styles.groupDesc}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.groupName}>Novel Navigators</Text>
        <Text style={styles.groupDesc}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.groupName}>Austere Aspirants</Text>
        <Text style={styles.groupDesc}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinText}>Join</Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  group: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  groupDesc: {
    fontSize: 16,
    color: '#666',
  },
  joinButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  joinText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Clique;
