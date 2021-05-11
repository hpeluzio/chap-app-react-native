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
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
      },
      image: 'https://facebook.github.io/react/img/logo_og.png',
      // You can also add a video prop:
      video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      // Mark the message as sent, using one tick
      sent: true,
      // Mark the message as received, using two tick
      received: true,
      // Mark the message as pending with a clock loader
      pending: true,
      // Any additional custom parameters are passed through
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
