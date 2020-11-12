import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Search" component={Search} />
    <Auth.Screen name="Profile" component={Profile} />
    <Auth.Screen name="NewScheduling" component={NewScheduling} />
    <Auth.Screen name="Provider" component={Provider} />
    <Auth.Screen name="Notification" component={Notification} />
  </Auth.Navigator>
);

export default AuthRoutes;
