import { OrdersTicketsTrendChart } from '../components/charts/OrdersTicketsTrendChart';
import { TicketStatusChart } from '../components/charts/TicketStatusChart';
import { RevenueByIndustryChart } from '../components/charts/RevenueByIndustryChart';
export function AnalyticsReporting() {
  return <div className="space-y-6 md:space-y-8 pb-8">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h1 className="text-xl font-bold text-[#0F1E3D]">
        Analytics & Reporting
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="bg-indigo-50 p-1 rounded-lg flex overflow-x-auto">
          <button className="px-3 md:px-4 py-1.5 text-sm font-medium text-indigo-600 rounded-md hover:bg-white hover:shadow-sm transition-all whitespace-nowrap">
            Week
          </button>
          <button className="px-3 md:px-4 py-1.5 text-sm font-medium text-indigo-600 rounded-md hover:bg-white hover:shadow-sm transition-all whitespace-nowrap">
            Month
          </button>
          <button className="px-3 md:px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm whitespace-nowrap">
            6 Month
          </button>
          <button className="px-3 md:px-4 py-1.5 text-sm font-medium text-indigo-600 rounded-md hover:bg-white hover:shadow-sm transition-all whitespace-nowrap">
            Today
          </button>
        </div>

        <select className="bg-indigo-50 text-indigo-900 text-sm font-medium px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-indigo-500 cursor-pointer w-full sm:w-auto">
          <option>Select Industry</option>
          <option>IT</option>
          <option>HR</option>
          <option>Real Estate</option>
        </select>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <p className="text-xs text-gray-500 mb-2">Total Orders</p>
        <p className="text-2xl font-bold text-[#0F1E3D]">12,450</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <p className="text-xs text-gray-500 mb-2">Completed Orders</p>
        <p className="text-2xl font-bold text-[#0F1E3D]">10,980</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <p className="text-xs text-gray-500 mb-2">Monthly Revenue</p>
        <p className="text-2xl font-bold text-[#0F1E3D]">₹ 8,40,000</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <p className="text-xs text-gray-500 mb-2">Active Tickets</p>
        <p className="text-2xl font-bold text-[#0F1E3D]">320</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="col-span-1 lg:col-span-8">
        <OrdersTicketsTrendChart />
      </div>
      <div className="col-span-1 lg:col-span-4">
        <TicketStatusChart />
      </div>
    </div>

    <div className="w-full">
      <RevenueByIndustryChart />
    </div>
  </div>;
}