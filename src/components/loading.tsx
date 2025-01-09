import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-designverse-primary text-3xl font-bold">Loading...</p>
      <Loader className="text-designverse-primary animate-spin" />
    </div>
  );
};

export default Loading;
