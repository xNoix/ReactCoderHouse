import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Box>
      <Navbar />
      <ItemListContainer />
    </Box>
  );
}

export default App;
