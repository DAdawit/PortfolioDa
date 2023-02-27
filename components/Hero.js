import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <Image width={150} height={150} src="/logo.png" alt="logo img" />
        <h1>Creating Digital Experiences</h1>
        <h1> Web Development</h1>
      </div>
    </>
  );
};

export default Hero;
