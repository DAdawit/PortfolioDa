import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width="50" height="50" alt="logo" />
      </div>
      <h2 className="logo">Ninjas</h2>

      <Link href="/">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
