import {Button} from "@/components/ui/button";

export default function Categories({categories}: {
  categories: { title: string; }[]
}) {
  return (
    <div className="flex gap-2">
      {categories.map((category, index) => (
        <Button key={index} variant="outline">category.title</Button>
      ))}
    </div>
  )
}