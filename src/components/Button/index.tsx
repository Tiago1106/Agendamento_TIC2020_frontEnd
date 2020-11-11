import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, AreaIcon, AreaView, Icon } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon: string;
  green: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, icon, green, ...rest }) => (
  <Container isColorGreen={green} {...rest}>
    <AreaView isColorGreen={green} />
    <ButtonText>{children}</ButtonText>
    <AreaIcon isColorGreen={green}>
      <Icon name={icon} size={20} />
    </AreaIcon>
  </Container>
);

export default Button;
