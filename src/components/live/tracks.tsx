import Track from "./track";
import Column from "@/public/tracks/01.svg";
import Trident from "@/public/tracks/02.svg";
import Shells from "@/public/tracks/03.svg";
import Coral from "@/public/tracks/04.svg";
import Angler from "@/public/tracks/05.svg";

const tracks = [
  {
    image: Column,
    title: "Atlantis Adventure",
    description:
      "Explore the depths of your creativity using fundamental Design Principles!",
    width: 195,
    height: 150,
    customStyles: "object-top  top-[-40px]",
  },
  {
    image: Trident,
    title: "Visionary Voyage",
    description:
      "Discover the intersection between UI and UX in a real-world context, merging aesthetics with functionality!",
    width: 200,
    height: 250,
    customStyles: "object-center top-[-40px]",
  },
  {
    image: Shells,
    title: "Waves of Change",
    description:
      "Center your product around environmental awareness through inclusive and eco-friendly design practices!",
    width: 225,
    height: 500,
    customStyles:
      "object-bottom right-[26px] 2xl:right-[48px] top-[-25px] md:top-[-0px] ",
  },
  {
    image: Coral,
    title: "Tidal Testing",
    description:
      "Put your skills to the test to prototype designs that enhance user experience!",
    width: 210,
    height: 500,
    customStyles: "object-center top-[-74px] left-[24px] 2xl:left-[43px]",
  },
  {
    image: Angler,
    title: "Deep Sea Research",
    description:
      "Build a compelling interface using fundamental User Research Principles, centering on empathetic design!",
    width: 240,
    height: 500,
    customStyles: "top-[20px] left-[0px] 2xl:left-[16px]",
  },
];

const Tracks = () => {
  return (
    <section
      id="tracks"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-hackathon-blue-300"
    >
      <h2 className="py-8 font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
        TRACKS
      </h2>
      <div className="mx-auto w-full py-16 lg:max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center">
          <div className="flex w-full flex-col items-center gap-6 md:w-11/12 md:flex-row md:justify-center">
            {tracks
              .slice(0, 3)
              .map(
                (
                  { image, title, description, width, height, customStyles },
                  index,
                ) => (
                  <Track
                    key={index}
                    index={index}
                    image={image}
                    title={title}
                    text={description}
                    width={width}
                    height={height}
                    customStyles={customStyles}
                  />
                ),
              )}
          </div>
          <div className="flex w-full flex-col items-center gap-6 md:w-8/12 md:flex-row md:justify-center">
            {tracks
              .slice(3)
              .map(
                (
                  { image, title, description, width, height, customStyles },
                  index,
                ) => (
                  <Track
                    key={index + 3}
                    index={index + 3}
                    image={image}
                    title={title}
                    text={description}
                    width={width}
                    height={height}
                    customStyles={customStyles}
                  />
                ),
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
