import ExpenseForm from './ExpenseForm';
import './NexExpense.css';

const NewExpense = props => {
  const saveExpenseDataHandler = EnteredExpenseData => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
