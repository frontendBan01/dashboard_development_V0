import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ProjectsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, border: 'none' }} aria-label='simple table'>
        <TableHead sx={{ background: '#F4F3FC' }}>
          <TableRow>
            <TableCell sx={{ border: 'none' }}>{''}</TableCell>
            <TableCell sx={{ border: 'none' }} align='right'>
              Calories
            </TableCell>
            <TableCell sx={{ border: 'none' }} align='right'>
              Fat&nbsp;(g)
            </TableCell>
            <TableCell sx={{ border: 'none' }} align='right'>
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell sx={{ border: 'none' }} align='right'>
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{ border: 'none', background: '#F4F3FC' }}
                component='th'
                scope='row'
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ border: 'none' }} align='right'>
                {row.calories}
              </TableCell>
              <TableCell sx={{ border: 'none' }} align='right'>
                {row.fat}
              </TableCell>
              <TableCell sx={{ border: 'none' }} align='right'>
                {row.carbs}
              </TableCell>
              <TableCell sx={{ border: 'none' }} align='right'>
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTable;
