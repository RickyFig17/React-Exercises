// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Game from "./Game";
import Whynow from "./Whynow";
import TicTacToe from "./TicTacToe";
import Navbar from "./Navbar";
import DataDisplay from "./DataDisplay";
import AboutPage from "./About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ThinkingInReact from "./ThinkingReact";
import TodoList from "./TodoList";

function MyButton() {
  return <button>I'm a button</button>;
}
function TittleMessage() {
  return <h1>This is the beginning of a successful React career!</h1>;
}

function DisplayMath() {
  const add = 2 + 2;
  return add;
}

function AnotherRandomMessage() {
  const message =
    "This is scary and uncomfortable but I know I'll be successful at it. This is my time!";
  return message;
}

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function AnotherButton() {
  function handleClick() {
    alert("You clicked me!");
  }
  return <button onClick={handleClick}>Click me</button>;
}

function ButtonTwo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TittleMessage />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/thinkinginreact" element={<ThinkingInReact />} />
            <Route path="/datadisplay" element={<DataDisplay />} />
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/todolist" element={<TodoList />} />
          </Routes>
        </BrowserRouter>
        <MyButton />
        <DisplayMath />
        <AnotherRandomMessage />

        <ShoppingList />
        <AnotherButton />
        <ButtonTwo />
        <Game />
        <Whynow />
        {/* <TicTacToe /> */}
      </header>
    </div>
  );
}

// This is a test to push code

export default App;
