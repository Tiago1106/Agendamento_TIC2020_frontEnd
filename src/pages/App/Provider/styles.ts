import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconDate from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const AreaImage = styled.View`
  width: 100%;
  height: 30%;
  background-color: #f4f;
`;

export const ButtonBack = styled(Icon)`
  color: #fff;
  margin-top: 10px;
  margin-left: 10px;
`;

export const DateIcon = styled(IconDate)`
  color: #333;
  margin-top: 10px;
  margin-left: 10px;
`;

export const AreaInfo = styled.View`
  width: 100%;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'OdibeeSans-Regular';
  color: #333;
  margin: 10px 0;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: 'OdibeeSans-Regular';
  color: #666;
  margin-bottom: 5px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewTimer = styled.View`
  width: 80px;
  height: 40px;
  background-color: #eb5425;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const TitleTime = styled.Text`
  font-size: 20px;
  font-family: 'OdibeeSans-Regular';
  color: #333;
  margin: 0 10px;
`;

export const RowTime = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const AreaButton = styled.View`
  width: 100%;
  padding: 20px;
`;
