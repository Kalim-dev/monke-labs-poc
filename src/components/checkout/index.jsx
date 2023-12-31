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

const ProductCheckout = () => {
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
                            Checkout
                        </Typography>

                    </Stack>
                </Grid>
                <Grid item xs={12}>

                    <Typography variant="h5" color="#000" sx={{ fontWeight: 500 }}>
                        Payment
                    </Typography>

                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ width: '100%', minHeight: 200, p: 2, borderRadius: 5 }}>
                        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 2 }}>
                            <Stack direction={'row'} spacing={2} sx={{
                            }}>
                                <img src='/assets/images/checkout/card.png' />

                                <Typography variant="caption" color="#000"
                                    sx={{ fontWeight: 500, fontSize: 14, display: 'flex', alignItems: 'center' }}>
                                    Debit/Credit Card
                                </Typography>

                            </Stack>
                            <Radio />
                        </Stack>
                        <Divider />
                        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 2 }}>
                            <Stack direction={'row'} spacing={2}>
                                <img src='/assets/images/checkout/paypal.png' />

                                <Typography variant="caption" color="#000"
                                    sx={{ fontWeight: 500, fontSize: 14, display: 'flex', alignItems: 'center' }}>
                                    Paypal
                                </Typography>

                            </Stack>
                            <Radio defaultChecked />
                        </Stack>
                        <Divider />
                        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 2 }}>
                            <Stack direction={'row'} spacing={2}>
                                <img src='/assets/images/checkout/payoneer.png' />

                                <Typography variant="caption" color="#000"
                                    sx={{ fontWeight: 500, fontSize: 14, display: 'flex', alignItems: 'center' }}>
                                    Payoneer
                                </Typography>

                            </Stack>
                            <Radio />
                        </Stack>
                    </Card>


                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" color="#000" sx={{ fontWeight: 500 }}>
                        Delivery Details
                    </Typography>
                    <Typography variant="caption" color="#A1A1A1" sx={{ pt: 2, fontWeight: 400, fontSize: 16 }}>
                        <br />
                        789 Maple Street, Los Angeles,<br />
                        CA 90001<br />
                        (888) 987-6543<br />
                    </Typography>

                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" color="#000" sx={{ fontWeight: 500 }}>
                        Order Details
                    </Typography>
                    <Typography variant="caption" color="#A1A1A1" sx={{ pt: 2, fontWeight: 400, fontSize: 16 }}>
                        1x Green salad &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x Grilled steak<br />
                        1x fresh vegetable &nbsp;&nbsp;1x vegan cake <br />
                        1x Mixed salad<br />

                    </Typography>

                </Grid>





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

                        <Link to={"/done"}>

                            <Button variant="contained" size="large" sx={{ textTransform: 'none' }}>

                                Pay Now
                            </Button>
                        </Link>


                    </Stack>
                </Grid>

            </Grid>
        </Container>

    </Box >
}

export default ProductCheckout