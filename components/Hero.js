import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <div className={roboto.className}>
      <div className="hero">
        <Image width={150} height={150} src="/logo.png" alt="logo img" />
        <h1>Dawit D.</h1>

        <h1>Creating Digital Experiences</h1>
        {/* <h1> Web Development</h1> */}
      </div>
    </div>
  );
};

export default Hero;
