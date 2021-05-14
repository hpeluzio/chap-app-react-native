import React, { useCallback, useEffect, useState } from 'react'

import { View } from 'react-native'

import database from '@react-native-firebase/database'

import { Bubble, GiftedChat, Send, InputToolbar } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ChatG = ({ navigation }) => {
  const [messages, setMessages] = useState([])

  const user = {
    _id: 1,
    name: 'UserName with ID 1',
    avatar: 'https://facebook.github.io/react/img/logo_og.png',
  }

  useEffect(() => {
    const onAddedListener = database()
      .ref('messages')
      .on('child_added', (snapshot) => {
        setMessages((prevMsgs) => GiftedChat.append(prevMsgs, snapshot.val()))
      })

    const onRemovedListener = database()
      .ref('messages')
      .on('child_removed', (snapshot) => {
        setMessages((prevMsgs) => prevMsgs.filter((message) => message._id !== snapshot.val()._id))
      })

    const onChangedListener = database()
      .ref('messages')
      .on('child_changed', (snapshot) => {
        // setMessages((prevMsgs) => prevMsgs.map((message) => message._id !== snapshot.val()._id))
        setMessages((prevMsgs) =>
          prevMsgs.map((message) => (message._id !== snapshot.val()._id ? message : snapshot.val()))
        )
      })

    return () => {
      database().ref('messages').off('child_added', onAddedListener)
      database().ref('messages').off('child_removed', onRemovedListener)
      database().ref('messages').off('child_changed', onChangedListener)
    }
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
            style={{ marginBottom: 5, marginRight: 5, borderWidth: 0 }}
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

  //Input toolbar customizado
  const renderInputToolbar = useCallback((props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderTopColor: 'green',

          borderTopWidth: 0.5,

          backgroundColor: 'white',
          // margin: 2,
        }}
      />
    )
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
      // renderInputToolbar={renderInputToolbar}
    />
  )
}

export default ChatG
