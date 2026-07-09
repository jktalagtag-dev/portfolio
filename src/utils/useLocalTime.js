import { useEffect, useState } from "react";

const formatManilaTime = () =>
  new Intl.DateTimeFormat("en-PH", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila",
  }).format(new Date());

// Live Manila time — shared by the footer and hero so both
// clocks agree and the formatting lives in one place.
export default function useLocalTime() {
  const [time, setTime] = useState(formatManilaTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatManilaTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return time;
}
