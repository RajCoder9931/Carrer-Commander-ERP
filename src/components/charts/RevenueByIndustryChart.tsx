import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
const data = [{
  name: 'IT',
  value: 4000,
  color: '#818CF8'
}, {
  name: 'HR',
  value: 3000,
  color: '#86EFAC'
}, {
  name: 'Real Estate',
  value: 2000,
  color: '#4F46E5'
}, {
  name: 'Education',
  value: 2800,
  color: '#22C55E'
}, {
  name: 'Travel',
  value: 1900,
  color: '#FACC15'
}];
export function RevenueByIndustryChart() {
  return <div className="bg-white p-6 rounded-xl shadow-sm h-[400px]">
    <h3 className="font-bold text-[#0F1E3D] mb-6 text-sm">
      Revenue by Industry
    </h3>
    <ResponsiveContainer width="100%" height="85%">
      <BarChart data={data} barSize={60}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{
          fontSize: 12,
          fill: '#6B7280'
        }} dy={10} />
        <YAxis axisLine={false} tickLine={false} tick={{
          fontSize: 12,
          fill: '#6B7280'
        }} />
        <Tooltip />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    <div className="flex justify-center mt-2">
      <div className="flex items-center gap-2 text-xs font-bold text-[#0F1E3D]">
        <span className="w-3 h-3 bg-black rounded-sm"></span> revenue
      </div>
    </div>
  </div>;
}