import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const data = [{
  name: 'In Progress',
  value: 35,
  color: '#FACC15'
}, {
  name: 'Open',
  value: 25,
  color: '#818CF8'
}, {
  name: 'Resolved',
  value: 40,
  color: '#86EFAC'
}];
export function TicketStatusChart() {
  return <div className="bg-white p-6 rounded-xl shadow-sm h-[400px]">
    <h3 className="font-bold text-[#0F1E3D] mb-6 text-sm">Ticket Status</h3>
    <ResponsiveContainer width="100%" height="80%">
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={0} outerRadius={120} paddingAngle={0} dataKey="value" stroke="white" strokeWidth={2}>
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <div className="flex justify-center gap-4 mt-4 flex-wrap">
      {data.map(item => <div key={item.name} className="flex items-center gap-2 text-xs text-gray-500">
        <span className="w-3 h-3 rounded-sm" style={{
          backgroundColor: item.color
        }}></span>
        {item.name}
      </div>)}
    </div>
  </div>;
}