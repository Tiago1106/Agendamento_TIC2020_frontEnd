import React from 'react';
import { useNavigation } from '@react-navigation/native';

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

const Provider: React.FC = () => {
  const navigation = useNavigation();

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
          <Title>Salão dos brothers</Title>
          <SubTitle>Atendimento com horário marcado rigorosamente ...</SubTitle>
          <SubTitle>Serviços</SubTitle>
          <SubTitle>Barbeiro, cabelo</SubTitle>
          <SubTitle>Cortes masculino</SubTitle>
          <Row>
            <Title>Horário</Title>
            <Title>
              10/11/2020 <DateIcon name="calendar" size={20} />
            </Title>
          </Row>
          <RowTime>
            <ViewTimer>
              <TitleTime>09:00</TitleTime>
            </ViewTimer>
            <TitleTime>AS</TitleTime>
            <ViewTimer>
              <TitleTime>13:00</TitleTime>
            </ViewTimer>
          </RowTime>
          <RowTime>
            <ViewTimer>
              <TitleTime>14:00</TitleTime>
            </ViewTimer>
            <TitleTime>AS</TitleTime>
            <ViewTimer>
              <TitleTime>20:00</TitleTime>
            </ViewTimer>
          </RowTime>
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
