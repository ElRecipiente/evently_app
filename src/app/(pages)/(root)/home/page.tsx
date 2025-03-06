"use client";

import "swiper/css";
import Events from "@/components/Events/Events";
import {useEffect, useState} from "react";
import {QueryEventsWithLimit} from "@/service/QueryEvents";
// import HomePage from "@/components/HomePage/HomePage";
// import HomeData from "@/data/HomeData";

export default function Home() {
  const [data, setData] = useState<Event[] | null | undefined >(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const result = await QueryEventsWithLimit(3);
      console.log(result); // Vérifie ici que `result` est bien un tableau
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="bg-[#0D1B2A] min-h-screen text-white p-4 space-y-4">
      {/*HomePage */}
      {/*<HomePage {...HomeData} />*/}
      {/* Events*/}
      <Events events={data} />
    </div>
  );
};