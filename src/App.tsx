import { useContext } from 'react';
import './App.css';
import Header from './components/header/Header';
import { ThemeContext } from './context/AppContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === 'dark' ? 'dark' : 'light'} font-space_mono bg-background_primary dark:bg-background_primary_dark h-[100vh] px-[24px] py-[30px]`}
    >
      <Header />
    </div>
  );
};

export default App;
