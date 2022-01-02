import { AppBar, Toolbar, Grid, Box, Button, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ChatIcon from '@mui/icons-material/Chat';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

type MenuType = {
    title: string;
    icon: JSX.Element;
};

const MenuStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    padding: "10px 5px",
};

const BottomAppBar = (): JSX.Element => {
    const menuItems: MenuType[] = [
        {
            title: "홈",
            icon: <HomeIcon />
        },
        {
            title: "동네생활",
            icon: <ArticleIcon />
        },
        {
            title: "내 근처",
            icon: <MyLocationIcon />
        },
        {
            title: "채팅",
            icon: <ChatIcon />
        },
        {
            title: "나와 당근",
            icon: <PersonOutlineIcon />
        },
    ];
    return (
        <AppBar
            position="fixed"
            sx={{
                top: "auto",
                bottom: 0
            }}>
            <Toolbar>
                <Grid container>
                    {menuItems.map((item: MenuType): JSX.Element => {
                        return (
                            <Grid item xs key={item.title}>
                                <Box display="flex" justifyContent="center">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        disableElevation
                                        style={MenuStyle}>
                                        {item.icon}
                                        {item.title}
                                    </Button>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default BottomAppBar;