import React from 'react'
import { Text, View } from 'react-native'

import { Container, ChatButton } from './styles'

const Home = ({ navigation }) => {
  return (
    <Container>
      <ChatButton onPress={() => navigation.navigate('Chat')}>
        <Text>Home</Text>
      </ChatButton>
    </Container>
  )
}

export default Home
