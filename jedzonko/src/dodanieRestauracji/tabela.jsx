import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

 function Tabela({ rows, setRows }) {
   console.log("ROWS: ", rows);
   
  const HandleClick = (nazwa, cena, sklad) =>{

    console.log("ROW OD ID", rows.filter(rows => { return rows.nazwadania === nazwa && rows.cena === cena && rows.sklad === sklad}));
    setRows(
      rows.filter(rows => { return rows.nazwadania !== nazwa && rows.cena !== cena && rows.sklad !== sklad})
    )
    
  }
  
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nazwa dania</TableCell>
            <TableCell>Cena</TableCell>
            <TableCell>Składniki</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.nazwadania}</TableCell>
              <TableCell>{row.cena}</TableCell>
              <TableCell>{row.sklad}</TableCell>   
              <TableCell><Button onClick ={() => HandleClick(row.nazwadania,row.cena, row.sklad)}> <DeleteIcon/></Button></TableCell>    
             </TableRow>
          ))} 
        </TableBody>
      </Table>
    </Paper>
  );
}
export default Tabela;