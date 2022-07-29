import Item from './Item';
import './App.css';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import useFetch from './useFetch'

function App() {
  const {data, loading} = useFetch('https://dummyjson.com/products')

  if(loading){
    return <h1 sx={{textAlign: 'center'}}>LOADING...</h1>
  } else {
    return (
      <>
        <Navbar/>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          {data && data.map(el => <Grid item xs={4} md={2} key={el.id}><Item data={el}/></Grid>)}
        </Grid>
      </> 
    );
  }
}

export default App;