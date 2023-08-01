import React ,{useState}from 'react';
//importing the css file
import './ExpenseForm.css';
//props is the object which has incomming parameter
//if we want to get the parameter we use prop. parameter name
 
const ExpenseForm = (props) => {
  //created the three use states to store the values
  // use state returns only two thing one is value storing, function to change value.
    const [enteredTitle, setEnteredTitle] =useState('');
    const [enteredAmount, setEnteredAmount] =useState('');
    const [enteredDate,setEnteredDate]=useState('');
    //calling the use state function to set values
    const titleChangeHandler = (event)=>{
      //event.target.value is place where user input stores.
     setEnteredTitle(event.target.value);
    };
    const amountChangeHandler =(event)=>{
       setEnteredAmount(event.target.value);
    };
    const dateChangeHandler =(event)=>{
        setEnteredDate(event.target.value);
    };
    //Form Submit Handling..
    const submitHandler =(event)=>{
        event.preventDefault();
        //making the all entered as an object- expenseData.
        const expenseData ={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        //passing the object expenseData:
        props.onSaveExpenseData(expenseData);
        //Making form empty
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
         {/* onChange event handler for user input  */}
         {/* value stores the user input when form is submited */}
         {/* Two way binding process : calling method to listen and storing the listned valued. */}
          <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enteredDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        {/* click button-Submitted with all the values title, amount, date.  */}
        <button type='submit' onClick={props.onCancle}>Cancle</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;