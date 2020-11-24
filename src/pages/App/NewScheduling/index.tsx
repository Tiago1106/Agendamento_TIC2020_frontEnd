import React, { useRef, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Form, FormHandles } from '@unform/core';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';

import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { numberMonth, dateMask, hourMask } from '../../../utils/trasnforms';

import {
  Container,
  AreaSelect,
  AreaForm,
  ConfirmationView,
  AreaSelectInput,
  TextAreaSelect,
} from './styles';

const services = [
  {
    id: '1',
    nameService: 'teste 1',
    timerService: '40',
  },
  {
    id: '2',
    nameService: 'teste 2',
    timerService: '60',
  },
  {
    id: '3',
    nameService: 'teste 3',
    timerService: '90',
  },
];

interface ServiceProps {
  id: string;
  name: string;
  note: string;
  value: string;
}
interface ProviderProps {
  id: string;
  name: string;
  services: ServiceProps[];
}

const NewScheduling: React.FC = ({ route }: any) => {
  const { id } = route.params;
  const { user } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [provider, setProvider] = useState<ProviderProps>();

  useEffect(() => {
    async function showProvider(): Promise<void> {
      const { data } = await api.get(`/provider/${id}`);
      setProvider(data);
    }
    showProvider();
  }, [id]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerTimeVisible, setDatePickerTimeVisibility] = useState(
    false,
  );

  const [selectService, setSelectService] = useState('');

  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const showDatePicker = (): void => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = (): void => {
    setDatePickerTimeVisibility(true);
  };

  const hideDatePicker = (): void => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = (): void => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date): void => {
    const newDatePicker = format(date, 'dd/MM/yyyy');

    setNewDate(newDatePicker);
    hideDatePicker();
  };

  const handleTimeConfirm = (date: Date): void => {
    const newTimePicker = format(date, 'hh:mm');

    setNewTime(newTimePicker);
    hideDatePicker();
  };

  async function createSchenduling(): Promise<void> {
    try {
      const newData = {
        provider_id: id,
        service_id: selectService,
        date: newDate,
        time: newTime,
        user_id: user.id,
      };

      await api.post('/appointments', newData);
      Alert.alert('', 'Agendado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('', 'Agendamento com erro, tente novamento!');
    }
  }

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header title="Novo agendamento" />
      <Container>
        <AreaForm>
          <Form ref={formRef} onSubmit={() => console.log('asd')}>
            <Input
              name="nameprovider"
              defaultValue={provider?.name}
              editable={false}
              icon="home"
            />
            <AreaSelect>
              <Picker
                selectedValue={selectService}
                style={{ height: 50, width: '100%' }}
                onValueChange={(itemValue) =>
                  setSelectService(itemValue.toString())
                } // eslint-disable-line
              >
                <Picker.Item label="Selecione o serviço" value="notService" />
                {provider?.services.map((service: ServiceProps) => (
                  <Picker.Item
                    color="#333"
                    key={service.id}
                    label={`${service.name} - R$${service.value}`}
                    value={service.id}
                  />
                ))}
                {/* {services.map((item) => (
                  <Picker.Item
                    color="#333"
                    key={item.id}
                    label={item.nameService}
                    value={item.nameService}
                  />
                ))} */}
              </Picker>
            </AreaSelect>

            <AreaSelectInput>
              <TextAreaSelect onPress={showDatePicker}>
                {newDate === '' ? 'dd/mm/aaaa' : dateMask(newDate)}
              </TextAreaSelect>
            </AreaSelectInput>
            <AreaSelectInput>
              <TextAreaSelect onPress={showTimePicker}>
                {newTime === '' ? 'hh:mm' : hourMask(newTime)}
              </TextAreaSelect>
            </AreaSelectInput>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              cancelTextIOS="Cancelar"
              confirmTextIOS="Confirmar"
            />
            <DateTimePickerModal
              isVisible={isDatePickerTimeVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
              cancelTextIOS="Cancelar"
              confirmTextIOS="Confirmar"
            />
          </Form>
        </AreaForm>
        <Button green icon="plus" onPress={() => createSchenduling()}>
          Cadastrar novo agendamento
        </Button>
      </Container>
    </View>
  );
};

export default NewScheduling;
