import { HeartIcon } from '@/assets/svg';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <Link to={`/details/${product.id}`}>
            <Card sx={{ height: "100%", borderRadius: '20px' }}>
                <CardMedia
                    sx={{ height: 172 }}
                    image={`/assets/images/products/img${product.img}.png`}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 500 }} component="div">
                        {product.name}
                    </Typography>

                    <Stack mt={4} direction={'row'} spacing={2}
                        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignContent: 'center' }}>
                        <Typography variant="subtitle1" color="#000" sx={{ fontWeight: 500 }}>
                            <span style={{ color: '#E74C1B' }}>$</span> {product.price}
                        </Typography>
                        <HeartIcon fill="none" viewBox={"0 -5 24 24"} />

                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
}