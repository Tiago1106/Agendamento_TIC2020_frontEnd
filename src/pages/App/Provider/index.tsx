import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../../services/api';

import Button from '../../../components/Button';

import {
  Container,
  AreaImage,
  ButtonBack,
  Title,
  AreaInfo,
  SubTitle,
  DateIcon,
  Row,
  ViewTimer,
  TitleTime,
  RowTime,
  AreaButton,
} from './styles';

interface ServiceProps {
  id: string;
  name: string;
  note: string;
  value: string;
  duration: string;
}

interface TimerProps {
  id: string;
  of: string;
  // eslint-disable-next-line camelcase
  up_to: string;
}
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
  services: ServiceProps[];
  times: TimerProps[];
}

const Provider: React.FC = ({ route }: any) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const [provider, setProvider] = useState<ProviderProps>();
  const [hour, setHour] = useState<string>();

  useEffect(() => {
    async function showProvider(): Promise<void> {
      const { data } = await api.get(`/provider/${id}`);
      setProvider(data);
      const newHour = format(new Date(), 'dd/MM/yyyy');
      setHour(newHour);
    }
    showProvider();
  }, [id]);

  return (
    <>
      <Container>
        <AreaImage>
          <ButtonBack
            name="back"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </AreaImage>
        <AreaInfo>
          <Title>{provider?.name}</Title>
          <SubTitle>Serviços</SubTitle>
          {provider?.services.map((service: ServiceProps) => (
            <SubTitle key={service.id}>
              {`${service.name} - R$${service.value}`}
            </SubTitle>
          ))}
          <Row>
            <Title>Horário</Title>
            <Title>
              {hour} <DateIcon name="calendar" size={20} />
            </Title>
          </Row>
          {provider?.times.map((time: TimerProps) => (
            <RowTime key={time.id}>
              <ViewTimer>
                <TitleTime>{time.of}</TitleTime>
              </ViewTimer>
              <TitleTime>AS</TitleTime>
              <ViewTimer>
                <TitleTime>{time.up_to}</TitleTime>
              </ViewTimer>
            </RowTime>
          ))}
        </AreaInfo>
      </Container>
      <AreaButton>
        <Button
          onPress={() => navigation.navigate('NewScheduling')}
          green
          icon="plus"
        >
          Cadastrar novo agendamento
        </Button>
      </AreaButton>
    </>
  );
};

export default Provider;
