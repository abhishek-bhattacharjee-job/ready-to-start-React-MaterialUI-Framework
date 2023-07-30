import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import LeftBar from './../common/LeftBar';
import Header from './../common/Header';

const TableContentPage = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 120 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'occupation', headerName: 'Occupation', width: 200 },
    { field: 'city', headerName: 'City', width: 150 }
  ];

  const rows = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com', gender: 'Male', occupation: 'Engineer', city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', gender: 'Female', occupation: 'Designer', city: 'San Francisco' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com', gender: 'Male', occupation: 'Teacher', city: 'Chicago' },
    { id: 4, name: 'Alice Williams', age: 28, email: 'alice@example.com', gender: 'Female', occupation: 'Doctor', city: 'Los Angeles' },
    { id: 5, name: 'Michael Brown', age: 35, email: 'michael@example.com', gender: 'Male', occupation: 'Accountant', city: 'Houston' },
    { id: 6, name: 'Emily Davis', age: 32, email: 'emily@example.com', gender: 'Female', occupation: 'Lawyer', city: 'Washington, D.C.' },
    { id: 7, name: 'William Wilson', age: 45, email: 'william@example.com', gender: 'Male', occupation: 'Writer', city: 'Boston' },
    { id: 8, name: 'Olivia Miller', age: 27, email: 'olivia@example.com', gender: 'Female', occupation: 'Software Developer', city: 'Seattle' },
    { id: 9, name: 'James Taylor', age: 38, email: 'james@example.com', gender: 'Male', occupation: 'Sales Manager', city: 'Dallas' },
    { id: 10, name: 'Sophia Martinez', age: 29, email: 'sophia@example.com', gender: 'Female', occupation: 'Marketing Specialist', city: 'Miami' },
    { id: 11, name: 'Daniel Lee', age: 33, email: 'daniel@example.com', gender: 'Male', occupation: 'Chef', city: 'Las Vegas' },
    { id: 12, name: 'Isabella Johnson', age: 24, email: 'isabella@example.com', gender: 'Female', occupation: 'Artist', city: 'San Diego' },
    { id: 13, name: 'Alexander Brown', age: 31, email: 'alexander@example.com', gender: 'Male', occupation: 'Architect', city: 'Atlanta' },
    { id: 14, name: 'Charlotte Davis', age: 36, email: 'charlotte@example.com', gender: 'Female', occupation: 'Financial Analyst', city: 'Philadelphia' },
    { id: 15, name: 'Matthew Wilson', age: 41, email: 'matthew@example.com', gender: 'Male', occupation: 'HR Manager', city: 'Denver' }
  ];


  return (
    <>
      <Box className="body">
        <Grid className="bodyContainer" container spacing={0}>
          <Grid item xs={2}>
            <LeftBar />
          </Grid>
          <Grid item xs={10}>
            <Header />

            <Box
              sx={{
                mt: '40px',
                p: '20px',
                borderRadius: '16px',
                backgroundColor: '#f4f6f86e',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                animation: 'fadeIn 1s ease',
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1} textTransform="uppercase">
                📊 Table Content Page:
              </Typography>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TableContentPage;
