import React, { Component } from 'react';
import { Box} from '@mui/material';

class Header extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <>
      <Box sx={{ bgcolor: '#101F33', color: '#fff', height:40, paddingTop: 2, textAlign: "center"}}>
        ( React + Material UI ) - Framework
      </Box>
      </>
    );
  }
}
export default Header;
