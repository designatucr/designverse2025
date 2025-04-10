import Image, { StaticImageData } from "next/image";

interface props {
  index: number;
  image: StaticImageData;
  title: string;
  text: string;
  width: number;
  height: number;
  customStyles: string;
}

const colors = [
  { primary: "bg-[#086B9D]", secondary: "bg-[#A6D1F9]" },
  { primary: "bg-[#E3989A]", secondary: "bg-[#FFD0D1]" },
  { primary: "bg-[#82BF8A]", secondary: "bg-[#EFFFD0]" },
  { primary: "bg-[#DAB983]", secondary: "bg-[#FFF7C3]" },
  { primary: "bg-[#08898F]", secondary: "bg-[#44BBC1]" },
];

const Track = ({
  index,
  image,
  title,
  text,
  width,
  height,
  customStyles,
}: props) => {
  const { primary } = colors[index];

  return (
    <div
      className={`text-white shadow-2xl shadow-designverse-primary/60 ${primary} z-20 flex h-[520px] w-[320px] flex-col rounded-md p-6 sm:h-[500px] sm:w-[320px] lg:h-[520px] lg:w-[360px]`}
    >
      <div className="relative">
        <div className="text-6xl font-bold">
          {(index + 1).toString().padStart(2, "0")}
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
            className={`absolute ${customStyles}`}
          />
        </div>
      </div>

      <div className="z-30 mt-64 flex flex-col justify-end">
        <p className="text-3xl font-bold">{title}</p>
        <p className="mt-2 text-lg">{text}</p>
      </div>
    </div>
  );
};

export default Track;
