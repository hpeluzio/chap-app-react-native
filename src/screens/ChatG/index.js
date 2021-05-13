import React, { useCallback, useEffect, useState } from 'react'

import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'

import { ScrollView } from 'react-native'

import database from '@react-native-firebase/database'
import { sendMessageServiceGiftedChat } from './firebaseService'

const ChatG = ({ navigation }) => {
  const [messages, setMessages] = useState([])

  const user = {
    _id: 1,
    name: 'UserName with ID 1',
    avatar: 'https://facebook.github.io/react/img/logo_og.png',
  }

  // useEffect(() => {
  //   updateMessage()
  // }, [updateMessage])

  useEffect(() => {
    const onLoadingListener = database()
      .ref('/messages')
      .orderByChild('createdAt')
      .on('value', (snapshot) => {
        setMessages([])
        snapshot.forEach((childSnapshot) => {
          console.log('onLoadingListener: ', childSnapshot.val())
          setMessages((messages) => [...messages, childSnapshot.val()])
        })
      })

    return () => {
      database().ref.off('value', onLoadingListener)
    }
  }, [])

  const onSend = useCallback(
    async (message = []) => {
      try {
        message.map((msg) => {
          console.log(msg)
          sendMessageServiceGiftedChat(msg)
        })
        console.log('SENDED!')
        console.log(messages)
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
      } catch (err) {
        console.log('Error! ', err)
      }
    },
    [messages]
  )

  const updateMessage = useCallback(async () => {
    database()
      .ref('/messages')
      .orderByChild('createdAt')
      .on('child_added', (snapshot) => {
        console.log('updateMessage: child_added')
        // setMessages([])
        // snapshot.forEach((childSnapshot) => {
        //   console.log('onLoadingListener: ', childSnapshot.val())
        //   setMessages((messages) => [...messages, childSnapshot.val()])
        // })
      })
  }, [])

  // const onSend = (messages = []) => {
  //   console.log('messages:', messages)
  //   sendMessageServiceGiftedChat(messages)
  //   // setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
  // }

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={user}
      // renderBubble={renderBubble}
      alwaysShowSend
      // renderSend={renderSend}
      scrollToBottom
      // scrollToBottomComponent={scrollToBottomComponent}
    />
  )
}

export default ChatG
