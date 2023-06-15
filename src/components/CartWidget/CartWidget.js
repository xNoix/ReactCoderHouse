import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';

function CartWidget({ itemCount }) {
  return (
    <div>
      <IconButton color="inherit">
        <Badge badgeContent={itemCount} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </div>
  );
}

export default CartWidget;

