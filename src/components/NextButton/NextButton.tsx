import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import React from "react";

export default function NextButton() {
  return (
    <Button variant="default" size="icon" className="bg-green-400 text-white rounded-full">
      <ArrowRight className="w-5 h-5"/>
    </Button>
  );
}