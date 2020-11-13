import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 20px;
  align-items: center;
`;

export const AreaForm = styled.View`
  width: 100%;
  height: 85%;
  align-items: center;
`;

export const AreaSelect = styled.View`
  width: 100%;
  height: 50px;
  padding-left: 28px;
  background-color: transparent;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: #232129;
  align-items: center;
`;

export const ConfirmationView = styled.View`
  flex: 1;
  background: #f89;
`;

export const AreaSelectInput = styled.View`
  justify-content: center;
  border: 1px solid #000;
  width: 100%;
  height: 48px;
  border-radius: 10px;
  margin-bottom: 10px;

  padding-left: 16px;
  font-family: 'OdibeeSans-Regular';
  font-size: 20px;
`;

export const TextAreaSelect = styled.Text`
  color: #333;
  font-size: 16px;
  font-family: 'OdibeeSans-Regular';
`;
