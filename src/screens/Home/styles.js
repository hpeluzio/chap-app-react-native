import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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

export const ChatButton = styled.TouchableOpacity`
  /* flex: 1; */
  background: red;
  align-items: flex-start;
  justify-content: center;
  padding: ${wp('2%')}px;
`

export const TextChat = styled.Text`
  font-weight: bold;
`

export const Title = styled.Text`
  font-weight: bold;
`

// export const Container = styled.SafeAreaView`
//   flex: 1;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   min-height: ${wp('20%')}px;
//   background: white;
//   margin-top: ${wp('2%')}px;
//   margin-bottom: ${wp('2%')}px;
//   margin-left: ${wp('2%')}px;
//   margin-right: ${wp('2%')}px;
// `;

// export const TextStyled = styled.Text`
//   color: black;
// `;

// export const AccordionTittle = styled.View``;

// export const AccordionTittleLeft = styled.View`
//   background: white;
//   flex: 1;
//   flex-direction: column;
//   width: 100%;
//   padding-left: ${wp('2%')}px;
// `;

// export const AccordionTittleNome = styled.View`
//   background: white;
//   flex: 1;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
// `;

// export const Nome = styled.Text`
//   background-color: white;
//   /* text-transform: uppercase; */
//   font-size: ${wp('4.5%')}px;
//   color: #777777;
//   font-family: ${constants.font_family_bold};
// `;

// export const AccordionTittleHorario = styled.View`
//   background: white;
//   flex: 1;
//   flex-direction: row;
//   align-items: center;
//   min-height: ${wp('7%')}px;
// `;

// export const Horario = styled.Text`
//   background-color: white;
//   /* text-transform: uppercase; */
//   padding-left: ${wp('1.5%')}px;
//   font-size: ${wp('3.5%')}px;
//   font-family: ${constants.font_family};
// `;

// export const AccordionTittleRight = styled.View`
//   background: white;
//   /* flex: 1; */
//   flex-direction: row;
//   width: 15%;
// `;

// export const AccordionIconContainer = styled.TouchableOpacity`
//   margin-left: auto;
//   margin-right: ${wp('2%')}px;
//   padding-right: ${wp('1.5%')}px;
//   padding-left: ${wp('1.5%')}px;
//   padding-top: ${wp('1.5%')}px;
//   padding-bottom: ${wp('1.5%')}px;
//   background-color: green;
//   font-size: ${wp('8%')}px;
//   font-family: ${constants.font_family};
//   border-radius: ${wp('1%')}px;
// `;

// export const AccordionIcon = styled.Text`
//   margin-left: auto;
//   background-color: red;
//   font-size: ${wp('8%')}px;
// `;

// export const NotifyContainer = styled.TouchableOpacity`
//   flex: 1;
//   /* background: red; */
//   align-items: flex-start;
//   justify-content: center;
// `;

// export const AccordionContent = styled.View`
//   flex: 1;
//   background: white;
//   align-items: flex-start;
//   justify-content: center;
// `;

// export const AccordionOption = styled.View`
//   flex: 1;
//   flex-direction: row;
//   background: white;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
// `;

// export const OptionButton = styled.TouchableOpacity`
//   flex: 1;
//   background: ${props => props.color};
//   height: ${wp('8%')}px;
//   min-width: ${wp('25%')}px;
//   max-width: ${wp('50%')}px;
//   align-items: center;
//   justify-content: center;
//   border-radius: ${wp('2%')}px;
//   margin-top: ${wp('1%')}px;
//   margin-bottom: ${wp('1%')}px;
//   margin-left: ${wp('1%')}px;
//   margin-right: ${wp('1%')}px;
// `;

// export const OptionText = styled.Text`
//   color: ${props => props.color};
//   font-family: ${constants.font_family_bold};
//   font-size: ${wp('3%')}px;
// `;

// export const ObsContainer = styled.View`
//   flex: 1;
//   flex-direction: column;
//   background: #eaecee;
//   align-items: center;
//   justify-content: space-around;
//   padding: ${wp('2.5%')}px ${wp('2.5%')}px;
//   margin: ${wp('1%')}px;
// `;

// export const ObsTittle = styled.Text`
//   color: #777777;
//   font-family: ${constants.font_family_bold};
//   font-size: ${wp('3.6%')}px;
//   text-align: justify;
//   /* align-items: center; */
//   /* justify-content: space-around; */
// `;

// export const ObsComment = styled.Text`
//   color: #777777;
//   font-family: ${constants.font_family};
//   font-size: ${wp('3.5%')}px;
//   text-align: justify;
//   /* align-items: center; */
//   /* justify-content: space-around; */
// `;
