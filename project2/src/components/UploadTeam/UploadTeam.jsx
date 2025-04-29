import React, { useState } from "react";

const UploadTeam = ({ myTeam }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const upload = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const airtableKey = import.meta.env.VITE_AIRTABLE_KEY;
    const baseId = import.meta.env.VITE_AIRTABLE_BASEID;
    const tableId = import.meta.env.VITE_AIRTABLE_TABLEID;

    const records = myTeam.map((pokemon) => ({
      fields: {
        Name: pokemon.name,
        ID: pokemon.id,
        Image: pokemon.image,
      },
    }));

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableId}`,
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
        setError(err.message);
        console.log("error");
        const errorData = await res.json();
        throw new Error(errorData.error?.message || "upload failed");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={upload} disabled={myTeam.length < 6}>
        Save team loadout
      </button>
      {success && <div>Team upload success!</div>}
    </div>
  );
};

export default UploadTeam;
