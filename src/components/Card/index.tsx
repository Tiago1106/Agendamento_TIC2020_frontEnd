import React from 'react';

import {
  Container,
  AreaIcon,
  AreaImage,
  AreaInfo,
  Body,
  SubTitle,
  Title,
  Icon,
} from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <AreaImage />
      <Body>
        <AreaInfo>
          <Title>Salão dos brothers</Title>
          <SubTitle>30/06/2020 - 10:00 horas</SubTitle>
        </AreaInfo>
        <AreaIcon>
          <Icon name="chevron-right" size={20} />
        </AreaIcon>
      </Body>
    </Container>
  );
};

export default Card;
