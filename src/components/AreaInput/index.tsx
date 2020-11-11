import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps {
  name?: string;
}

const AreaInput: React.FC<InputProps> = ({ name, ...rest }) => {
  return <Container {...rest} />;
};

export default AreaInput;
