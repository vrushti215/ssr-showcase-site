import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SSR Site</h1>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link href="/origin-certificates" className="hover:text-blue-300">Certificates</Link></li>
            <li><Link href="/zoll-news" className="hover:text-blue-300">Zoll News</Link></li>
            <li><Link href="/international-law" className="hover:text-blue-300">Intl Law</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
