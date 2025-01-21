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
      <section className="flex flex-col items-center justify-start bg-[#3D859D] p-8 text-white">
        <div className="-mb-10 flex w-8/12 items-center justify-between">
          <Image src={BubblesLeft} alt="BubblesLeft" />
          <Image src={BubblesRight} alt="BubblesRight" />
        </div>

        <p className="flex pb-3 font-sora text-3xl font-bold text-white lg:text-5xl">
          SCHEDULE
        </p>

        <p className="flex pb-3 font-sora text-xl font-bold text-white lg:mb-8 lg:text-2xl">
          Pacific Standard Time (PST)
        </p>

        <Image src={Coming} alt="Coming Soon" className="my-20" />

        {/* <Events events={items} totalDays={totalDays} /> */}
      </section>
      <Image
        src={Fish}
        alt="Fish"
        className="absolute bottom-[20%] right-8 lg:right-20"
      />
      <Image src={Vine} alt="Vine" className="absolute bottom-[25%] left-0" />
    </div>
  );
};

export default Schedule;
