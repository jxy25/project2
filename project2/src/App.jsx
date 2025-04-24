import ComponentA from "./components/ComponentA/ComponentA";
import React, { useState, useEffect } from "react";
import xml2js from "xml2js";
import ComponentB from "./components/ComponentB/ComponentB";

const App = () => {
  const [bg, setBg] = useState([]);
  const getData = async () => {
    ////GET
    // try {
    //   const res = await fetch("https://boardgamegeek.com/xmlapi2/", {
    //     headers: {
    //       Accept: "application/xml",
    //     },
    //   });
    //   .then(response => response.text())
    //   if (res.ok) {
    //     const data = await res.json();
    //     setBooks(data);
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <div>
      <ComponentB />
    </div>
  );
};

export default App;
