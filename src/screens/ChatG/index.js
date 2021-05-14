import React, { useCallback, useEffect, useState } from 'react'

import { View } from 'react-native'

import database from '@react-native-firebase/database'

import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {
  onAddedMessagesListener,
  onRemovedMessagesListener,
  sendMessageServiceGiftedChat,
} from './firebaseService'

const ChatG = ({ navigation }) => {
  const [messages, setMessages] = useState([])

  const user = {
    _id: 1,
    name: 'UserName with ID 1',
    avatar: 'https://facebook.github.io/react/img/logo_og.png',
  }

  useEffect(() => {
    onAddedMessagesListener((msg) => {
      setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg))
    })
  }, [])

  useEffect(() => {
    onRemovedMessagesListener((msg) => {
      setMessages((prevMsgs) => prevMsgs.filter((message) => message._id !== msg._id))
    })
  }, [])

  const onSend = useCallback(async (allMessagesTyped = []) => {
    allMessagesTyped.map((message) => {
      try {
        let key = database().ref('/messages').push().key
        message._id = key
        message.createdAt = new Date().getTime()

        database()
          .ref('/messages/' + message._id)
          .update(message)
          .then((snapshot) => {
            console.log(snapshot)
          })
          .catch((error) => console.error(error))
      } catch (err) {
        console.log('Error! ', err)
      }
    })
  }, [])

  //Cor das caixas de dialogo customizado para verde
  const renderBubble = useCallback((props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: 'green',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    )
  }, [])

  //Botao de enviar customizado
  const renderSend = useCallback((props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color="green"
            // color="#2e64e5"
          />
        </View>
      </Send>
    )
  }, [])

  //Botao de scroll para baixo customizado
  const scrollToBottomComponent = useCallback((props) => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={user}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  )
}

export default ChatG
