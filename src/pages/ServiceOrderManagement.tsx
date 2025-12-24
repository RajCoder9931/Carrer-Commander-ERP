import { Filter, Download, SlidersHorizontal, Search } from 'lucide-react';
import { ServiceOrdersTable } from '../components/tables/ServiceOrdersTable';

export function ServiceOrderManagement() {
  return (
    <div className="flex flex-col gap-6 h-full">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-[#0F1E3D]">
          Super Admin Dashboard
        </h1>
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-96 h-10 px-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
      </div>

      <div className="bg-[#0F1E3D] rounded-xl md:rounded-2xl h-40 md:h-64 flex items-center justify-center relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <h2 className="text-3xl md:text-6xl font-bold text-white tracking-widest z-10 opacity-90 text-center px-4">
          ADVERTISEMENT
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 h-full">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-xl shadow-sm gap-4">
            <h1 className="text-xl font-bold text-[#0F1E3D]">Service Orders</h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Last 30 days
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors border border-gray-200 sm:border-none">
                <Filter className="h-4 w-4" />
                Filters
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors border border-gray-200 sm:border-none">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <ServiceOrdersTable />
          </div>
        </div>

        {/* Right Sidebar Filters */}
        <div className="w-full xl:w-80 shrink-0 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#0F1E3D]">Filters</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                Advanced <SlidersHorizontal className="h-3 w-3" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">
                  Search by order/customer/assignee
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-10 px-3 rounded border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">
                  Status
                </label>
                <select className="w-full h-10 px-3 rounded border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">
                  Industry
                </label>
                <select className="w-full h-10 px-3 rounded border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select Industry</option>
                  <option value="it">IT</option>
                  <option value="hr">HR</option>
                </select>
              </div>

              <div className="flex gap-3 pt-2">
                <button className="flex-1 py-2 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50">
                  Reset
                </button>
                <button className="flex-1 py-2 bg-violet-600 rounded text-sm text-white hover:bg-indigo-700 shadow-md shadow-indigo-200">
                  Quick Create
                </button>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 border border-gray-100 rounded-lg text-center">
                <div className="text-xs font-medium text-gray-900 mb-1">Open</div>
                <div className="text-lg font-bold text-gray-900">3</div>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg text-center">
                <div className="text-xs font-medium text-gray-900 mb-1">
                  In Progress
                </div>
                <div className="text-lg font-bold text-gray-900">3</div>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg text-center">
                <div className="text-xs font-medium text-gray-900 mb-1">
                  Completed
                </div>
                <div className="text-lg font-bold text-gray-900">3</div>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg text-center">
                <div className="text-xs font-medium text-gray-900 mb-1">
                  Cancelled
                </div>
                <div className="text-lg font-bold text-gray-900">3</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2 pt-2">
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 text-left">
                Create Service Order
              </button>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 text-left">
                Assign to Team
              </button>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 text-left">
                Export CSV
              </button>
              <button className="w-full py-2.5 px-4 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50 text-left">
                Bulk Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 