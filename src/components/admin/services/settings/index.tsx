"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";

const Settings = () => {
  const syncStatsWithDatabase = () => {
    toaster("Syncing Stats...", "loading");
    api({
      method: "GET",
      url: "/api/settings",
    })
      .then(() => toaster("Stats Synced!", "success"))
      .catch(() => toaster("Failed to sync stats.", "error"));
  };

  return (
    <div className="flex h-full flex-col py-4 font-poppins">
      <Label className="pr-5 text-2xl font-bold">Settings</Label>

      <Button onClick={syncStatsWithDatabase}>Sync Stats</Button>
    </div>
  );
};

export default Settings;
