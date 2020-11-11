import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  AreaIcon,
  AreaImage,
  AreaInfo,
  Body,
  Title,
  Icon,
} from './styles';

const Card: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Provider')}>
      <AreaImage />
      <Body>
        <AreaInfo>
          <Title>Salão dos brothers</Title>
        </AreaInfo>
        <AreaIcon>
          <Icon name="chevron-right" size={20} />
        </AreaIcon>
      </Body>
    </Container>
  );
};

export default Card;
