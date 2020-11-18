import styled from 'styled-components/native';
import { Form } from '@unform/mobile';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  background-color: transparent;
`;

export const AreaLogo = styled.View`
  width: 150px;
  height: 150px;
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

export const AreaLogin = styled.ScrollView`
  width: 100%;
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
  margin-right: 20px;
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

export const AreaRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const NameInput = styled.Text`
  font-size: 18px;
  color: #777;
  font-family: 'OdibeeSans-Regular';
`;

export const AreaService = styled.View`
  width: 100%;
  padding: 10px 5px;
  border-width: 1px;
  border-color: #232129;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const AreaRemove = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const AreaTimer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MetadeTimer = styled.View`
  width: 49%;
`;
