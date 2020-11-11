import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  background-color: transparent;
`;

export const AreaLogo = styled.View`
  width: 225px;
  height: 225px;
`;

export const ImageLogo = styled.Image.attrs(() => {
  return {
    resizeMode: 'stretch',
  };
})`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

export const Title = styled.Text`
  font-size: 60px;
  font-family: 'OdibeeSans-Regular';
  color: #fff;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  font-family: 'OdibeeSans-Regular';
  color: #fff;
  /* margin-top: 30px;
  margin-bottom: 30px; */
`;

export const AreaSelect = styled.View`
  width: 100%;
  margin: 30px 0;
`;

export const AreaProvider = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 40px;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons)`
  color: #fff;
  margin-right: 5px;
`;

export const IconF = styled(Feather)`
  color: #fff;
  margin-right: 5px;
`;
