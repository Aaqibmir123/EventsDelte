import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem(props) {
  const delet=(e)=>{
    if(e.target.classList.contains("delete-button")){
      console.log(e.target);
      e.target.parentElement.remove();
    }
    

  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={delet} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default ExpenseItem;