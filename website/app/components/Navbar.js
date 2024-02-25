import Image from 'next/image';
import Link from 'next/link';
import box from '../../public/box.svg';
import asset1 from '../../public/asset (1).svg';
import asset2 from '../../public/asset (2).svg';

export default function Navbar() {
  return (
    <div>

      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center py-5">
          <div className="flex items-center ">
            <span className="mr-5 w-3 h-2">
              <div className="flex flex-row items-center justify-center space-x-1">
              <Image src={box} alt="Box"  />
              <Image src={asset1} alt="Box" />
              <Image src={asset2} alt="Box" />
              </div>
            </span>
            <h2 className="text-xl font-medium">dntr</h2>
          </div>
          <nav className="flex gap-16 font-medium ">
            <Link href="/" className="text-xl hover:text-gray-300">Home</Link>
            <Link href="/Resume" className="text-xl hover:text-gray-300">Resume</Link>
            <Link href="/Projects" className="text-xl hover:text-gray-300">Projects</Link>
            <Link href="/Contact" className="text-xl hover:text-gray-300">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
