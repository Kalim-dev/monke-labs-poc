import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProductCard from '../common/product';
import { categories, products } from '../../data';
import { Card, CardContent, IconButton, Stack } from '@mui/material';
import { HeartIcon } from '@/assets/svg';
import { SearchOutlined } from '@mui/icons-material';



const ProductList = () => {
    return <Box>

        <CssBaseline />
        <Container>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Stack mt={4} direction={'row'} spacing={2}
                        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignContent: 'center' }}>

                        <Box>
                            <Typography variant="h5" >
                                Hey Daniyal
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                                Its Dinner time
                            </Typography>

                        </Box>
                        <SearchOutlined />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack mt={0} direction={'row'} spacing={2}
                        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignContent: 'center' }}>

                        <Typography variant="body1" >
                            Categories
                        </Typography>
                        <Typography variant="body1" color={`#E74C1B`}>
                            See all
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item container xs={12} spacing={1}>

                    {categories.map(cat =>
                        <Grid item xs={6} sm={4} key={cat.name}>
                            <Card sx={{
                                width: "100%", background: cat.color, height: '71px', borderRadius: '10px',
                                backgroundImage: `url(assets/images/categories/${cat.img}.png)`,
                                backgroundPosition: '100%', backgroundRepeat: 'no-repeat'
                            }} >
                                <CardContent>
                                    <Typography variant='body1' sx={{ fontSize: 14 }} >
                                        {cat.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>)}
                </Grid>

                <Grid item xs={12}>
                    <Stack mt={0} direction={'row'} spacing={2}
                        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignContent: 'center' }}>

                        <Typography variant="body1" >
                            Recommended Items
                        </Typography>
                        <Typography variant="body1" color={`#E74C1B`}>
                            Filters
                        </Typography>
                    </Stack>
                </Grid>

                {products.map(p => <Grid item xs={6} sm={6} md={4} lg={3}>
                    <ProductCard product={p} />
                </Grid>)}

            </Grid>
        </Container>

    </Box >
}

export default ProductList