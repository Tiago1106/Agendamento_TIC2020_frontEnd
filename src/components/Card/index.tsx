import React from 'react';
import { useNavigation } from '@react-navigation/native';

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

interface ProviderProps {
  id: string;
  name: string;
  email: string;
  password: string;
  complement: string;
  cnpj: string;
  cpf: string;
  city: string;
  cep: string;
  nameLocale: string;
  noteLocale: string;
  neighborhood: string;
  number: string;
  uf: string;
  street: string;
}
interface CardProps {
  title: string;
  SubT: boolean;
  date?: string;
  hour?: string;
  id?: string;
}

const Card: React.FC<CardProps> = ({ date, hour, title, SubT, id }) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={
        () => id && navigation.navigate('Provider', { id })
        // eslint-disable-next-line react/jsx-curly-newline
      }
    >
      <AreaImage />
      <Body>
        <AreaInfo>
          <Title>{title}</Title>
          {SubT && <SubTitle>{`${date} - ${hour} horas`}</SubTitle>}
        </AreaInfo>
        <AreaIcon>
          <Icon name="chevron-right" size={20} />
        </AreaIcon>
      </Body>
    </Container>
  );
};

export default Card;
