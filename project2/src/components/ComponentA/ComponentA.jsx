import React, { useState, useEffect } from "react";
import { parseString } from "xml2js";

const ComponentA = () => {
  const [bg, setBg] = useState(null);
  useEffect(() => {
    fetch("https://boardgamegeek.com/xmlapi2/")
      .then((response) => response.text())
      .then((xml) => {
        parseString(xml, (err, result) => {
          if (err) {
            console.error("Error parsing XML:", err);
            return;
          }
          // Handle the JSON result here, for example, set it to state
          setBg(result);
          console.log(result);
        });
      })
      .catch((error) => console.error("Error fetching XML:", error));
  }, []);

  return <div>{bg}</div>;
};

export default ComponentA;
