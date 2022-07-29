import React, {useState} from 'react';
import { ListItem, Typography } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, removeItem} from './store/itemSlice'

const ShoppingCardItem = ({item}) => {
    const dispatch = useDispatch()
    const {amount} = item
    
    return (
        <ListItem
            sx={{minWidth: '360px'}}
            disablePadding
            >
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar
                        alt=''
                        src={item.avatar}
                    />
                </ListItemAvatar>
                <ListItemText id={item.id} 
                              primary={item.name} 
                              secondary={item.priceUpdated ? item.priceUpdated + '$' : item.price + '$'} 
                              sx={{color: 'blue'}}/>
                <Grid direction="row" spacing={1} sx={{ color: 'text.primary', 
                                                        border: '1px solid gray', 
                                                        borderRadius: '15px',
                                                        justifyContent: 'center', 
                                                        padding: '0 10px',
                                                        }}>
                    <AddIcon sx={{fontSize: 'medium', margin: '0 7px', verticalAlign: 'middle'}} onClick={() => dispatch(increment(item))}/>
                    <span>{amount}</span>
                    <RemoveIcon sx={{fontSize: 'medium', margin: '0 7px', verticalAlign: 'middle'}} onClick={() => dispatch(decrement(item))}/>
                </Grid>
                <DeleteIcon sx={{margin: '0 10px', color: 'gray'}} onClick={() => dispatch(removeItem(item))}/>
            </ListItemButton>
        </ListItem>
    )
}
export default ShoppingCardItem