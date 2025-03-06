"use client";

import { useEffect, useState } from "react";
import { QueryEvents } from "@/service/QueryEvents";

export default function ShowDetails() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await QueryEvents();
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Details</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}