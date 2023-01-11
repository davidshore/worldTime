import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { timeZones } from "./timeZones";

function getTimeString(timeZone) {
  const date = new Date();
  return date.toLocaleTimeString("sv-SE", { timeZone });
}

export default function SingleClock() {
  const { cityKey } = useParams();
  const { city, timeZone, country } = timeZones[cityKey];

  const [time, setTime] = useState(getTimeString(timeZone));

  useEffect(() => {
    setInterval(() => {
      setTime(getTimeString(timeZone));
    }, 1000);
  }, []);

  return (
    <div
      className="flex justify-between items-center md:items-start
      md:flex-col p-6 w-full md:w-64 bg-slate-200 rounded-md mb-4 md:mr-4"
    >
      <div className="text-2xl text-gray-600">{city}</div>
      <div className="text-sm uppercase text-blue-700 font-bold md:mb-4">
        {country}
      </div>
      <div className="text-4xl font-mono text-gray-900 font-semibold">
        {time}
      </div>
    </div>
  );
}
