import Image from "next/image";

const AerolabLogo: React.FC = () => {
  return (
    <>
      <div className="desktop:block hidden">
        <Image
          src="/icons/aerolab-logo-1.svg"
          width="126"
          height="48"
          alt="Aerolab"
        />
      </div>
      <div className="desktop:hidden block">
        <Image
          src="/icons/aerolab-logo-2.svg"
          width="38.77"
          height="36"
          alt="Aerolab"
        />
      </div>
    </>
  );
};

export default AerolabLogo;
