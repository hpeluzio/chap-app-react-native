import database from '@react-native-firebase/database'

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

export const onAddedMessagesListener = async (callback) => {
  const listener = database()
    .ref('messages')
    // .limitToLast(20)
    .on('child_added', (snapshot) => {
      // console.log('child_added')
      // console.log('child_added', snapshot.val())
      callback(snapshot.val())
      // callback(parse(snapshot))
    })

  return () => {
    database().ref.off('child_added', listener)
  }
}

export const onRemovedMessagesListener = async (callback) => {
  const listener = database()
    .ref('messages')
    // .limitToLast(20)
    .on('child_removed', (snapshot) => {
      // console.log('child_removed')
      // console.log('child_removed', snapshot.val())
      // console.log('child_removed._id', snapshot.val()._id)
      callback(snapshot.val())
      // callback(snapshot.val())
      // callback(parse(snapshot))
    })

  return () => {
    database().ref.off('child_removed', listener)
  }
}

export const sendMessageServiceGiftedChat = (message) => {
  return new Promise((resolve, reject) => {
    let key = database().ref('/messages').push().key

    message._id = key
    message.createdAt = new Date().getTime()
    console.log('message: ', message)

    database()
      .ref('/messages/' + message._id)
      .update(message)
      .then((snapshot) => {
        resolve(snapshot)
      })
      .catch((error) => reject(error))
  })
}

const parse = (snapshot) => {
  const { createdAt, text, user } = snapshot.val()
  const { key: _id } = snapshot
  const message = { _id, createdAt, text, user }
  return message
}
