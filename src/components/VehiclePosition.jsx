import React, { useEffect, useState } from "react";

function VehiclePosition() {
  const url =
    "https://pp-api.at.govt.nz/realtime/legacy/vehiclelocations";
  const VehicleKey = import.meta.env.VITE_VEHICLE_API_KEY;

  const [vehicleData, setVehicleData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVehicleData = async () => {
    console.log("Fetching vehicle data...");
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        headers: {
          "Ocp-Apim-Subscription-Key": VehicleKey,
        },
      });
      
      const data = await response.json();
      console.log("Vehicle API response:", data);
      setVehicleData(data.response);
      console.log(vehicleData);
    if (!response.ok) {
        // Handle non-successful responses
        const message = `An error occurred: ${response.status}`;
        throw new Error(message);
      }
    } catch (err) {
      console.error("Error fetching vehicle data:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicleData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

//   if (!vehicleData || !Array.isArray(vehicleData) || vehicleData.length === 0) {
//     return <p>No vehicle data available</p>;
//   }

return (
  <div className="vehicle-position">
     {vehicleData.entity && vehicleData.entity.length > 0 ? (
      vehicleData.entity.map((vehicle, index) => (
        <div className="vehicle-container" key={index}>
          <p>Latitude: {vehicle.vehicle.position.latitude}</p>
          <p>Longitude: {vehicle.vehicle.position.longitude}</p>
          <p>Speed: {vehicle.vehicle.position.speed}</p>
        </div>
      ))
    ) : (
      <p>No vehicle data available</p>
    )}
  </div>
);
}

export default VehiclePosition;