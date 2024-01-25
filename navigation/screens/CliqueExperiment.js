import React from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import color from "../../assets/colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

const Clique = () => {
  return (
  <LinearGradient
        style={{flex: 1}} colors={[color.second, color.white]}>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.header1}>
                <Text style={styles.logo}>.Clique</Text>
              </View>
              <View style={styles.header2}>
                <Text style={styles.name}>Groups</Text>
              </View>
            </View>

            <View style={styles.main}>
              <View style={styles.section1}>
                <Text style={styles.time}>9:41</Text>
              </View>

              <View style={styles.section2}>
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
              </View>

              <View style={styles.section3}>
                <TouchableOpacity style={styles.button1}>
                  <Text style={styles.btntext1}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footer}></View>      
    </View>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: color.white,
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
      backgroundColor: color.white,
      gap: hp(0.4),
  },
  section1: {
      height: hp(10),
      backgroundColor: color.third,
      justifyContent: 'center',
      alignItems: 'center',
  },
  section2: {
      height: hp(60),
      backgroundColor: color.third,
      justifyContent: 'center',
      alignItems: 'center',
  },
  section3: {
    height: hp(10),
    backgroundColor: color.third,
},
  footer: {
      height: hp(10),
      backgroundColor: color.white,
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

  /* Body */
  time: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: color.black,
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
  group: {
    backgroundColor: color.first,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  groupName: {
    fontSize: hp(2.6),
    fontWeight: 'bold',
    marginBottom: 5,
    color: color.black,
  },
  groupDesc: {
    fontSize: hp(1.8),
    color: color.black,
  },
});

export default Clique;
