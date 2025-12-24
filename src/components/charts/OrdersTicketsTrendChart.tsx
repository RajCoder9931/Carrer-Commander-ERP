import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{
  name: 'Jan',
  orders: 300,
  tickets: 200
}, {
  name: 'Feb',
  orders: 250,
  tickets: 350
}, {
  name: 'Mar',
  orders: 200,
  tickets: 1000
}, {
  name: 'Apr',
  orders: 250,
  tickets: 400
}, {
  name: 'May',
  orders: 200,
  tickets: 550
}, {
  name: 'Jun',
  orders: 250,
  tickets: 450
}];
export function OrdersTicketsTrendChart() {
  return <div className="bg-white p-6 rounded-xl shadow-sm h-[400px]">
    <h3 className="font-bold text-[#0F1E3D] mb-6 text-sm">
      Orders & Tickets Trend
    </h3>
    <ResponsiveContainer width="100%" height="85%">
      <LineChart data={data}>
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
        <Line type="monotone" dataKey="orders" stroke="#22C55E" strokeWidth={2} dot={{
          r: 4,
          fill: '#fff',
          strokeWidth: 2
        }} />
        <Line type="monotone" dataKey="tickets" stroke="#818CF8" strokeWidth={2} dot={{
          r: 4,
          fill: '#fff',
          strokeWidth: 2
        }} />
      </LineChart>
    </ResponsiveContainer>
    <div className="flex justify-center gap-6 mt-2">
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="w-2 h-2 rounded-full bg-green-500"></span> orders
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="w-2 h-2 rounded-full bg-indigo-400"></span> tickets
      </div>
    </div>
  </div>;
}