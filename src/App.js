import { createContext } from 'react';
import styles from './App.module.css';
import { useApp } from './data/hooks/useApp.page';
import Index from './ui/pages';

export const AppContext = createContext({});

function App() {

  const useAppValues = useApp();

  return (
    <div>
      <header className={styles["header"]}>
        <h1>Player<span>Music</span></h1>
      </header>
      <AppContext.Provider value={useAppValues}>
        <Index />
      </AppContext.Provider>
    </div>
  );
}

export default App;
