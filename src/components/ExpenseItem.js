import './ExpenseItem.css';

export const ExpenseItem = () => {
  const expenseDate = new Date(2021, 9, 28);
  const expenseTitle = 'Car insurance';
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};
