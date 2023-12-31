import { Button, Card, CardContent, CardMedia, IconButton, Stack } from '@mui/material';
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

const ProductCart = () => {
    const product = {}
    return <Box>

        <CssBaseline />
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Stack mt={2} direction={'row'} spacing={10} >

                        <IconButton aria-label="delete">
                            <Link to="/"><KeyboardBackspaceIcon /></Link>
                        </IconButton>


                        <Typography variant="h5" color="#000" sx={{ fontWeight: 500 }}>
                            My Bucket
                        </Typography>

                    </Stack>
                </Grid>


                {products.map(product => {
                    return <Grid item xs={12} key={product.name}>

                        <Card sx={{ display: 'flex', width: '100%', borderRadius: 6, p: 1 }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 100 }}
                                image={`/assets/images/products/img${product.img}.png`}
                                alt="Live from space album cover"
                            />
                            <CardContent sx={{ width: '100%' }} >
                                <Typography variant="body1" color="#000" sx={{ fontWeight: 500 }}>
                                    My Bucket
                                </Typography>

                                <Stack mt={2} direction={'row'} spacing={10} sx={{ width: '100%' }} >


                                    <Typography variant="caption" color="#A1A1A1" sx={{ fontWeight: 500 }}>
                                        Quantity: 1
                                    </Typography>
                                    <Typography variant="body1" color="#000" sx={{ fontWeight: 600 }}>
                                        <span style={{ color: '#E74C1B' }}>$</span> {product.price}
                                    </Typography>



                                </Stack>



                            </CardContent>

                        </Card>


                    </Grid>

                })}


                <Grid item xs={12}>
                    <Stack mt={2} mb={4} direction={'row'} spacing={2} sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>


                        <Stack    >
                            <Typography color="#434141" sx={{ fontWeight: 400, fontSize: 18 }}>
                                Total
                            </Typography>

                            <Typography variant="subtitle1" color="#000" sx={{ fontWeight: 400, fontSize: 30 }}>
                                <Link to={"/cart"}> 133.03 <span style={{ color: "#E74C1B" }}>$</span></Link>
                            </Typography>

                        </Stack>

                        <Link to={"/checkout"}>

                            <Button variant="contained" size="large" sx={{ textTransform: 'none' }}>

                                Checkout
                            </Button>
                        </Link>


                    </Stack>
                </Grid>

            </Grid>
        </Container>

    </Box >
}

export default ProductCart