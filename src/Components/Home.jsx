import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';


const Home = () => {
    return (
        <Container maxWidth="lg">
            <Box my={5}>
            <Typography variant="h3" component="h2" align="center">React JS Crud</Typography>
            <Typography component="h2" align="center">Using Json Server</Typography>
            </Box>
        </Container>
    )
}

export default Home;