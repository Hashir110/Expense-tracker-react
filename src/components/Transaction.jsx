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
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Detailed = styled(ListItem)`
  margin-top: 10px;
`;
function Transaction({ transaction, setTransactions,transactions }) {
  const colors = transaction.amount > 0 ? "green" : "red";
 const deleteTransaction = (id) => {
   setTransactions(transactions.filter((transaction) => transaction.id !== id));
 };

  return (
    <Detailed style={{ background: `${colors}`, color: "#fff" }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItem>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
      </ListItem>
    </Detailed>
  );
}

export default Transaction;
