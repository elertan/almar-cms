import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header1 from "./items/Header1";
import Header2 from "./items/Header2";

const items = [
  {
    type: "HEADER_1",
    data: {
      title: "Welkom!"
    }
  },
  {
    type: "HEADER_2",
    data: {
      title: "Ook welkom!"
    }
  }
];

const itemMapping = {
  "HEADER_1": Header1,
  "HEADER_2": Header2
};

function App() {
  return (
    <div className="App">
      {items.map((item, i) => {
        const Comp = itemMapping[item.type];
        return <Comp key={i} {...item.data} />
      })}
    </div>
  );
}

export default App;
