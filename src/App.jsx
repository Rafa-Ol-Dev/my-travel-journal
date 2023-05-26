import React from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Data from "./data.js";

function App() {
  const cards = Data.map((item) => {
    return <Card 
              id={item.id}
              item={item} 
            />;
  });
  return (
    <>
      <Header />
      <section className="cards--list">
        {cards}
      </section>
    </>
  );
}

export default App;
