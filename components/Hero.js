import Image from "next/image";
import "animate.css";
import { Courgette } from "next/font/google";
const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <div className={courgette.className}>
      <div className="hero">
        <Image width={150} height={150} src="/logo.png" alt="logo img" />
        <h1 className="animate__animated animate__bounceInDown animate__delay-0.5s animate__slow	0.5s">
          Dawit Diriba
        </h1>

        <h1 className="animate__animated animate__bounceInDown animate__delay-0.5s animate__slow	0.5s">
          Creating Digital Experiences
        </h1>
        {/* <h1> Web Development</h1> */}
      </div>
    </div>
  );
};

export default Hero;
