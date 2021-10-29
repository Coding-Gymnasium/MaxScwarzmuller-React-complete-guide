import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';

export const Expenses = props => {
  const list = [...props.expenses];

  return (
    <Card className={'expenses'}>
      {list.map((expense, i) => {
        return (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};
