import { useState } from 'react';
import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export const Expenses = props => {
  const list = [...props.expenses];
  const [filteredYear, setFilteredYear] = useState('2020');
  // const [filteredList, setFilteredList] = useState(list);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    // setFilteredList(
    //   list.filter(
    //     expense =>
    //       expense.date.getFullYear() === parseInt(selectedYear),
    //   ),
    // );
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
      {filteredExpenses.map(expense => (
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
