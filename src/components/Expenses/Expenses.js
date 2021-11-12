import { useState } from 'react';
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const list = [...props.expenses];

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className={'expenses'}>
      <ExpensesFilter
        defaultYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {list.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
