import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="font-mono text-gray-200 text-center">
        Here i will learn react query form basic to advance.
      </h1>

      <Link to={"/products-page"}>Go to Product Page</Link>
      <br />
      <Link to={"/product-page-details"}>Go to Product Page details</Link>
    </>
  );
}

export default App;
