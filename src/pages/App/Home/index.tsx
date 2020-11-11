import React from 'react';

import Header from '../../../components/Header';
import Card from '../../../components/Card';
import TabBat from '../../../components/TabBar';

import { Container, Title, Icon, AreaNothing } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header title="Meus agendamentos" icon />
      <Container
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Card />
        {/* <AreaNothing>
          <Title>
            Você não possui agendamentos, clique em adicionar para criar um novo
            agendamento
          </Title>
          <Icon name="arrow-down" size={200} />
        </AreaNothing> */}
      </Container>
      <TabBat namePage="home" />
    </>
  );
};

export default Home;
