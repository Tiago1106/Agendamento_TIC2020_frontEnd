import React, { useRef, useState } from 'react';
import { View, Alert } from 'react-native';
import { Form, FormHandles } from '@unform/core';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { numberMonth, dateMask, hourMask } from '../../../utils/trasnforms';

import { Container, AreaSelect, AreaForm } from './styles';

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

const NewScheduling: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerTimeVisible, setDatePickerTimeVisibility] = useState(
    false,
  );

  const [selectService, setSelectService] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  function selectDate(data: Date): void {
    const newData = data.toString();
    const month = newData.substring(4, 7);
    const newDay = newData.substring(8, 10);
    const newYear = newData.substring(11, 15);
    const newMonth = numberMonth(month);
    setNewDate(`${newDay}/${newMonth}/${newYear}`);
  }

  function selectHour(hour: Date): void {
    const newHour = hour.toString().substring(16, 21);
    setNewTime(newHour);
  }

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
    const newData = {
      nameProvider: 'Salão dos brother',
      nameSelect: selectService,
      date: newDate,
      time: newTime,
    };
    console.log(newData);
    Alert.alert('', 'Agendado com sucesso!');
    // navigation.navigate('Home');
  }

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header title="Novo agendamento" />
      <Container>
        <AreaForm>
          <Form ref={formRef} onSubmit={() => console.log('asd')}>
            <Input
              name="nameprovider"
              defaultValue="Salão dos brother"
              editable={false}
              icon="home"
            />
            <AreaSelect>
              <Picker
                selectedValue={selectService}
                style={{ height: 50, width: '100%' }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectService(itemValue.toString())
                } // eslint-disable-line
              >
                <Picker.Item label="Selecione o serviço" value="notService" />
                {services.map((item) => (
                  <Picker.Item
                    color="#333"
                    key={item.id}
                    label={item.nameService}
                    value={item.nameService}
                  />
                ))}
              </Picker>
            </AreaSelect>
            <Input
              name="date"
              icon="calendar"
              onChangeText={(text) => setNewDate(text)}
              value={dateMask(newDate)}
              maxLength={10}
              placeholder="dd/mm/aaaa"
            />
            <Input
              name="hour"
              icon="clock"
              onChangeText={(text) => setNewTime(text)}
              value={hourMask(newTime)}
              maxLength={5}
              placeholder="hh:mm"
            />
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
            <Button onPress={showDatePicker}>Clica Date</Button>
            <Button onPress={showTimePicker}>Clica Time</Button>
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
