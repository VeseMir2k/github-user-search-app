import { createContext, ReactNode, useEffect, useState } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

interface UserContextProps {
  user: string;
  userData: object;
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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState('deoomen');
  const [userData, setUserData] = useState({});
  const [userDataError, setUserDataError] = useState(false);

  const updateUser = (value: string) => {
    setUser(value);
  };

  const updateUserData = () => {
    fetchUserData();
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      if (!response.ok) {
        setUserDataError(true);
        throw new Error('Failed to fetch user data');
      }
      setUserDataError(false);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
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
