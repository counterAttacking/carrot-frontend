import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Button from "./components/Button";
import Title from "./components/Title";
import Text from "./components/Text";
import Adult from "./components/Adult";
import Photo from "./components/Photo";
import Counter from "./components/Counter";
import Adder from "./components/Adder";
import WelcomeName from "./components/WelcomeName";
import ConditionalText from "./components/ConditionalText";
import HiddenName from "./components/HiddenName";
import Calculator from "./components/Calculator";
import { Container, Grid } from '@mui/material';

const Test = () => {
    /*const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key);
        if (event.key === 'h') {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    const [latestName, setLatestName] = useState("");
    const updateLatestName = (name: string) => {
        setLatestName(name);
    };

    return (
        <>
            <Title title="Title!" subTitle="Subtitle!" />
            <Text text="H1 tag" type="header" />
            <Text text="Strong tag" type="bold" />
            <Adult age={21} />
            <Adult age={19} />
            <Photo address="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" description="Google Logo" />
            <input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) =>
                console.log(event.currentTarget.value)} />
            <input type="text" onKeyDown={preventKeyDown} />
            <Counter defaultCount={0} />
            <Adder />
            <WelcomeName />
            <ConditionalText />
            <HiddenName />
            <Button name="hello" callback={updateLatestName} />
            <Button name="world" callback={updateLatestName} />
            <Button name="nextop" callback={updateLatestName} />
            <article>{latestName} is clicked!</article>
            <Calculator />
        </>
    );*/

    return (
        <Container style={{ backgroundColor: "#022fff" }}>
            <Grid container style={{ backgroundColor: "#ff2fff" }}>
                <Grid item xs={12} md={6}>
                    xs-12
                </Grid>
                <Grid item xs={12} md={6}>
                    xs-12
                </Grid>
            </Grid>
            <Grid container style={{ backgroundColor: "#ff9fff" }}>
                <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
                    xs-6
                </Grid>
                <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
                    xs-6
                </Grid>
                <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
                    xs-6
                </Grid>
                <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
                    xs-6
                </Grid>
            </Grid>
        </Container>
    );
};

export default Test;