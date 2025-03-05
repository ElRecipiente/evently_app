"use client";

import "swiper/css";
import HomePage from "@/components/HomePage/HomePage";
import HomeData from "@/data/HomeData";

export default function Home() {
  return (
    <div className="bg-[#0D1B2A] min-h-screen text-white p-4 space-y-4">
      {/*HomePage */}
      <HomePage {...HomeData} />
    </div>
  );
};