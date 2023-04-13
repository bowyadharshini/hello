import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import GridAntd from "./components/GridAntd";
import Samplecard from "./components/Samplecard";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      create_date: new Date("2020-08-14").toDateString(),
    },
    {
      id: "e2",
      title: "Exam paper",
      amount: 93.32,
      create_date: new Date("2020-08-13").toDateString(),
    },
    {
      id: "e3",
      title: "fair paper",
      amount: 95.42,
      create_date: new Date("2020-08-20").toDateString(),
    },
  ];
  return (
    <div>
      <h1 style={{ color: "red" }}>Hello World,Let's get Started</h1>
      <ExpenseItem data={expenses} />
      <Samplecard />
    </div>
  );
}
export default App;
