import React, { useRef, useCallback, useState, useEffect } from 'react';
import { ImageBackground, TextInput, Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { hourMask } from '../../../../utils/trasnforms';

import getValidationErrors from '../../../../utils/getValidationErrors';

import BackgroundImage from '../../../../assets/backgroundImage.jpg';
import LogoImage from '../../../../assets/Logo.png';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import AreaInput from '../../../../components/AreaInput';

import {
  Container,
  AreaLogo,
  ImageLogo,
  AreaLogin,
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

const CadastroProvider: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [das, setDas] = useState<string>('');
  const [ate, setAte] = useState<string>('');

  function handleNewTime(isNew: boolean): void {
    if (isNew) {
      setDas('');
      setAte('');
      Alert.alert('Horário cadastrado', 'Cadastre outro');
    } else {
      Alert.alert('Cadastro finalizado', 'Faça seu login e começe a usar');
      navigation.navigate('Login');
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
