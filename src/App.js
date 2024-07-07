import React from "react";
import './style.css'
// import Header from './components/Header';
// import Item from './components/Item';
// import Button from "./components/Button";
// // import CounterComponent from "./components/CounterComponent";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";

// const App = () => {
//   return (
//     <div>
//       <Header />
//     <div className="todo-container">
//       {/* <CounterComponent/> */}
//       <Item name="Eat"/>
//       <Item completed={true} name="Sleep"/>
//       <Item name="Code"/>
//       <Item name="Drink"/>
//       <Item name="Class"/>
//       <Button/>
//       <Timer/>
//     </div>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <TodoList />
      <Timer/>
    </div>
  );
}

export default App;