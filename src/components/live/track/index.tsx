import Image, { StaticImageData } from "next/image";

interface props {
  index: number;
  image: StaticImageData;
  title: string;
  text: string;
  width: number;
  height: number;
}

const colors = [
  { primary: "bg-[#1F8EC6]", secondary: "bg-[#A6D1F9]" },
  { primary: "bg-[#E3989A]", secondary: "bg-[#FFD0D1]" },
  { primary: "bg-[#82BF8A]", secondary: "bg-[#EFFFD0]" },
  { primary: "bg-[#DAB983]", secondary: "bg-[#FFF7C3]" },
];

const Track = ({ index, image, title, text, width, height }: props) => {
  const { primary, secondary } = colors[index];

  return (
    <div
      className={`text-white shadow-lg ${primary} flex flex-col justify-between rounded-lg p-4`}
    >
      <div>
        <div className="text-6xl font-bold">
          {(index + 1).toString().padStart(2, "0")}
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`flex aspect-square h-32 items-center justify-center rounded-full ${secondary}`}
          >
            <Image src={image} alt={title} width={width} height={height} />
          </div>
        </div>
      </div>

      <div>
        <p className="mt-8 text-2xl font-semibold">{title}</p>
        <p className="pt-2">{text}</p>
      </div>
    </div>
  );
};

export default Track;
