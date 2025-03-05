import Events from "@/components/Events/Events";
import Categories from "@/components/Categories/Categories";

export default function HomePage({images, categories}: {
  images: { src: string; alt: string; name: string; desc: string; price: string; }[],
  categories: { title: string; }[]
}) {
  return (
    <>
      {/* Categories */}
      <Categories categories={categories}/>

      {/* Events Events */}
      <Events images={images}/>
    </>
  )
}