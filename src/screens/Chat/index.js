import React, { useEffect, useState } from 'react'
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

const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 2,
      text: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 3,
      text: 'lorem ipsum dolor sit amet consectetur ',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ])

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
        {messages.map((message) => {
          return (
            <Message key={message._id}>
              <MessageText>{message.text}</MessageText>
            </Message>
          )
        })}
      </Content>
      <Footer>
        <InputMessage />
        <SendMessageButton onPress={() => {}}>
          <Text>Send</Text>
        </SendMessageButton>
      </Footer>
    </Container>
  )
}

export default Chat
