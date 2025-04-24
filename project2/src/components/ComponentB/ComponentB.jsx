import React, { useEffect } from "react";
import XMLParser from "react-xml-parser";

function ComponentB() {
  useEffect(() => {
    fetch("https://boardgamegeek.com/xmlapi2/")
      .then((res) => res.text())
      .then((data) => {
        var xml = new XMLParser().parseFromString(data);
        console.log(xml);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
}

export default ComponentB;
