import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, Grid, Box, Button, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ChatIcon from '@mui/icons-material/Chat';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>

      <Toolbar />
      내용

      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0
        }}>
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={MenuStyle}>
                  <HomeIcon />
                  홈
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={MenuStyle}>
                  <ArticleIcon />
                  동네생활
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={MenuStyle}>
                  <MyLocationIcon />
                  내 근처
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={MenuStyle}>
                  <ChatIcon />
                  채팅
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={MenuStyle}>
                  <PersonOutlineIcon />
                  나와 당근
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
}

export default App;
