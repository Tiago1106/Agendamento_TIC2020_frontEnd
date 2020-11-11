import React, { useRef, useCallback } from 'react';
import { ImageBackground, TextInput, Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../../hooks/auth';
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
  AreaForgot,
  SubTitle,
  Icon,
  AreaCreateAccount,
  CreateAccount,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail valido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      Alert.alert('Aviso', 'Você foi logado com sucesso');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais',
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
            <Title>Login</Title>
            <Input
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
            <AreaForgot>
              <SubTitle>Esqueci minha senha</SubTitle>
              <Icon name="unlock" size={16} />
            </AreaForgot>
            <Button
              green={false}
              icon="log-out"
              onPress={() => {
                // formRef.current?.submitForm();
                navigation.navigate('Home');
              }}
            >
              Realizar Login
            </Button>
          </AreaForm>
          <AreaCreateAccount>
            <CreateAccount
              onPress={() => navigation.navigate('SelectCadastro')}
            >
              Ainda não possui cadastro? Cliquei aqui
            </CreateAccount>
          </AreaCreateAccount>
        </AreaLogin>
      </Container>
    </ImageBackground>
  );
};

export default Login;
