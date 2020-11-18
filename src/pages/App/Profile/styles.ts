import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';

export const Container = styled.ScrollView``;

export const AreaImage = styled.View`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  background-color: #eb5425;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Entypo)`
  color: #111;
  margin-top: -30px;
  margin-left: 80px;
  margin-bottom: 50px;
`;

export const Letter = styled.Text`
  color: #111;
  font-family: 'OdibeeSans-Regular';
  font-size: 50px;
`;

export const SubTitle = styled.Text`
  color: #111;
  font-family: 'OdibeeSans-Regular';
  font-size: 16px;
  margin-top: 10px;
`;
