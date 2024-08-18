import React, { useState } from "react";
import { TARIFFS } from "./components/tariffs.jsx";
import Card from "./components/card";
import "./App.css";

function App() {
  const [tariffs, setTariff] = useState(TARIFFS);

  const handleChange = (index) => {
    setTariff(tariffs.map((tariffItem, indexValue) => ({
      ...tariffItem,
      selected: indexValue === index ? true: false
    })));
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
      }}
    >
      {tariffs.map((itemTariff, index) => {
        return (
          <div
            onClick={() => {
              handleChange(index);
            }}
            key={index}
            className="cardActive"
          >
            <Card
              selected={itemTariff.selected}
              style={itemTariff.style}
              key={index}
              name={itemTariff.name}
              price={itemTariff.price}
              speed={itemTariff.speed}
              description={itemTariff.description}
            />
          </div>
        );
      })}
    </div>
  );
}
export default App;
