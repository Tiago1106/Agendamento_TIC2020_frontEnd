import React, { useRef, useState } from 'react';
import { ImageBackground, Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { cpfMask, cnpjMask, cepMask } from '../../../utils/trasnforms';
import api from '../../../services/api';

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
  AreaRow,
} from './styles';

const CadastroProvider: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [isCpf, setIsCpf] = useState<boolean>(true);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [nameLocale, setNameLocale] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [cep, setCep] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');

  async function createProvider(): Promise<void> {
    try {
      const dataPost = {
        cep,
        city,
        cnpj,
        complement,
        cpf,
        email,
        name,
        nameLocale,
        neighborhood: bairro,
        noteLocale: notes,
        number,
        password,
        street,
        uf: state,
      };

      const { data } = await api.post('/provider', dataPost);

      Alert.alert('Aviso', 'Continua seu cadastro com seus serviços');
      navigation.navigate('CreateService', { id: data.id });
    } catch (err) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer cadastro, cheque as credenciais',
      );
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
          <AreaForm ref={formRef} onSubmit={createProvider}>
            <Title>Cadastro</Title>

            <Input
              name="name"
              icon="user"
              placeholder="Nome"
              value={name}
              onChangeText={(e) => setName(e)}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
            <AreaRow>
              <RadioButton
                value="first"
                status={isCpf === true ? 'checked' : 'unchecked'}
                onPress={() => setIsCpf(true)}
                color="#eb5425"
              />
              <NameInput>CPF</NameInput>
              <RadioButton
                value="second"
                status={isCpf === false ? 'checked' : 'unchecked'}
                onPress={() => setIsCpf(false)}
                color="#eb5425"
              />
              <NameInput>CNPJ</NameInput>
            </AreaRow>
            {isCpf ? (
              <Input
                name="cpf"
                placeholder="CPF"
                value={cpfMask(cpf)}
                onChangeText={(e) => {
                  setCpf(e);
                  setCnpj('');
                }}
                maxLength={14}
              />
            ) : (
              <Input
                name="cnpj"
                placeholder="CNPJ"
                value={cnpjMask(cnpj)}
                onChangeText={(e) => {
                  setCpf('');
                  setCnpj(e);
                }}
                maxLength={18}
              />
            )}
            <Input
              name="nameLocale"
              icon="home"
              placeholder="Nome do estabelecimento"
              value={nameLocale}
              onChangeText={(e) => setNameLocale(e)}
            />
            <AreaInput
              placeholder="Observação do estabelecimento"
              value={notes}
              onChangeText={(e) => setNotes(e)}
            />
            <NameInput>Endereço</NameInput>
            <Input
              name="cep"
              placeholder="CEP"
              value={cepMask(cep)}
              onChangeText={(e) => setCep(e)}
              maxLength={9}
            />
            <Input
              name="street"
              placeholder="Rua"
              value={street}
              onChangeText={(e) => setStreet(e)}
            />
            <Input
              name="number"
              placeholder="N°"
              keyboardType="numeric"
              value={number}
              onChangeText={(e) => setNumber(e)}
            />
            <Input
              name="neighborhood"
              placeholder="Bairro"
              value={bairro}
              onChangeText={(e) => setBairro(e)}
            />
            <Input
              name="complement"
              placeholder="Complemento (opicional)"
              value={complement}
              onChangeText={(e) => setComplement(e)}
            />
            <Input
              name="city"
              placeholder="Cidade"
              value={city}
              onChangeText={(e) => setCity(e)}
            />
            <Input
              name="uf"
              placeholder="Estado (sigla)"
              value={state}
              onChangeText={(e) => setState(e)}
              maxLength={2}
            />
            {/* <AreaRow>
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
            ))} */}

            <Button
              green={false}
              icon="log-out"
              onPress={() => {
                createProvider();
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

export default CadastroProvider;
