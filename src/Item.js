import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './store/itemSlice';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

const Item = ({data}) => {
    const {id, title, price, thumbnail, rating} = data
    const cart = useSelector(state => state.items.items)
    const isExists = cart.some(p => p.id === data.id)

    const dispatch = useDispatch()
    
    return (
            <Card sx={{ maxWidth: 255, 
                        height: '100%', 
                        textAlign: 'center', 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'space-between'}} id={id}>
                <CardMedia
                    height="140"
                    component="img"
                    image={thumbnail}
                />
                <Typography component="div" variant="subtitle2">
                    {title}
                </Typography>
                <Stack>
                    <Rating name="read-only" value={data.rating} readOnly size='small' sx={{ alignSelf: 'center'}}/>
                </Stack>
                
                {!isExists ? <Button variant="outlined"
                                     onClick={()=> dispatch(addItem(data))}>
                                        {price} $
                            </Button> 
                            : <Typography variant="caption" display="block" gutterBottom>
                                Already in card  
                             </Typography>
                } 
            </Card>   
    )
}
export default Item