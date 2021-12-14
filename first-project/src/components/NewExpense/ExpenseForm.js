import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [hidden, setHidden] = useState(true);

  const titleChangeHandler = event => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date + 'T00:00'),
    };

    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  const formChangeHandler = () => setHidden(!hidden);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control" hidden={hidden}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control" hidden={hidden}>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control" hidden={hidden}>
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense_actions">
        <button hidden={hidden} onClick={formChangeHandler}>
          Cancel
        </button>
        <button type="submit" hidden={hidden}>
          Submit Expense
        </button>
      </div>

      <div className="new-expense_actions">
        <button hidden={!hidden} onClick={formChangeHandler}>
          Add New Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
