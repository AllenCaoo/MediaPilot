import React from 'react'
import Box from '@mui/material/Box';


function displayBox() {
  return (
    <Grid item xs={12} md={8} lg={12}>
        <Paper sx={{ 
            p: 2, 
            display: 'flex', 
            flexDirection: 'column',
            height: 360
            }}>
        </Paper>
    </Grid>
  )
}

export default Grid