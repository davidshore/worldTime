import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { timeZones } from "./timeZones";

function getTimeString(timeZone) {
  const date = new Date();
  return date.toLocaleTimeString("sv-SE", { timeZone });
}

export default function Clock({ cityKey }) {
  const { city, timeZone } = timeZones[cityKey];
  const [time, setTime] = useState(getTimeString(timeZone));

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(getTimeString(timeZone));
    }, 1000);
  }, []);

  return (
    <div
      className="flex justify-between items-center md:items-start
      md:flex-col p-6 w-full md:w-48 bg-slate-200 rounded-md mb-4 md:mr-4"
    >
      <div className="text-lg text-gray-600">{city}</div>
      <div className="text-3xl font-mono text-gray-900 font-semibold">
        {time}
      </div>
      <Link className="underline hover:text-gray-500" to={`clock/${cityKey}`}>
        bigger
      </Link>
    </div>
  );
}
