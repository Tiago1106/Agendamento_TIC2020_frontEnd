import React, { useRef, useCallback } from 'react';
import { ImageBackground, TextInput, Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import getValidationErrors from '../../../utils/getValidationErrors';

import BackgroundImage from '../../../assets/backgroundImage.jpg';
import LogoImage from '../../../assets/Logo.png';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {
  Container,
  AreaLogo,
  ImageLogo,
  AreaLogin,
  Title,
  AreaForm,
  AreaCreateAccount,
  CreateAccount,
} from './styles';

interface SignInFormData {
  name: string;
  email: string;
  password: string;
}

const CadastroUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

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
            <Input
              name="name"
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                emailInputRef.current?.focus();
              }}
            />
            <Input
              ref={emailInputRef}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              autoCapitalize="none"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
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

export default CadastroUser;
