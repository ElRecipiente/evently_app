"use client";
import { useEffect, useState } from "react";
import {useParams} from "next/navigation";
import {QueryEventById} from "@/service/QueryEventById";

export default function ShowDetailsById() {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await QueryEventById(id);
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Details</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}