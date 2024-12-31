import React, { useState } from "react";
import {
  Typography,
  styled,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,
  & div,
  & button {
    margin-top: 20px;
  }
`;
function NewTransations({ setTransactions }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };

    setTransactions((prevstate) => [transaction, ...prevstate]);

    // Clear the input fields
    setText("");
    setAmount("");
  };


  return (
    <Container>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        label="Enter expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={() => addTransaction()}>
        Add Transaction
      </Button>
    </Container>
  );
}

export default NewTransations;
