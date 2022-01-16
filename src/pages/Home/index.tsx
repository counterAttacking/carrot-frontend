import { Avatar, List, ListItem, ListItemAvatar, ListItemButton } from "@mui/material";
import { Box } from "@mui/system";
import TradeInformation from "./components/TradeInformation";
import { tradeItems } from "./data";

const Home = (): JSX.Element => {
    const ImageTheme = {
        width: "150px",
        height: "150px",
    };

    return (
        <Box>
            <List>
                {tradeItems.map((item): JSX.Element => {
                    return (
                        <ListItem key={item.id}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        src={item.imageUrl}
                                        sx={ImageTheme}
                                    />
                                </ListItemAvatar>
                                <TradeInformation
                                    title={item.title}
                                    location={item.location}
                                    createdAt={item.createdAt}
                                    updatedAt={item.updatedAt}
                                    price={item.price} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default Home;