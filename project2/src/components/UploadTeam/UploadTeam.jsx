import React, { useState } from "react";

const UploadTeam = ({ myTeam }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const upload = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const airtableAPI = 
    const airtableKey =
     
    const baseId = 
    const tableId = 

    const records = myTeam.map((pokemon) => ({
      fields: {
        Name: pokemon.name,
        ID: pokemon.id,
        Image: pokemon.image,
      },
    }));

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/appBOMx2zGkQ9niPa/tbltA5SNkyGMSYK26`,
        {
          // const res = await fetch(airtableAPI, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${airtableKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ records }),
        }
      );

      if (!res.ok) {
        console.log("error");
      }

      setSuccess(true);
    } catch (err) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={upload} disabled={myTeam.length < 6}>
      Save team loadout
    </button>
  );
};

export default UploadTeam;
