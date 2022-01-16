import { Box, Typography } from "@mui/material";
import moment from "moment";

type TradeInformationType = {
    title: string;
    location: string;
    createdAt: Date;
    updatedAt?: Date;
    price: number;
};

const TradeInformation = (information: TradeInformationType): JSX.Element => {
    const { title, location, createdAt, updatedAt, price } = information;
    const date = updatedAt != null ? moment(updatedAt) : moment(createdAt);
    const displayDate = date.format("YYYY-MM-DD HH:mm");

    return (
        <Box>
            <Typography
                variant="h5">
                {title}
            </Typography>
            <Typography
                variant="subtitle1"
                style={{ color: "rgba(0,0,0,0.5" }}>
                {location}*{displayDate}
            </Typography>
            <Typography
                variant="subtitle2">
                <strong>
                    {price}원
                </strong>
            </Typography>
        </Box>
    );
};

export default TradeInformation;