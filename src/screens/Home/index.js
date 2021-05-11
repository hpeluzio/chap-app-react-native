import React from 'react'
import { Text, View } from 'react-native'

import { Container, ChatButton, TextChat, Title } from './styles'

const Home = ({ navigation }) => {
  return (
    <Container>
      <Title>Home</Title>
      <ChatButton onPress={() => navigation.navigate('Chat')}>
        <TextChat>Chat</TextChat>
      </ChatButton>
    </Container>
  )
}

export default Home
