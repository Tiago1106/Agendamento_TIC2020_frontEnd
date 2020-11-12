import React from 'react';

import Header from '../../../components/Header';
import TabBar from '../../../components/TabBar';

import { Container, Title } from './styles';

const Notification: React.FC = () => {
  return (
    <>
      <Header title="Notificações" />
      <Container
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Title>Nenhuma notificação.</Title>
      </Container>
      <TabBar namePage="bell" />
    </>
  );
};

export default Notification;
