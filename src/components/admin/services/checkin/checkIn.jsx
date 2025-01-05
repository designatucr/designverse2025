"use client";
import { useState } from "react";
import Scanner from "./scanner";
import Select from "@/components/select";
import toaster from "@/utils/toaster";
import { api } from "@/utils/api";
import { getEvents, getUser } from "./actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CheckIn = () => {
  const [event, setEvent] = useState({ name: "No events" });
  const [code, setCode] = useState("");
  const queryClient = useQueryClient();

  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => getEvents(),
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: (body) =>
      api({
        method: "PUT",
        url: "/api/checkin",
        body,
      }),
    onSuccess: () => {
      toaster(`Checked in for ${event.name}`, "success");
    },
    onError: (error) => {
      toaster("Error checking in!", error);
    },
  });

  const setResult = (result) => {
    if (result !== code) {
      setCode(result);
      toaster("QR Code Scanned", "success");
    }
  };

  const handleCheckIn = () => {
    if (event.name === "No events") {
      toaster("Please select an event!", "error");
      return;
    }
    if (!code) {
      toaster("Please scan a valid QR code!", "error");
      return;
    }

    const [userId, date] = code.split("&");

    const delta =
      process.env.NODE_ENV === "development"
        ? Math.round(new Date() - new Date(date)) / 1000
        : Math.round(new Date() - new Date(date));

    if (delta < 5000) {
      queryClient
        .fetchQuery({
          queryKey: ["/admin/checkin/user", userId],
          queryFn: () => getUser(userId),
          staleTime: 0,
        })
        .then((userData) => {
          if (userData.includes(event.id)) {
            toaster("Already Checked In!", "error");
          } else {
            mutation.mutate({ uid: userId, event: event.id, name: event.name });
          }
        })
        .catch((_) => {
          toaster("Error Fetching User Data!", "error");
        });
    } else {
      toaster("Expired QR code!", "error");
      return;
    }
  };

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Label className="pr-5 text-2xl font-bold">Checkin</Label>
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col gap-3 overflow-hidden py-3">
          {events && (
            <Select
              items={events}
              user={event}
              setUser={setEvent}
              placeholder="Select Events"
              userFn={(event) => setEvent(event)}
            />
          )}
          <Scanner setResult={setResult} />
        </div>
        <div>{code && code.split("&")[2]}</div>
        <Button className="w-fit" onClick={handleCheckIn}>
          Check In
        </Button>
      </div>
    </div>
  );
};

export default CheckIn;
