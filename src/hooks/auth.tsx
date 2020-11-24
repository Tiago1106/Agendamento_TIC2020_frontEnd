import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface UserProps {
  email: string;
  name: string;
  id: string;
  password: string;
}
interface AuthState {
  token: string;
  user: UserProps;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserProps;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token: string;
  // updateUser(newUser: UserProps): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  const [tokens, setToken] = useState<string>('');

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@GoBarber:token',
        '@GoBarber:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });

        api.defaults.headers.Authorization = `Bearer ${token}`;
      }

      setLoading(false);
    }

    loadStorageData();
  });

  // const updateUser = useCallback(async ({ name, email, password, id }) => {
  //   const token = await AsyncStorage.getItem('@GoBarber:token');
  //   console.log('eafa');
  //   setData({
  //     token,
  //     user: {
  //       email,
  //       name,
  //       password,
  //       id,
  //     },
  //   });
  // }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password,
    });

    const x = response.data.token;
    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@GoBarber:token', x],
      ['@GoBarber:user', JSON.stringify(user)],
    ]);
    api.defaults.headers.Authorization = `Bearer ${x}`;

    setToken(x);

    setData({
      x,
      user,
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:user', '@GoBarber:token']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, token: tokens }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
