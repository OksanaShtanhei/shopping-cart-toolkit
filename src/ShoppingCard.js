import React from 'react';
import Grid from '@mui/material/Box';
import {useSelector} from 'react-redux';
import ShoppingCardItem from './ShoppingCardItem';
import List from '@mui/material/List';

const ShoppingCard = () => {
    const items = useSelector(state => state.items.items)
    return (
        <Grid container sx={{ position: 'absolute', 
                              right: 5, 
                              top: 3, 
                              backgroundColor: 'lightblue',
                              lineHeight: 2,
                              zIndex: 1,
                              minWidth: '30%',
                              borderRadius: '5px'
                              }}>
            <List dense sx={{ width: '100%', minWidth: 360 }}>
                {items && items.map(el => {
                    return (
                        <ShoppingCardItem item={el} key={el.id}/>
                    )
                })}
            </List>
        </Grid>
    )
}
export default ShoppingCard
//сравнивать ShoppingCard и data и делать кнопку неактивной?