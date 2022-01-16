import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar } from '@mui/material';
import BottomAppBar from './components/BottomAppBar';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      <Home />
      <Toolbar />
      <BottomAppBar />
    </main>
  );
}

export default App;
