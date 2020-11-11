import styled from 'styled-components/native';
import { Form } from '@unform/mobile';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  background-color: transparent;
`;

export const AreaLogo = styled.View`
  width: 250px;
  height: 250px;
`;

export const ImageLogo = styled.Image.attrs(() => {
  return {
    resizeMode: 'stretch',
  };
})`
  width: 100%;
  height: 100%;
  border-radius: 125px;
`;

export const AreaLogin = styled.View`
  width: 100%;
  height: 51%;
  background-color: #f4f4f4;
  padding: 30px 20px;
  /* align-items: center; */

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #777;
  font-family: 'OdibeeSans-Regular';
  margin-bottom: 20px;
`;

export const AreaForm = styled(Form)`
  flex: 1;
`;

export const AreaForgot = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 5px 0 20px 0;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #777;
  font-family: 'OdibeeSans-Regular';
`;

export const AreaCreateAccount = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CreateAccount = styled.Text`
  font-size: 16px;
  color: #777;
  font-family: 'OdibeeSans-Regular';
`;

export const Icon = styled(Feather)`
  color: #777;
  margin-left: 5px;
`;
