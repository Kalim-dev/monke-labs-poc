import { Button, IconButton, Stack } from '@mui/material';
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

const ProductDetails = () => {
    const { id } = useParams()


    const product = React.useMemo(() => {
        return products.find(p => p.id === Number(id))
    }, [id])

    return <Box>

        <CssBaseline />
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Stack mt={2} direction={'row'} spacing={2} sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>

                        <IconButton aria-label="delete">
                            <Link to="/"><KeyboardBackspaceIcon /></Link>
                        </IconButton>


                        <Typography variant="subtitle1" color="#000" sx={{ fontWeight: 500 }}>
                            <HeartIcon fill="none" />
                        </Typography>

                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" >
                        {product.name}
                    </Typography>
                    <Typography variant="caption" color={"#A1A1A1"} sx={{ fontSize: '18px', fontWeight: 500 }} >
                        By {product.category}
                    </Typography>
                </Grid>

                <Grid container item xs={12}  >

                    <Grid item xs={2} sm={2} md={4} justifyContent={'center'} alignContent={'center'} sx={{
                        display: 'flex',
                        backgroundImage: `url(/assets/images/cart-add.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '20%'
                    }}>


                    </Grid>
                    <Grid item xs={10} sm={10} md={8}

                        sx={{
                            backgroundImage: `url(/assets/images/product-detail-img.png)`,

                            height: 420,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '100%'

                        }}>

                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" >
                        Description
                    </Typography>
                    <Typography variant="caption" color={"#A1A1A1"} sx={{ fontSize: '16px', fontWeight: 500 }} >
                        By {product.desc}
                    </Typography>
                </Grid>


                <Grid item xs={12}>
                    <Stack mt={2} mb={4} direction={'row'} spacing={2} sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>


                        <Stack    >
                            <Typography color="#434141" sx={{ fontWeight: 400, fontSize: 18 }}>
                                Price
                            </Typography>

                            <Typography variant="subtitle1" color="#000" sx={{ fontWeight: 400, fontSize: 30 }}>
                                <Link to={"/cart"}> {product.price} <span style={{ color: "#E74C1B" }}>$</span></Link>
                            </Typography>

                        </Stack>

                        <Link to={"/cart"}>
                            <Button variant="contained" size="large" sx={{ textTransform: 'none' }}>Add to cart</Button>
                        </Link>

                    </Stack>
                </Grid>

            </Grid>
        </Container>

    </Box >
}

export default ProductDetails