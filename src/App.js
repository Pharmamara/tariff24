import React, { useState } from "react";
import { TARIFFS } from "./components/tariffs.jsx";
import Card from "./components/card";
import "./App.css";

function App() {
  const [tariffs, setTariff] = useState(TARIFFS);

  const handleChange = (index) => {
    const selectedTariffs = [...tariffs];
    selectedTariffs[index].className = "cardActive";
    selectedTariffs[index].name = `выбран тариф ${tariffs[index].name}`;
    selectedTariffs[index].price = `за ${tariffs[index].price}`;
    selectedTariffs[index].speed = `скорость ${tariffs[index].speed}`;
    selectedTariffs[index].description = `${tariffs[index].description}`;
    setTariff(selectedTariffs);
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
      {tariffs.map((Tariffs, index) => {
        return (
          <div
            onClick={() => {
              handleChange(index);
            }}
            key={index}
          >
            <Card
              className="cardActive"
              style={Tariffs.style}
              key={index}
              name={Tariffs.name}
              price={Tariffs.price}
              speed={Tariffs.speed}
              description={Tariffs.description}
            />
          </div>
        );
      })}
    </div>
  );
}
export default App;
