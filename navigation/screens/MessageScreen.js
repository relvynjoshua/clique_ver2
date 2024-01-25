import React from 'react';
import { Dimensions, View, Text, Button, StyleSheet, FlatList, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import color from "../../assets/colors";
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './styles/MessageStyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

const Messages = [
  {
    id: '1',
    userName: 'GENERAL CHAT',
    userImg: require('../../assets/genchat.png'),
    messageTime: ' 4 mins ago',
    messageText:
      'General Chat for Every Student! (Wala lagi SPY we promise)',
      screen: 'General Chat',
  },
  {
    id: '2',
    userName: 'SOFTWARE ENGINEERING',
    userImg: require('../../assets/softeng.png'),
    messageTime: ' 4 mins ago',
    messageText:
      'Software Engineering Chat: Where bugs are just unexpected features waiting to be discovered!',
      screen:'SE Chat',
  },
  {
    id: '3',
    userName: 'IOT',
    userImg: require('../../assets/iot.png'),
    messageTime: ' 4 mins ago',
    messageText:
      'IOT Chat: Because talking to your toaster is more exciting than you think!',
      screen:'IOT Chat',
  },
  {
    id: '4',
    userName: 'MOBILE PROGRAMMING',
    userImg: require('../../assets/mobprog.png'),
    messageTime: ' 4 mins ago',
    messageText:
      'Welcome to MobProg Chat! Where mobile apps are born, bugs are squished, and developers unite!',
      screen:'MobProg Chat',
  },
  {
    id: '5',
    userName: 'DATABASE 2',
    userImg: require('../../assets/database.png'),
    messageTime: ' 4 mins ago',
    messageText:
      'Because who doesnt love a good CQL query and a cup of coffee?',
      screen:'Database 2 Chat',
  },
 
];

const MessagesScreen = ({navigation}) => {
    return (
      <LinearGradient
        style={{flex: 1}} colors={[color.white, color.first]}>
          <StatusBar backgroundColor={color.third} barStyle={"dark-content"}/>
          <ScrollView>
          <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.header1}>
                  <Text style={styles.logo}>.Clique</Text>
                </View>
                <View style={styles.header2}>
                  <Text style={styles.name}>Chats</Text>
                </View>
              </View>

              <View style={styles.main}>
                <View style={styles.section1}>
                  <Container>
                  <FlatList
                    data={Messages}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => (
                      <Card onPress={() => navigation.navigate(item.screen, { userName: item.userName })}>
                        <UserInfo>
                          <UserImgWrapper>
                            <UserImg source={item.userImg} />
                          </UserImgWrapper>
                          <TextSection>
                            <UserInfoText>
                              <UserName>{item.userName}</UserName>
                              <PostTime>{item.messageTime}</PostTime>
                            </UserInfoText>
                            <MessageText>{item.messageText}</MessageText>
                          </TextSection>
                        </UserInfo>
                      </Card>
                    )}
                  />
                  </Container>
                </View>

                <View style={styles.section2}></View>
              </View>

              <View style={styles.footer}></View>
            </View>
          </ScrollView> 
      </LinearGradient>
    );
};

export default MessagesScreen;

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
      height: hp(70),
      backgroundColor: "transparent",
      justifyContent: 'center',
  },
  section2: {
      height: hp(10),
      backgroundColor: "transparent",
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
});