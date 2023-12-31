import { Button, Card, CardContent, CardMedia, Checkbox, Divider, IconButton, Radio, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useParams } from 'react-router';
import { products } from '../../data';


import { HeartIcon } from '@/assets/svg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const ProductCheckoutDone = () => {
    const product = {}
    return <Box>

        <CssBaseline />
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Stack mt={2} direction={'row'} spacing={10} >

                        <IconButton aria-label="delete">
                            <Link to="/checkout"><KeyboardBackspaceIcon /></Link>
                        </IconButton>


                        <Typography variant="h5" color="#000" sx={{ fontWeight: 500 }}>

                        </Typography>

                    </Stack>
                </Grid>
                <Grid item xs={12} justifyContent={'center'} sx={{ display: 'flex' }}>

                    <img src='/assets/images/done.png' />

                </Grid>









                <Grid item xs={12}>
                    <Stack mt={2} mb={4} direction={'row'} spacing={2}
                        sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>




                        <Link to={"/"}>

                            <Button variant="contained" size="large" sx={{ textTransform: 'none' }}>

                                Return Home
                            </Button>
                        </Link>


                    </Stack>
                </Grid>

            </Grid>
        </Container>

    </Box >
}

export default ProductCheckoutDone