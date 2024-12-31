import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Typography, styled, Box } from "@mui/material";
import Balance from "./components/balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransations from "./components/NewTransations";
import Transactions from "./components/Transactions";

const Header = styled(Typography)`
  font-size: 40px;
  color: blue;
  text-transform: uppercase;
  text-align: center;
`;

const Component = styled(Box)`
  display: flex;
  background-color: white;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
   & > div {
    height: 70vh;
    width:50%;
    padding:10px;
  }
`;
function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "biryani", amount: -250 },
    { id: 2, text: "salary", amount: 2000 },
    { id: 3, text: "expense", amount: -250 },
    { id: 4, text: "bonus", amount: 1000 },
  ]);

  return (
    <Box style={{ backgroundColor: "lightgray", height: "100vh" }}>
      <Header>
        <p>Expense Tracker</p>
      </Header>
      <Component>
        <Box>
          <Balance transactions={transactions}/>
          <ExpenseCard transactions={transactions} />
          <NewTransations setTransactions={setTransactions} />
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions} />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
