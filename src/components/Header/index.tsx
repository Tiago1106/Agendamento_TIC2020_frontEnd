import React from 'react';
import { View } from 'react-native';

import { Container, Title, AreaIcon, Icon } from './styles';

interface HeaderProps {
  title: string;
  icon?: boolean;
}

const Header: React.FC<HeaderProps> = ({ icon, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <AreaIcon>{icon && <Icon name="filter" size={15} />}</AreaIcon>
    </Container>
  );
};

export default Header;
