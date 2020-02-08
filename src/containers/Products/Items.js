import React from 'react'
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import Grid from '@material-ui/core/Grid';
import SpinnerMui from '../../components/SpinnerMUI/SpinnerMui';


const Items = ({ items, loading }) => {
    let products = items.map((e) => (
        <Grid item xs={12} md={4} lg={4} key={e._id}>
            <ProductListItem img={e.productImage}
                title={e.title} price={e.price} id={e._id} />
        </Grid>
    ))
    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SpinnerMui />
        </div>

    }
    return (
        <Grid container spacing={3}>
            {products}
        </Grid>
        
    )
}

export default Items;



