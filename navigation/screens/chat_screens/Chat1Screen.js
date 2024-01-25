import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import {collection, addDoc,orderBy,query,onSnapshot} from 'firebase/firestore';
import {auth, database} from '../../../config/firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Chat1Screen = () => {
  const [messages, setMessages] = useState([]);

 useLayoutEffect (()=> {
    const collectionRef = collection(database, 'chat1');
    const q = query(collectionRef, orderBy('createdAt','desc'));

    const unsubscribe = onSnapshot (q, snapshot => {
      console.log('snapshot', snapshot.docs.length, 'documents');
      setMessages(
          snapshot.docs.map(doc => ({
            _id: doc.id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user
          }))
      );
    });
    return () => unsubscribe();
 }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>GiftedChat.append(previousMessages, messages));
    const { _id, createdAt,text,user} = messages[0];
    addDoc(collection(database,'chat1'),{
      _id,
      createdAt,
      text,
      user
    });
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
       
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#00B8A9"
          />
        </View>
    
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: '#fff', 
        },
        right: {
          backgroundColor: '#00B8A9', 
        },
      }}
      textStyle={{
        left: {
          color: '#000', // Set the text color for received messages
        },
        right: {
          color: '#fff', // Set the text color for sent messages
        },
      }}
    >
      {/* Display sender's email address for all messages */}
      {props.position === 'left' && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 12, marginRight: 5 }}>{props.currentMessage.user._id}</Text>
          {props.children}
        </View>
      )}
      {props.position === 'right' && props.children}
    </Bubble>
    
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#fff' />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      timeTextStyle={{ left: { color: '#000' }, right: { color: '#fff' } }}
    />
  );
};

export default Chat1Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});