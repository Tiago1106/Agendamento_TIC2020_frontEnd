import React, { useRef, useState, useEffect } from 'react';
import { Form, FormHandles } from '@unform/core';
import api from '../../../services/api';

import Header from '../../../components/Header';
import TabBar from '../../../components/TabBar';
import Input from '../../../components/Input';
import Card from '../../../components/Card';

import { Container, Title } from './styles';

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

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [providers, setProviders] = useState<ProviderProps[]>([]);

  useEffect(() => {
    async function getProvider(): Promise<void> {
      const { data } = await api.get('/provider');
      setProviders(data);
    }
    getProvider();
  }, []);

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
        {providers?.length !== 0 ? (
          <>
            {providers.map((provider: ProviderProps) => (
              <Card
                key={provider.id}
                title={provider.name}
                SubT={false}
                id={provider.id}
              />
            ))}
          </>
        ) : (
          <Title>No momento estamos sem prestadores.</Title>
        )}
      </Container>
      <TabBar namePage="search" />
    </>
  );
};

export default Search;
