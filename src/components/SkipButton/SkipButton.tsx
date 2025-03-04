import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";

export default function SkipButton() {
  return (
    <Link href={"/home"}>
      <Button variant="ghost" className="text-gray-400 text-xs uppercase tracking-wider">
        Skip
      </Button>
    </Link>
  );
}