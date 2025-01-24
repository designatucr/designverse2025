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
    width: 50,
    height: 100,
  },
  {
    image: Trident,
    title: "Visionary Voyage",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
    width: 100,
    height: 100,
  },
  {
    image: Shells,
    title: "Waves of Change",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
    width: 150,
    height: 100,
  },
  {
    image: Coral,
    title: "Tidal Testing",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porttitor sem",
    width: 150,
    height: 100,
  },
];

const Tracks = () => {
  return (
    <div className="bg-hackathon-blue-300 sm: flex min-h-screen w-full flex-col items-center justify-center px-4 md:px-8">
      <p className="flex py-8 font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
        TRACKS
      </p>

      <div className="grid gap-4 sm:grid-cols-1 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
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
