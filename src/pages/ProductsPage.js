<<<<<<< HEAD
import React from "react";
import Plant1 from "../images/Plant 1.jpg";
import Plant2 from "../images/Plant 2.jpg";

const ProductsPage = () => {
  const plants = [
    { id: 1, name: "Plant 1", price: "$10", image: Plant1 },
    { id: 2, name: "Plant 2", price: "$15", image: Plant2 },
  ];

  return (
    <div>
      <h1>Our Plants</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{ textAlign: "center" }}>
            <img src={plant.image} alt={plant.name} style={{ width: "150px" }} />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
=======
import React from "react";
import Plant1 from "../images/Plant 1.jpg";
import Plant2 from "../images/Plant 2.jpg";

const ProductsPage = () => {
  const plants = [
    { id: 1, name: "Plant 1", price: "$10", image: Plant1 },
    { id: 2, name: "Plant 2", price: "$15", image: Plant2 },
  ];

  return (
    <div>
      <h1>Our Plants</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{ textAlign: "center" }}>
            <img src={plant.image} alt={plant.name} style={{ width: "150px" }} />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
>>>>>>> 2e02c47a8d4fa77067fb03a8d17ea976987e284f
