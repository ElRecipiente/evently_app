import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Categories({categories}: {
  categories: { title: string; }[]
}) {
  return (
    <div className="flex gap-2">
      {categories.map((category, index) => (
        <Button className={"bg-gray-900"} key={index} variant="outline">
          <Image src={"/img/music.svg"} alt={"Music Icon"} width={25} height={25}/>
          {category.title}
        </Button>
      ))}
    </div>
  )
}