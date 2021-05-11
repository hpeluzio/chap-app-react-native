import React from 'react'
import { Text } from 'react-native'

import { BackButton, Container } from './styles'

const Chat = ({ navigation }) => {
  return (
    <Container>
      <BackButton onPress={() => navigation.navigate('Home')}>
        <Text>BackButton</Text>
      </BackButton>
      <Text>Chat</Text>
    </Container>
  )
}

export default Chat
