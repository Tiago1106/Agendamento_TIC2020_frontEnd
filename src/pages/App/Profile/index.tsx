import React, { useRef, useState, useEffect } from 'react';
import { FormHandles, Form } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';
import api from '../../../services/api';
import Header from '../../../components/Header';
import TabBar from '../../../components/TabBar';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { useAuth } from '../../../hooks/auth';

import { Container, AreaImage, Icon, Letter, SubTitle } from './styles';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [letterName, setLetter] = useState<string>('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setLetter(user.name.substring(0, 1));
  }, [user.name, user.email]);

  async function update(): Promise<void> {
    try {
      const dataApi = {
        name,
        email,
        password,
      };

      const { data } = await api.put(`/users/${user.id}`, dataApi);
      // console.log(data);
      // const newUser = {
      //   name: data.name,
      //   email: data.email,
      //   password: data.password,
      //   id: data.id,
      // };
      // updateUser(newUser);
      Alert.alert(
        'Sucesso',
        'Seus dados foram atualizado, faça login novamente',
      );
      signOut();
      // navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro', 'Cheque os dados');
    }
  }

  async function deleteAccount(): Promise<void> {
    await api.delete(`/users/${user.id}`);
    signOut();
    // console.log(user);
  }

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
          <Letter>{letterName}</Letter>
        </AreaImage>
        <Icon name="camera" size={30} />
        <Form ref={formRef} onSubmit={() => {}}>
          <Input
            name="name"
            placeholder="Nome"
            value={name}
            onChangeText={(e) => setName(e)}
          />
          <Input
            name="email"
            placeholder="E-mail"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <Input
            name="password"
            placeholder="Senha"
            secureTextEntry
            onChangeText={(e) => setPassword(e)}
          />
          <Button green={false} icon="edit-2" onPress={() => update()}>
            Editar dados
          </Button>
          <SubTitle onPress={() => signOut()}>Fazer Logout</SubTitle>
          <SubTitle onPress={() => deleteAccount()}>Deletar Conta</SubTitle>
        </Form>
      </Container>
      <TabBar namePage="user" />
    </>
  );
};

export default Profile;
