import "./ExpenseItem.css";
import { Button } from "antd";
function ExpenseItem(props) {
  // const expenseDate = new Date(20, 10, 2012);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = "$294.67";
  return props.data.map((e) => {
    return (
      <div className="expense-item">
        <div className="expense-item__description">{e.create_date}</div>
        <div className="expense-item__description">{e.title}</div>
        <div className="expense-item__amount">{e.amount}</div>
        <Button style={{ background: "#455", color: "#fff" }}>onclick</Button>
      </div>
    );
  });
}
export default ExpenseItem;
