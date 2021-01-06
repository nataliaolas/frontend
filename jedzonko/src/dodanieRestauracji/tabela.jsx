import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


 function Tabela({ rows }) {
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
             </TableRow>
          ))} 
        </TableBody>
      </Table>
    </Paper>
  );
}
export default Tabela;