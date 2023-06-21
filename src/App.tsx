import React from 'react';
import NavBar from './Components/NavBar'
import HomePage from './Components/Home'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
 root: {
  background: '#f48fb1'
 }
})
// #d496b4

function App() {
  const classes = useStyles()

  
  return (
    <div 
    className={classes.root}
    >
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
