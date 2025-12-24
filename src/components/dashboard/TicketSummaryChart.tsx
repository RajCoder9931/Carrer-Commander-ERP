import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, } from "recharts";

const data = [
  { name: "Open", value: 380, color: "#FACC15" },
  { name: "In Progress", value: 480, color: "#A855F7" },
  { name: "Resolved", value: 890, color: "#22C55E" },
];

export function TicketSummaryChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-xs min-h-[360px] flex flex-col">
      <h3 className="font-bold text-[#0F1E3D] mb-6">
        Ticket Summary
      </h3>

      {/* Chart */}
      <div className="flex justify-center mb-6">
        <div className="h-44 w-44">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={58}
                outerRadius={80}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3 mt-auto">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">
                {item.name}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
