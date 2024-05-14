import { createContext, ReactNode, useEffect, useState } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

interface UserContextProps {
  user: string;
  dataUser: object;
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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState('');
  const [dataUser, setDataUser] = useState({});

  return <UserContext.Provider value={{ user, dataUser }}>{children}</UserContext.Provider>;
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export { AppProvider, ThemeContext };
