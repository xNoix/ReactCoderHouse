import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  const itemCount = 5; // Aquí debes obtener el número de elementos en el carrito desde tu estado o fuente de datos

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Aplicación
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Acerca de</Button>
        <Button color="inherit">Contacto</Button>
        <CartWidget itemCount={itemCount} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
