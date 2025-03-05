import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Header() {
  return (
    <header className={'bg-emerald-600 text-white p-2'}>
      <section className="flex justify-between items-center mb-3">
        <div>
          <p className="text-sm">Welcome back</p>
          <h1 className="text-lg font-bold">Ridwan Soleh</h1>
        </div>
        <div className="w-10 h-10 rounded-full">
          <Image src={"/img/gong.svg"} alt={"Notification"} width={25} height={25} />
        </div>
      </section>
      {/* Searchbar */}
      <SearchBar/>
    </header>
  )
}