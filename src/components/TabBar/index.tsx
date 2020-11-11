import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, AreaIcon, Home, Search, Plus, Bell, User } from './styled';

interface TabBarColorProps {
  namePage: string;
}

const TabBar: React.FC<TabBarColorProps> = ({ namePage }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <AreaIcon onPress={() => navigation.navigate('Home')}>
        <Home isFocus={namePage === 'home'} name="home" size={20} />
      </AreaIcon>
      <AreaIcon onPress={() => navigation.navigate('Search')}>
        <Search isFocus={namePage === 'search'} name="search" size={20} />
      </AreaIcon>
      <AreaIcon onPress={() => navigation.navigate('NewScheduling')}>
        <Plus isFocus={namePage === 'plus'} name="circle-with-plus" size={20} />
      </AreaIcon>
      <AreaIcon onPress={() => navigation.navigate('Provider')}>
        <Bell isFocus={namePage === 'bell'} name="bell" size={20} />
      </AreaIcon>
      <AreaIcon onPress={() => navigation.navigate('Profile')}>
        <User isFocus={namePage === 'user'} name="user-circle" size={20} />
      </AreaIcon>
    </Container>
  );
};

export default TabBar;
