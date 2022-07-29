import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Badge from '@mui/material/Badge';
import {useSelector} from 'react-redux';
import ShoppingCard from './ShoppingCard';

export default function Navbar() {
  const selector = useSelector(state => state.items.items.length)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{position: 'relative'}}>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            SHOP
          </Typography>
          <IconButton aria-label="cart" sx={{marginLeft: 'auto'}} >
                <Badge badgeContent={selector} color="warning">
                    <ShoppingCartTwoToneIcon/>
                </Badge>
            </IconButton>
            <ShoppingCard/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
