import React from "react";

export default function OnBoardingText({
                                         title,
                                         description,
                                       }: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-green-400">{title}</h2>
      <p className="text-sm text-gray-300 mt-1">{description}</p>
    </div>
  );
}