import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Text } from 'react-native'

import {
  Container,
  Header,
  Left,
  Middle,
  Right,
  Content,
  Footer,
  BackButton,
  InputMessage,
  SendMessageButton,
  Message,
  MessageText,
} from './styles'

import { ScrollView } from 'react-native'

import database from '@react-native-firebase/database'
import { sendMessageService } from './firebaseService'

const Chat = ({ navigation }) => {
  const scrollViewRef = useRef()
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const onLoadingListener = database()
      .ref('/messages')
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

  const sendMessage = useCallback(async () => {
    try {
      sendMessageService(message)
      console.log('SENDED!')
      // alert('SENDED!')
      setMessage('')
    } catch (err) {
      console.log('Error! ', err)
      // alert(err)
    }
  }, [message])

  return (
    <Container>
      <Header>
        <Left>
          <BackButton onPress={() => navigation.navigate('Home')}>
            <Text>Voltar</Text>
          </BackButton>
        </Left>
        <Middle>
          <Text>HEADER</Text>
        </Middle>
        <Right>
          <Text>Search</Text>
        </Right>
      </Header>
      <Content>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {messages.map((message) => {
            return (
              <Message key={message._id}>
                <MessageText>{message.text}</MessageText>
              </Message>
            )
          })}
        </ScrollView>
      </Content>
      <Footer>
        <InputMessage
          placeholder="Message"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <SendMessageButton onPress={sendMessage}>
          <Text>Send</Text>
        </SendMessageButton>
      </Footer>
    </Container>
  )
}

export default Chat
