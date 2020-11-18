import React, { useRef, useState } from 'react';
import { ImageBackground, Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

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
  AreaService,
} from '../styles';

const CadastroService: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [service, setService] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [duraction, setDuraction] = useState<string>('');

  function handleNewService(isNew: boolean): void {
    if (isNew) {
      setService('');
      setNote('');
      setValue('');
      setDuraction('');
      Alert.alert('Serviço cadastrado', 'Cadastre outro');
    } else {
      Alert.alert(
        'Serviços cadastrados',
        'Cadastre agora seu horário de trabalho',
      );
      navigation.navigate('CreateTime');
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
        <AreaLogin>
          <AreaForm ref={formRef} onSubmit={handleNewService}>
            <Title>Cadastro de serviço</Title>

            <AreaRow>
              <NameInput>Serviços</NameInput>
            </AreaRow>
            <AreaService>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="services"
                icon="star"
                placeholder="Serviço"
                value={service}
                onChangeText={(text) => setService(text)}
              />
              <AreaInput
                placeholder="Observação"
                value={note}
                onChangeText={(text) => setNote(text)}
              />
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="price"
                icon="dollar-sign"
                placeholder="Valor"
                value={value}
                onChangeText={(text) => setValue(text)}
              />
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="time"
                icon="clock"
                placeholder="Duração - média (Min)"
                value={duraction}
                onChangeText={(text) => setDuraction(text)}
              />
            </AreaService>
            <Button
              green
              icon="plus"
              onPress={() => {
                handleNewService(true);
              }}
            >
              Cadastrar outro serviço
            </Button>
            <Button
              green={false}
              icon="log-out"
              onPress={() => {
                handleNewService(false);
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
        </AreaLogin>
      </Container>
    </ImageBackground>
  );
};

export default CadastroService;
