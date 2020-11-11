import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: transparent;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'OdibeeSans-Regular';
  color: #000;
  font-size: 24px;
`;

export const AreaIcon = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: #000;
`;
