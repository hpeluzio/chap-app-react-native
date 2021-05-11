import database from '@react-native-firebase/database'

export const getMessagesService = () => {
  return new Promise((resolve, reject) => {
    let messageToSend = {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }

    let key = database().ref('/messages').push().key

    database()
      .ref('/messages/' + key)
      .update(messageToSend)
      .then((snapshot) => {
        resolve(snapshot)
      })
      .catch((error) => reject(error))
  })
}

export const sendMessageService = (message) => {
  return new Promise((resolve, reject) => {
    let key = database().ref('/messages').push().key

    let messageToSend = {
      _id: key,
      text: message,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }

    database()
      .ref('/messages/' + key)
      .update(messageToSend)
      .then((snapshot) => {
        resolve(snapshot)
      })
      .catch((error) => reject(error))
  })
}
