"use client";
import { GoogleEvent } from "@/types/calendar";
import { useState } from "react";
import Column from "@/public/schedule/column.svg";
import Image from "next/image";

interface props {
  events: GoogleEvent[];
  totalDays: string[];
}

const Events = ({ events, totalDays }: props) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start.dateTime)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="z-10 grid w-full grid-cols-7 items-center justify-between gap-4 rounded text-base">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`flex justify-center rounded p-2 text-white focus:outline-none ${
              selectedDay === day
                ? "bg-designverse-schedule-selected"
                : "bg-designverse-schedule-unselected"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="z-10 mt-6 h-full w-full">
        {events.filter(
          ({ start }) =>
            new Date(start.dateTime).toLocaleString("en-US", {
              timeZone: "America/Los_Angeles",
              weekday: "long",
            }) === selectedDay,
        ).length == 0 ? (
          <div className="mt-6 flex flex-row justify-center text-lg font-semibold">
            No Events Available
          </div>
        ) : (
          <div className="mt-6 flex-col gap-4">
            {events
              .filter(
                ({ start }) =>
                  new Date(start.dateTime).toLocaleString("en-US", {
                    timeZone: "America/Los_Angeles",
                    weekday: "long",
                  }) === selectedDay,
              )
              .map(({ start, summary, location }, index) => (
                <div
                  key={index}
                  className="font-workSans relative grid w-full grid-cols-5 items-center justify-center px-4 py-3 text-center text-lg font-semibold text-black"
                >
                  <Image src={Column} alt="Column" className="absolute -z-10" />
                  <p className="col-start-2">{summary}</p>
                  <p className="">
                    {new Date(new Date(start.dateTime)).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "America/Los_Angeles",
                      },
                    )}
                  </p>
                  <p>{location}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
