import React from 'react'
import LeftSidePanel from '../LeftSidePanel/LeftSidePanel'
import { Grid } from '@material-ui/core';
import RightSidePanel from '../RightSidePanel/RightSidePanel';

function Dashboard() {
  return (
    <React.Fragment>
        <Grid container spacing={2}>
        <Grid item xs={3}>
         <LeftSidePanel/>
        </Grid>
        <Grid item xs={9}>
         <RightSidePanel/>
        </Grid>
        </Grid>
        
    </React.Fragment>
  )
}

export default Dashboard