import React from "react";
import {Card, CardContent} from "@/components/ui/card";

export default function OverlayCard({children}: { children: React.ReactNode }) {
  return (
    <Card className="absolute bottom-10 left-5 right-5 bg-[#152233] text-white">
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}