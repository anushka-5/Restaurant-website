import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <Container>
      <h1 className="text-center my-4">E-Commerce Store</h1>
      <ProductList />
    </Container>
  );
};

export default App;
