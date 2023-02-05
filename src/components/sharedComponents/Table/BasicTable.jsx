import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Project from '../../Project/Project';
import ProjectModal from '../../Project/projectModal';
import { Box } from '@mui/system';
import { useCallback, useState } from 'react';

function createData(name, calories, fat, color, speed) {
  return { name, calories, fat, color, speed };
}

const rows = [
  createData('low', 159, 6.0, '#79B62F', 9),
  createData('Medium', 237, 6.0, '#E57300', 9),
  createData('High', 262, 16.0, '#CF3434', 9),
];



const BasicTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ border: '1px solid black' }} aria-label='simple table'>
        <TableHead sx={{ backgroundColor: '#E7E6EA'}}>
          <TableRow sx={{ border: '1px solid black' , backgroundColor: '#F4F3FC'}}>
            <TableCell sx={{ border: '1px solid black' }}>
              Risk Level
            </TableCell>
            <TableCell sx={{ border: '1px solid black' ,width: '20rem'}} align='left'>
              Pre-Constrution and approval
            </TableCell>
            <TableCell sx={{ border: '1px solid black' }} align='left'>
              Construction
            </TableCell>
            <TableCell sx={{ border: '1px solid black' }} align='left'>
              HandOver
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                sx={{
                  border: '1px solid black',
                  backgroundColor: `${row.color}`,
                }}
                component='th'
                scope='row'
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ border: '1px solid black' }} align='right'>
                <Box sx={{ display: 'flex' , flexWrap: 'wrap' }}>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project onClick={() => handleOpen()}/>
                </Box>
                
              </TableCell>
              <TableCell sx={{ border: '1px solid black' }} align='right'>
                <Project />
                <Project />
                <Project />
              </TableCell>
              <TableCell sx={{ border: '1px solid black' }} align='right'>
                <Project />
                <Project />
                <Project />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ProjectModal open = {open}/>
    </>
  );
};

export default BasicTable;
