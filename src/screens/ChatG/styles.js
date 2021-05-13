import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  background: grey;
  /* margin-top: ${wp('0.5%')}px;
  margin-bottom: ${wp('5%')}px;
  margin-left: ${wp('1%')}px;
  margin-right: ${wp('1%')}px; */
  /* border-color: #ddd;
  border-bottom-width: ${wp('0.5%')}px;
  border-left-width: ${wp('0.5%')}px;
  border-right-width: ${wp('0.5%')}px;
  border-top-width: ${wp('0.2%')}px; */
`

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  width: ${wp('100%')}px;

  align-items: center;
  justify-content: center;
  background: blue;
`

export const Left = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: pink;
`

export const Middle = styled.View`
  flex: 5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: blue;
`

export const Right = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: blue;
`

export const BackButton = styled.TouchableOpacity`
  /* flex: 1; */
  padding: ${wp('2%')}px;
  /* margin-bottom: ${wp('5%')}px; */
  background: red;
`

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  width: ${wp('100%')}px;
  height: ${wp('1%')}px;
  align-items: center;
  justify-content: center;
  background: tomato;
`

export const InputMessage = styled.TextInput`
  flex: 9;
  flex-direction: row;
  width: ${wp('100%')}px;
  margin: ${wp('1%')}px;
  background: white;
  border-radius: ${wp('2%')}px;
`

export const SendMessageButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${wp('100%')}px;
  margin: ${wp('1%')}px;
  background: white;
`

export const Content = styled.View`
  flex: 10;
  flex-direction: column;
  width: ${wp('100%')}px;

  align-items: center;
  /* justify-content: center; */
  background: yellow;
`

export const Message = styled.View`
  width: ${wp('100%')}px;
  margin: ${wp('1%')}px;
  min-height: ${wp('15%')}px;
  align-items: flex-end;
  justify-content: center;
  background: green;
`

export const MessageText = styled.Text`
  padding: ${wp('3.5%')}px;
  margin: ${wp('1%')}px;
  background: white;
  border-radius: ${wp('2%')}px;
`
