import React from "react";
import { Typography, styled, Box } from "@mui/material";

const BalanceText = styled(Typography)`
  margin-bottom: 20px;
  font-size: 25px;

  text-align: center;
`;
function Balance({transactions}) {
  const amount = transactions.map(transaction=> transaction.amount );
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance: Rs:{total}</BalanceText>
    </Box>
  );
}

export default Balance;
