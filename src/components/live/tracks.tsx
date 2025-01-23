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
    width: 40,
    height: 100,
  },
  {
    image: Trident,
    title: "Visionary Voyage",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
    width: 120,
    height: 100,
  },
  {
    image: Shells,
    title: "Waves of Change",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
    width: 160,
    height: 100,
  },
  {
    image: Coral,
    title: "Tidal Testing",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
    width: 160,
    height: 100,
  },
];

const Tracks = () => {
  return (
    <div className="bg-hackathon-blue-300 flex h-[120vh] flex-col items-center justify-start px-16 py-16 md:w-full">
      <p className="flex pb-3 font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
        TRACKS
      </p>

      <div className="grid gap-8 md:grid-cols-4">
        {tracks.map(({ image, title, description, width, height }, index) => (
          <Track
            key={index}
            index={index}
            image={image}
            title={title}
            text={description}
            width={width}
            height={height}
          />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
