import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
  width: 100%;
  height: 90px;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  flex-direction: row;
  margin-bottom: 10px;
  elevation: 12;
`;

export const AreaImage = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #999;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AreaInfo = styled.View`
  flex: 1;
`;

export const AreaIcon = styled.View`
  width: 25px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'OdibeeSans-Regular';
  color: #555;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const SubTitle = styled.Text`
  font-family: 'OdibeeSans-Regular';
  color: #999;
  font-size: 14px;
`;

export const Icon = styled(Entypo)`
  color: #999;
`;
