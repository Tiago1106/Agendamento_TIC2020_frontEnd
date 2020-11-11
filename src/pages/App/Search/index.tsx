import React, { useRef } from 'react';
import { Form, FormHandles } from '@unform/core';

import Header from '../../../components/Header';
import TabBar from '../../../components/TabBar';
import Input from '../../../components/Input';
import Card from '../../../components/CardProvider';

import { Container, AreaNothing, Title } from './styles';

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <Header title="Buscar" />
      <Container
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="search" icon="search" placeholder="Buscando..." />
        </Form>
        <Card />
        {/* <AreaNothing>
          <Title>
            Pesquise pelos seus cabeleleiros, salões de beleza, entre outros.
          </Title>
        </AreaNothing> */}
      </Container>
      <TabBar namePage="search" />
    </>
  );
};

export default Search;
