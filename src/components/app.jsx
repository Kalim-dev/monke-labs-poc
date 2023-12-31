import { Box } from '@mui/material'
import { Route, Routes } from 'react-router'
import ProductCart from './cart'
import ProductCheckout from './checkout'
import ProductDetails from './product-details'
import ProductList from './product-list'
import ProductCheckoutDone from './congrats'

function App() {

    return (<Box>
        <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/details/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<ProductCart />} />
            <Route path='/checkout' element={<ProductCheckout />} />
            <Route path='/done' element={<ProductCheckoutDone />} />
            <Route path='*' element={<p>Not Found</p>} />
        </Routes>
    </Box>)
}

export default App
