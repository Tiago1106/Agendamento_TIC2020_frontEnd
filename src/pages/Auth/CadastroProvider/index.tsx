import React, { useRef, useCallback, useState, useEffect } from 'react';
import { ImageBackground, TextInput, Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import getValidationErrors from '../../../utils/getValidationErrors';

import BackgroundImage from '../../../assets/backgroundImage.jpg';
import LogoImage from '../../../assets/Logo.png';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AreaInput from '../../../components/AreaInput';

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
  Icon,
  AreaRow,
  AreaService,
  AreaRemove,
  AreaTimer,
  MetadeTimer,
} from './styles';

interface SignInFormData {
  name: string;
  email: string;
  password: string;
}

const CadastroProvider: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const [quantityServices, setQuantityService] = useState<number[]>([1]);
  const [quantityTimer, setQuantityTimer] = useState<number[]>([1]);

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail valido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      Alert.alert('Aviso', 'Você foi cadastrado com sucesso');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer cadastro, cheque as credenciais',
      );
    }
  }, []);

  function plusServices(): void {
    setQuantityService([...quantityServices, 1]);
  }

  function plusTimer(): void {
    setQuantityTimer([...quantityTimer, 1]);
  }

  function removeService(index: number): void {
    const newList = quantityServices.filter((service, indexService) => {// eslint-disable-line
      if (indexService !== index) {
        return service;
      }
    });
    if (newList.length !== 0) {
      setQuantityService([...newList]);
    }
  }

  function removeTimer(index: number): void {
    const newList = quantityTimer.filter((time, indexTimer) => {// eslint-disable-line
      if (indexTimer !== index) {
        return time;
      }
    });
    if (newList.length !== 0) {
      setQuantityTimer([...newList]);
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
          <AreaForm ref={formRef} onSubmit={handleSignIn}>
            <Title>Cadastro</Title>
            <Input name="name" icon="user" placeholder="Nome" />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              autoCapitalize="none"
            />
            <Input
              name="nameLocale"
              icon="home"
              placeholder="Nome do estabelecimento"
            />
            <AreaInput placeholder="Observação do estabelecimento" />
            <NameInput>Endereço</NameInput>
            <Input name="cep" icon="home" placeholder="CEP" />
            <Input name="street" icon="home" placeholder="Rua" />
            <Input
              name="number"
              icon="home"
              placeholder="N°"
              keyboardType="numeric"
            />
            <Input name="neighborhood" icon="home" placeholder="Bairro" />
            <Input
              name="complement"
              icon="home"
              placeholder="Complemento (opicional)"
            />
            <Input name="city" icon="home" placeholder="Cidade" />
            <Input name="uf" icon="home" placeholder="Estado (sigla)" />
            <AreaRow>
              <NameInput>Serviços</NameInput>
              <Icon name="plus" size={22} onPress={() => plusServices()} />
            </AreaRow>
            {quantityServices.map((e: number, i: number) => (
              <AreaService key={`${e + i}`}>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="services"
                  icon="star"
                  placeholder="Serviço"
                />
                <AreaInput placeholder="Observação" />
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="price"
                  icon="dollar-sign"
                  placeholder="Valor"
                />
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="time"
                  icon="clock"
                  placeholder="Duração - média"
                />
                <AreaRemove>
                  <CreateAccount
                    onPress={() => {
                      removeService(i);
                    }}
                  >
                    Remover Serviço
                  </CreateAccount>
                </AreaRemove>
              </AreaService>
            ))}
            <AreaRow>
              <NameInput>Horários</NameInput>
              <Icon name="plus" size={22} onPress={() => plusTimer()} />
            </AreaRow>
            {quantityTimer.map((e: number, i: number) => (
              <>
                <AreaTimer>
                  <MetadeTimer>
                    <Input name="initialTimer" icon="clock" placeholder="Das" />
                  </MetadeTimer>
                  <MetadeTimer>
                    <Input name="initialTimer" icon="clock" placeholder="Até" />
                  </MetadeTimer>
                </AreaTimer>
                <AreaRemove>
                  <CreateAccount
                    onPress={() => {
                      removeTimer(i);
                    }}
                  >
                    Remover Horário
                  </CreateAccount>
                </AreaRemove>
              </>
            ))}

            <Button
              green={false}
              icon="log-out"
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Cadastrar
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

export default CadastroProvider;
