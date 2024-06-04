import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">

      <p>Welcome to Home Page...</p>
      
      <Link href="/books" className='btn bg-red-500 m-2'>Home Page</Link>
      <Link href="/pets" className='btn bg-red-500 m-2'>Home Page</Link>
      <Link href="/data" className='btn bg-red-500 m-2'>Data Page</Link>
      <Link href="/dbExample" className='btn bg-red-500 m-2'>DB Example Page</Link>
      
      
    </main>
  );
}
