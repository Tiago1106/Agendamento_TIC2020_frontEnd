import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView``;

export const AreaNothing = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'OdibeeSans-Regular';
  color: #555;
  font-size: 22px;
  text-align: center;
`;

export const Icon = styled(Feather)`
  color: #555;
`;
