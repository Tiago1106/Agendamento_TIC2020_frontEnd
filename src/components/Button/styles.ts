import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

interface isColorProps {
  isColorGreen: boolean;
}

export const Container = styled(RectButton)<isColorProps>`
  width: 100%;
  height: 60px;
  background: #eb5425;
  border-radius: 10px;
  margin-top: 8px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.isColorGreen &&
    css`
      background: #20c323;
    `}
`;

export const ButtonText = styled.Text`
  font-family: 'OdibeeSans-Regular';
  color: #000;
  font-size: 20px;
`;

export const AreaIcon = styled.View<isColorProps>`
  width: 60px;
  height: 60px;
  background-color: #fb7246;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isColorGreen &&
    css`
      background: #60eb63;
    `}
`;

export const Icon = styled(Feather)`
  color: #000;
`;

export const AreaView = styled.View<isColorProps>`
  width: 60px;
  height: 60px;
  background-color: #eb5425;
  border-radius: 10px;

  ${(props) =>
    props.isColorGreen &&
    css`
      background: #20c323;
    `}
`;
