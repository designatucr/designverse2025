import Track from "./track";
import Column from "@/public/tracks/column.svg";
import Trident from "@/public/tracks/trident.svg";
import Shells from "@/public/tracks/shells.svg";
import Coral from "@/public/tracks/coral.svg";

const tracks = [
  {
    image: Column,
    title: "Atlantis Adventure",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
  },
  {
    image: Trident,
    title: "Visionary Voyage",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
  },
  {
    image: Shells,
    title: "Waves of Change",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
  },
  {
    image: Coral,
    title: "Tidal Testing",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
  },
];

const Tracks = () => {
  return (
    <div className="flex h-[120vh] flex-col items-center justify-start bg-[#4495B0]">
      <p className="flex pb-3 font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
        TRACKS
      </p>

      <div className="flex w-1/2 gap-4">
        {tracks.map(({ image, title, description }, index) => (
          <Track
            key={index}
            index={index}
            image={image}
            title={title}
            text={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
