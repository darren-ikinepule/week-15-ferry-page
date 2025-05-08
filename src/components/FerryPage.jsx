import React, { useEffect, useState } from "react";

function FerryPage() {
  const url = "https://pp-api.at.govt.nz/realtime/legacy/ferrypositions";
  const ferryKey = import.meta.env.VITE_FERRY_API_KEY;

  const [ferryData, setFerryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFerryData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        headers: {
          "Ocp-Apim-Subscription-Key": ferryKey,
        },
      });
      const data = await response.json();
      console.log("Ferry API response:", data);
      setFerryData(data.response); 

    } catch (err) {
      console.error("Error fetching ferry data:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFerryData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!ferryData.length) {
    return <p>No ferry data available</p>;
  }

  return (
    <div>
       {ferryData.map((ferry, index) => (
      <div key={index}>
        <h2>Vessel Name: {ferry.vessel}</h2>
        <p>Operator Name: {ferry.operator}</p>
        <p>Call Sign: {ferry.callsign}</p>
        <p>Latitude: {ferry.lat}</p>
        <p>Longitude: {ferry.lng}</p>
        
      </div>
      ))}
    </div>
  );
}

export default FerryPage;
