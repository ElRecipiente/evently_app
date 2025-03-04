import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">
      <Input placeholder="Search Event" className="bg-gray-800 text-white pl-10"/>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}/>
    </div>
  )
}