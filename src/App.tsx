import { useContext } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import { ThemeContext } from './context/AppContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === 'dark' ? 'dark' : 'light'} h-[100vh] bg-background_primary px-[24px] py-[30px] font-space_mono dark:bg-background_primary_dark`}
    >
      <Header />
      <Main />
    </div>
  );
};

export default App;
