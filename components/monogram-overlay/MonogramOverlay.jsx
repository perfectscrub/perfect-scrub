import Image from "next/image";

const MonogramOverlay = () => {
  return (
    <Image
      width={500}
      height={500}
      className="absolute max-w-xs z-10 opacity-30 -bottom-5 -left-10 w-3/4"
      src="/ps-monogram-white.svg"
      alt=""
    />
  );
};

export default MonogramOverlay;
