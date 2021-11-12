import { useState } from 'react';
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export const Expenses = props => {
  const list = [...props.expenses];
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = list.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let displayFilteredExpenses = (
    <p style={{ color: 'white' }}>No expenses found</p>
  );

  if (filteredExpenses.length > 0) {
    displayFilteredExpenses = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className={'expenses'}>
      <ExpensesFilter
        defaultYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {displayFilteredExpenses}
    </Card>
  );
};
