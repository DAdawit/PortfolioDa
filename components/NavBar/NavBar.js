import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width="50" height="50" alt="logo" />
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="#expriance">Expriance</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
