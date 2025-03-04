import SearchBar from "@/components/SearchBar/SearchBar";
import Events from "@/components/Events/Events";
import Categories from "@/components/Categories/Categories";

export default function HomePage({images, categories}: {
  images: { src: string; alt: string; name: string; desc: string }[],
  categories: { title: string; }[]
}) {
  return (
    <>
      {/* Searchbar */}
      <SearchBar/>

      {/* Categories */}
      <Categories categories={categories}/>

      {/* Events Events */}
      <Events images={images}/>
    </>
  )
}