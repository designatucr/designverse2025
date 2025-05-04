import { api } from "@/utils/api";
import Events from "./events";
import Image from "next/image";
import Fish from "@/public/schedule/fish.svg";
import Vine from "@/public/schedule/vine.svg";
import BubblesLeft from "@/public/schedule/left_bubbles.svg";
import BubblesRight from "@/public/schedule/right_bubbles.svg";

const Schedule = async () => {
  const { items } = await api({
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Cache-Control": "no-cache",
    },
  });

  const totalDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="relative">
      <Image
        src={Fish}
        alt="Fish"
        className="absolute right-4 top-72 z-10 w-1/6 blur-[2px] md:top-96 lg:right-20"
      />
      <Image
        src={Vine}
        alt="Vine"
        className="absolute left-0 top-72 w-1/6 blur-[2px] md:top-96"
      />

      <section
        id="schedule"
        className="flex flex-col items-center justify-start bg-[#3D859D] py-40 text-white"
      >
        <div className="-mb-10 flex w-full items-center justify-between md:w-9/12">
          <Image
            src={BubblesLeft}
            alt="BubblesLeft"
            className="w-1/4 pl-1 md:w-auto"
          />
          <Image
            src={BubblesRight}
            alt="BubblesRight"
            className="w-1/4 pr-1 md:w-auto"
          />
        </div>

        <p className="flex pb-3 font-sora text-3xl font-bold text-white lg:text-5xl">
          SCHEDULE
        </p>

        <p className="flex pb-3 font-sora text-xl font-bold text-white lg:mb-8 lg:text-2xl">
          Pacific Standard Time (PST)
        </p>

        <Events events={items} totalDays={totalDays} />
      </section>
    </div>
  );
};

export default Schedule;
