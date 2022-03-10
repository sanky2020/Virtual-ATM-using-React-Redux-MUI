import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const columns = [
  { id: 'date', label: 'Date', minWidth: 50 },
  { id: 'time', label: 'Time', minWidth: 50 },
  {
    id: 'accType',
    label: 'Action Type',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'balance',
    label: 'Current-Balance',
    minWidth: 50,
    align: 'right',
  },
];

export default function StickyHeadTable(props) {
  
  let rows=props.rows;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
    
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', margin:"1rem auto" }}>
    <Typography variant='h6'>Statement:</Typography>
      <TableContainer sx={{ maxHeight: 400,width:'98%' }}>
        <Table stickyHeader aria-label="sticky table" style={{width:'98%',border: '1px solid #E7EBF0' }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                style={{border: '1px solid #E7EBF0'}}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.time}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5 , 10 , 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
