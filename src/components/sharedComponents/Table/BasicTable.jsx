import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Project from '../../Project/Project';

function createData(name, calories, fat, color, speed) {
  return { name, calories, fat, color, speed };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, '#79B62F', 9),
  createData('Ice cream sandwich', 237, 6.0, '#E57300', 9),
  createData('Eclair', 262, 16.0, '#CF3434', 9),
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ border: '1px solid black' }} aria-label='simple table'>
        <TableHead sx={{ backgroundColor: '#E7E6EA' }}>
          <TableRow sx={{ border: '1px solid black' }}>
            <TableCell sx={{ border: '1px solid black' }}>
              Dessert (100g serving)
            </TableCell>
            <TableCell sx={{ border: '1px solid black' }} align='right'>
              Calories
            </TableCell>
            <TableCell sx={{ border: '1px solid black' }} align='right'>
              Fat&nbsp;(g)
            </TableCell>
            <TableCell sx={{ border: '1px solid black' }} align='right'>
              Spped&nbsp;(g)
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
                <Project />
                <Project />
                <Project />
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
  );
};

export default BasicTable;
