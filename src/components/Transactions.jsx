import React from "react";
import {
  Typography,
  styled,
  Box,
  Divider,
  List,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import Transaction from "./Transaction";

function Transactions({ transactions,setTransactions }) {
  return (
    <Box>
      <Typography
        variant="h4"
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        Transactions History
      </Typography>
      <Divider />
      <List>
        {transactions.map(transaction => (
          <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
        ))}
      </List>
    </Box>
  );
}

export default Transactions;
