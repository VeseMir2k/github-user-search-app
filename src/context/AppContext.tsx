import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { fetchUserData } from '../services/service';
import { UserData } from '../types/types';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

interface UserContextProps {
  user: string;
  userData?: UserData;
  userDataError: boolean;
  updateUser: (value: string) => void;
  updateUserData: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
const UserContext = createContext<UserContextProps>({} as UserContextProps);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    return storedTheme ? storedTheme : preferredTheme;
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState('octocat');
  const [userData, setUserData] = useState<UserData>();
  const [userDataError, setUserDataError] = useState(false);

  const updateUser = (value: string) => {
    setUser(value);
  };

  const updateUserData = useCallback(() => {
    (async () => {
      const { data, error } = await fetchUserData(user);
      if (error) {
        setUserDataError(true);
      } else {
        setUserDataError(false);
        setUserData(data);
      }
    })();
  }, [user]);

  useEffect(() => {
    updateUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, userData, userDataError, updateUser, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export { AppProvider, ThemeContext, UserContext };
