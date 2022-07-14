
import './App.css';

import { useState } from 'react';
import {Typography, styled} from '@mui/material';

//components
import Balance from './components/Balance';
import { Box } from '@mui/system';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  margin: 10px 0;
  color: #1483de;
  font-size: 34px;
  text-transform: uppercase;
  box-shadow: 5px 3px 6px #1483de;
`

const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  margin: auto;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Notebook', amount: -50},
    { id: 2, text: 'Salary', amount: 3000},
    { id: 3, text: 'Earphones', amount: -500},
    { id: 4, text: 'Bonus', amount: 1000 },
  ])
  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
        <Balance transactions ={transactions}/>
        <ExpenseCard transactions ={transactions}/>
        <NewTransaction setTransactions = {setTransactions}/>
        </Box>
        <Box>
        <Transactions transactions={ transactions } setTransactions = {setTransactions}/>
        </Box>
      </Component>
      
    </Box>
  );
}

export default App;
