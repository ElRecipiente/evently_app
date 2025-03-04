import Link from "next/link";
import {Home, Search, User} from "lucide-react";

export default function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex justify-around">
      <Link href="/">
        <Home size={24} className="text-white"/>
      </Link>
      <Link href="/search">
        <Search size={24} className="text-gray-400"/>
      </Link>
      <Link href="/profile">
        <User size={24} className="text-gray-400"/>
      </Link>
    </nav>
  )
}