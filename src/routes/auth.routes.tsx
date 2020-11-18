import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Auth/Login';
import CadastroUser from '../pages/Auth/CadastroUser';
import CadastroProvider from '../pages/Auth/CadastroProvider';
import SelectCadastro from '../pages/Auth/SelectCadastro';
import CreateService from '../pages/Auth/CadastroProvider/CreateService';
import CreateTime from '../pages/Auth/CadastroProvider/CreateTime';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#f4f4f4' },
    }}
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="CadastroUser" component={CadastroUser} />
    <Auth.Screen name="CadastroProvider" component={CadastroProvider} />
    <Auth.Screen name="SelectCadastro" component={SelectCadastro} />
    <Auth.Screen name="CreateService" component={CreateService} />
    <Auth.Screen name="CreateTime" component={CreateTime} />
  </Auth.Navigator>
);

export default AuthRoutes;
