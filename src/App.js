import React, { useState } from "react";
import Card from "./components/card";
import "./App.css";

function App() {
  const [tariffs] = useState([
    {
      label: "tariff1",
      style: { background: "#9ffceb" },
      name: "Безлимитный 300",
      price: "руб 300 /мес",
      speed: "до 10 МБит/сек",
      description: "объем включенного трафика не ограничен",
    },
    {
      label: "tariff2",
      style: { background: "#9ffca8" },
      name: "Безлимитный 450",
      price: "руб 400 /мес",
      speed: "до 50 МБит/сек",
      description: "объем включенного трафика не ограничен",
    },
    {
      label: "tariff3",
      style: { background: "#fc9fa5" },
      name: "Безлимитный 550",
      price: "руб 550 /мес",
      speed: "до 100 МБит/сек",
      description: "объем включенного трафика не ограничен",
    },
    {
      label: "tariff4",
      style: { background: "#666" },
      name: "Безлимитный 1000",
      price: "руб 1000 /мес",
      speed: "до 200 МБит/сек",
      description: "объем включенного трафика не ограничен",
    },
  ]);

  /*const handleChange = (index) => {
    const selectedTariffs = [...tariffs];
    selectedTariffs[index].name = `выбран тариф ${tariffs[index].name}`;
    selectedTariffs[index].price = `за ${tariffs[index].price}`;
    selectedTariffs[index].speed = `скорость ${tariffs[index].speed}`;
    selectedTariffs[index].description = `${tariffs[index].description}`;
    setTariff(selectedTariffs);
  };*/

  const handleClick = (event) => {
    event.currentTarget.style.animation = "myAnim 2s ease 0s 1 normal none";
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
            style={{
              width: "25vw",
              height: "25vw",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              animation: "box-shadow 3s ease",
              cursor: "pointer",
            }}
            onClick={handleClick}
            //объединить изменение стилей и данных в элементе
            /*onClick={() => {
              handleChange(index);
            }}
            key={index}*/
          >
            <Card
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
