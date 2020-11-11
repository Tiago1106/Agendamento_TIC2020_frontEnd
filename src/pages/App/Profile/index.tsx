import React, { useRef } from 'react';
import { FormHandles, Form } from '@unform/core';

import Header from '../../../components/Header';
import TabBar from '../../../components/TabBar';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, AreaImage, Icon, Letter } from './styles';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <Header title="Perfil" />
      <Container
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: 'center',
        }}
      >
        <AreaImage>
          <Letter>YT</Letter>
        </AreaImage>
        <Icon name="camera" size={30} />
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="name" placeholder="Nome" />
          <Input name="surname" placeholder="Sobrenome" />
          <Input name="cpf" placeholder="CPF" />
          <Input name="password" placeholder="Senha" />
          <Button green={false} icon="edit-2">
            Editar dados
          </Button>
        </Form>
      </Container>
      <TabBar namePage="user" />
    </>
  );
};

export default Profile;
