import { useContext } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import { ThemeContext } from './context/AppContext';

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const themeClass = theme === 'dark' ? 'dark' : 'light';

  return (
    <div
      className={`${themeClass} min-h-[100vh] bg-background_primary px-[24px] py-[30px] font-space_mono sm:flex sm:justify-center sm:px-0 sm:py-[100px] dark:bg-background_primary_dark`}
    >
      <div className='sm:w-[573px] '>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
