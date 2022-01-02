import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar } from '@mui/material';
import BottomAppBar from './components/BottomAppBar';

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>

      <Toolbar />
      내용
      <BottomAppBar />
    </main>
  );
}

export default App;
