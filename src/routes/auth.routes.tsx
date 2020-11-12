import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Auth/Login';
import CadastroUser from '../pages/Auth/CadastroUser';
import CadastroProvider from '../pages/Auth/CadastroProvider';
import SelectCadastro from '../pages/Auth/SelectCadastro';

import Home from '../pages/App/Home';
import Search from '../pages/App/Search';
import Profile from '../pages/App/Profile';
import NewScheduling from '../pages/App/NewScheduling';
import Provider from '../pages/App/Provider';
import Notification from '../pages/App/Notification';

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

    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Search" component={Search} />
    <Auth.Screen name="Profile" component={Profile} />
    <Auth.Screen name="NewScheduling" component={NewScheduling} />
    <Auth.Screen name="Provider" component={Provider} />
    <Auth.Screen name="Notification" component={Notification} />
  </Auth.Navigator>
);

export default AuthRoutes;
