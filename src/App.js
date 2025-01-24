// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Game from "./Game";
import Whynow from "./Whynow";
import TicTacToe from "./TicTacToe";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

// This is the markup syntax called JSX. It is stricter than HTML.
// You can only use it once per function and you have to wrap them into a shared parent, like a <div></div> or an empty wrapper <></>
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there. <br />
        How do you do?
      </p>
    </>
  );
}

function DataDisplay() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
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
        <Router>
          <TittleMessage />
          <Navbar />
          <Routes>
            <Route path="/thinkingreact" element={<Navbar />} />
          </Routes>
          <MyButton />
          <DisplayMath />
          <AnotherRandomMessage />
          <AboutPage />
          <DataDisplay />
          <ShoppingList />
          <AnotherButton />
          <ButtonTwo />
          <Game />
          <Whynow />
          <TicTacToe />
        </Router>
      </header>
    </div>
  );
}

// This is a test to push code

export default App;
