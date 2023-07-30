import React, { Component } from 'react';
import { Box, TextField, Button, InputLabel } from '@mui/material';

class LoginPage extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      UserName:"",
      Password:""
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.LogIn = this.LogIn.bind(this);
  }
  handleUserNameChange(ev)
  {
    this.setState({ UserName: ev.target.value });
  }
  handlePasswordChange(ev)
  {
    this.setState({ Password: ev.target.value });
  }
  nextpage()
  {
    console.log(this.props);
    window.location.href = '/home';
  }
  LogIn()
  {
    if (this.state.UserName == "abhishek")
    {
      if (this.state.Password == "abhishek")
      {
        this.nextpage()
      }
    }
  }
  render()
  {
    return (
      <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
      }}>
        <Box sx={{
          marginTop: "1%",
          display: 'flex',
          flexDirection: 'column',
          alignItems: "center",
          width: "100%",
        }}>
          <h2>React + Material UI - Framework</h2>
          Please Login to proceed
        </Box>
        <Box
          sx={{
            width: 300,
            height: 250,
            marginTop: "5%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            boxShadow: "2px 2px 10px 0px #000"
        }}>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                width: "100%",
                padding: "15px 0px 0px 0px"
              }}>
                <TextField id="standard-basic" label="UserName" variant="standard" onChange={this.handleUserNameChange} />
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                width : "100%",
                padding: "15px 0px 0px 0px"
              }}>
                <TextField id="standard-basic" label="Password" type="password" variant="standard" onChange={this.handlePasswordChange} />
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                width : "100%",
                padding: "30px 0px 0px 0px"
              }}>
                <Button variant="contained" onClick={this.LogIn}>LogIn</Button>
              </Box>
        </Box>

        <Box sx={{
          marginTop: "1%",
          display: 'flex',
          flexDirection: 'column',
          alignItems: "center",
          width: "100%",
        }}>
          Username is "abhishek" and Password is "abhishek", login feature (authorization) is not implemented so other pages could be open by direct link
        </Box>
      </Box>
      </>
    );
  }
}
export default LoginPage;
