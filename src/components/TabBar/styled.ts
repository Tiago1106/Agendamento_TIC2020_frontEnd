import styled, { css } from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo'; // home, circle-with-plus
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // bell, user-circle
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // bell, user-circle
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // bell, user-circle

interface IconProps {
  isFocus: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  elevation: 20;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AreaIcon = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Home = styled(Entypo)<IconProps>`
  color: #555;

  ${(props) =>
    props.isFocus &&
    css`
      color: #eb5425;
    `}
`;

export const Plus = styled(Entypo)<IconProps>`
  color: #555;

  ${(props) =>
    props.isFocus &&
    css`
      color: #eb5425;
    `}
`;

export const Search = styled(FontAwesome5)<IconProps>`
  color: #555;

  ${(props) =>
    props.isFocus &&
    css`
      color: #eb5425;
    `}
`;

export const Bell = styled(MaterialCommunityIcons)<IconProps>`
  color: #555;

  ${(props) =>
    props.isFocus &&
    css`
      color: #eb5425;
    `}
`;

export const User = styled(FontAwesome)<IconProps>`
  color: #555;

  ${(props) =>
    props.isFocus &&
    css`
      color: #eb5425;
    `}
`;
