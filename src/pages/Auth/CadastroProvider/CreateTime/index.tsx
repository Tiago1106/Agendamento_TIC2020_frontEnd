import React, { useRef, useState } from 'react';
import { ImageBackground, Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import api from '../../../../services/api';
import { hourMask } from '../../../../utils/trasnforms';

import BackgroundImage from '../../../../assets/backgroundImage.jpg';
import LogoImage from '../../../../assets/Logo.png';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import {
  Container,
  AreaLogo,
  ImageLogo,
  Title,
  AreaForm,
  AreaCreateAccount,
  CreateAccount,
  NameInput,
  AreaRow,
  AreaTimer,
  MetadeTimer,
} from '../styles';

import { Area } from './styles';

const CadastroProvider: React.FC = ({ route }: any) => {
  const { id } = route.params;
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [das, setDas] = useState<string>('');
  const [ate, setAte] = useState<string>('');

  async function handleNewTime(isNew: boolean): Promise<void> {
    const dataPost = {
      provider_id: id,
      of: das,
      up_to: ate,
    };
    if (isNew) {
      try {
        await api.post('/times', dataPost);
        setDas('');
        setAte('');
        Alert.alert('Horário cadastrado', 'Cadastre outro');
      } catch (error) {
        Alert.alert('Erro', 'Algo de errado aconteceu, tente novamente');
      }
    } else {
      try {
        await api.post('/times', dataPost);
        Alert.alert('Cadastro finalizado', 'Faça seu login e começe a usar');
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Erro', 'Algo de errado aconteceu, tente novamente');
      }
    }
  }

  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: 'flex-start' }}
      source={BackgroundImage}
    >
      <Container
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
          paddingTop: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <AreaLogo>
          <ImageLogo source={LogoImage} />
        </AreaLogo>
        <Area>
          <AreaForm ref={formRef} onSubmit={handleNewTime}>
            <Title>Cadastro de horários</Title>
            <AreaRow>
              <NameInput>Horários</NameInput>
            </AreaRow>
            <AreaTimer>
              <MetadeTimer>
                <Input
                  name="initialTimer"
                  icon="clock"
                  placeholder="Das"
                  value={hourMask(das)}
                  onChangeText={(text) => setDas(text)}
                  maxLength={5}
                />
              </MetadeTimer>
              <MetadeTimer>
                <Input
                  name="initialTimer"
                  icon="clock"
                  placeholder="Até"
                  value={hourMask(ate)}
                  onChangeText={(text) => setAte(text)}
                  maxLength={5}
                />
              </MetadeTimer>
            </AreaTimer>
            <Button
              green
              icon="plus"
              onPress={() => {
                handleNewTime(true);
              }}
            >
              Cadastrar outro horário
            </Button>
            <Button
              green={false}
              icon="log-out"
              onPress={() => {
                handleNewTime(false);
              }}
            >
              Continuar
            </Button>
          </AreaForm>
          <AreaCreateAccount>
            <CreateAccount onPress={() => navigation.goBack()}>
              Voltar
            </CreateAccount>
          </AreaCreateAccount>
        </Area>
      </Container>
    </ImageBackground>
  );
};

export default CadastroProvider;
