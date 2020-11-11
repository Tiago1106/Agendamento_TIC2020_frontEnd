import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

import BackgroundImage from '../../../assets/backgroundImage.jpg';
import LogoImage from '../../../assets/Logo.png';

import Button from '../../../components/Button';

import {
  Container,
  AreaLogo,
  ImageLogo,
  Title,
  SubTitle,
  AreaProvider,
  Icon,
  IconF,
  AreaSelect,
} from './styles';

const SelectCadastro: React.FC = () => {
  const navigation = useNavigation();

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
        }}
      >
        <AreaLogo>
          <ImageLogo source={LogoImage} />
        </AreaLogo>
        <Title>Jeito fácil de agendar serviços</Title>
        <AreaSelect>
          <SubTitle>Qual a sua modalidade?</SubTitle>
        </AreaSelect>
        <Button
          green={false}
          onPress={() => navigation.navigate('CadastroUser')}
          icon="log-in"
        >
          Cadastrar cliente
        </Button>
        <AreaProvider>
          <Icon name="perm-contact-calendar" size={20} />
          <SubTitle onPress={() => navigation.navigate('CadastroProvider')}>
            Cadastrar prestador de serviço
          </SubTitle>
        </AreaProvider>
        <AreaProvider>
          <IconF name="log-out" size={20} />
          <SubTitle onPress={() => navigation.navigate('Login')}>
            Voltar ao login
          </SubTitle>
        </AreaProvider>
      </Container>
    </ImageBackground>
  );
};

export default SelectCadastro;
