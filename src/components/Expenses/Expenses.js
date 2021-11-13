import { useState } from 'react';
import { Card } from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { ExpensesList } from './ExpensesList';

import './Expenses.css';

export const Expenses = props => {
  const list = [...props.expenses];
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = list.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={'expenses'}>
      <ExpensesFilter
        defaultYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
