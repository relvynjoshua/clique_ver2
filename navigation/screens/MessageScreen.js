import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
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


const Messages = [
  {
    id: '1',
    userName: 'GENERAL CHAT',
    userImg: require('../../assets/icon.png'),
    messageTime: '4 mins ago',
    messageText:
      'General Chat for Every Student! (Wala lagi SPY we promise)',
      screen: 'General Chat',
  },
  {
    id: '2',
    userName: 'SOFTWARE ENGINEERING',
    userImg: require('../../assets/icon.png'),
    messageTime: '4 mins ago',
    messageText:
      'Software Engineering Chat: Where bugs are just unexpected features waiting to be discovered!',
      screen:'SE Chat',
  },
  {
    id: '3',
    userName: 'IOT',
    userImg: require('../../assets/icon.png'),
    messageTime: '4 mins ago',
    messageText:
      'IOT Chat: Because talking to your toaster is more exciting than you think!',
      screen:'IOT Chat',
  },
  {
    id: '4',
    userName: 'MOBILE PROGRAMMING',
    userImg: require('../../assets/icon.png'),
    messageTime: '4 mins ago',
    messageText:
      'Welcome to MobProg Chat! Where mobile apps are born, bugs are squished, and developers unite!',
      screen:'MobProg Chat',
  },
  {
    id: '5',
    userName: 'DATABASE 2',
    userImg: require('../../assets/icon.png'),
    messageTime: '4 mins ago',
    messageText:
      ' Because who doesnt love a good CQL query and a cup of coffee?',
      screen:'Database 2 Chat',
  },
 
];

const MessagesScreen = ({navigation}) => {
    return (
      <LinearGradient
        style={{flex: 1}} colors={[color.second, color.white]}>
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
      </LinearGradient>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  
});