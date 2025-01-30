// import { api } from "@/utils/api";
// import Events from "./events";

import Image from "next/image";
import Coming from "@/public/schedule/coming.svg";
import Fish from "@/public/schedule/fish.svg";
import Vine from "@/public/schedule/vine.svg";
import BubblesLeft from "@/public/schedule/left_bubbles.svg";
import BubblesRight from "@/public/schedule/right_bubbles.svg";

const Schedule = async () => {
  // const { items } = await api({
  //   url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
  //   method: "GET",
  // });

  // items.forEach((event) => {
  //   event.start = new Date(event.start.dateTime);
  //   event.end = new Date(event.end.dateTime);
  //   event.day = event.start.toLocaleString("en-US", {
  //     timeZone: "America/Los_Angeles",
  //     weekday: "long",
  //   });
  // });

  // const totalDays = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];

  return (
    <div className="relative">
      <section
        id="schedule"
        className="flex min-h-[80vh] flex-col items-center justify-start bg-[#3D859D] p-2 text-white md:p-8"
      >
        <div className="-mb-10 flex w-full items-center justify-between md:w-8/12">
          <Image
            src={BubblesLeft}
            alt="BubblesLeft"
            className="w-1/4 md:w-auto"
          />
          <Image
            src={BubblesRight}
            alt="BubblesRight"
            className="w-1/4 md:w-auto"
          />
        </div>

        <p className="flex pb-3 font-sora text-3xl font-bold text-white lg:text-5xl">
          SCHEDULE
        </p>

        <p className="flex pb-3 font-sora text-xl font-bold text-white lg:mb-8 lg:text-2xl">
          Pacific Standard Time (PST)
        </p>

        <Image
          src={Coming}
          alt="Coming Soon"
          className="my-20 w-2/3 md:w-auto"
        />

        {/* <Events events={items} totalDays={totalDays} /> */}
      </section>
      <Image
        src={Fish}
        alt="Fish"
        className="absolute bottom-[20%] right-4 w-1/6 blur-[2px] lg:right-20"
      />
      <Image
        src={Vine}
        alt="Vine"
        className="absolute bottom-[25%] left-0 w-1/6 blur-[2px]"
      />
    </div>
  );
};

export default Schedule;
