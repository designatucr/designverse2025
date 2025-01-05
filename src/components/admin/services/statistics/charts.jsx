import { Label } from "@/components/ui/label";
import Chart from "./chart";

const Charts = ({ counts }) => {
  const order = ["status", "shirt", "diet", "school"];

  return (
    <>
      {order.map((title) => (
        <div key={title}>
          <Label className="pr-5 text-2xl font-bold">{title}</Label>
          <div className="mt-3 grid w-full grid-cols-2 gap-4 p-4 md:grid-cols-4">
            {Object.entries(counts).map(([category, data]) =>
              Object.entries(data)
                .filter(([key]) => key === title)
                .map(([key, data], index) => {
                  if (key !== "status") {
                    return Object.entries(data)
                      .filter(([_, sizeData]) =>
                        Object.values(sizeData).some((count) => count > 0),
                      )
                      .map(([type, sizeData], idx) => {
                        const data = Object.entries(sizeData).reduce(
                          (acc, [size, count]) => {
                            acc[size] = (acc[size] || 0) + count;
                            return acc;
                          },
                          {},
                        );
                        return (
                          <Chart
                            key={idx}
                            status={type}
                            title={category}
                            data={data}
                          />
                        );
                      });
                  } else if (
                    key === "status" &&
                    Object.values(data).some((count) => count > 0)
                  ) {
                    return <Chart key={index} title={category} data={data} />;
                  }
                  return null;
                }),
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Charts;
