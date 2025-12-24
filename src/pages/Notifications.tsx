import { CheckCircle, AlertTriangle, Info, XCircle } from 'lucide-react';

export function Notification() {
  return (
    <div className="flex flex-col gap-6 h-full">

      {/*  Header Section  */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-[#0F1E3D]">
          Super Admin Dashboard
        </h1>

        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-96 h-10 px-4 rounded-md border border-gray-200
            focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
      </div>

      {/*   Advertisement Banner   */}
      <div className="bg-[#0F1E3D] rounded-xl md:rounded-2xl h-40 md:h-64
        flex items-center justify-center relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20" />
        <h2 className="text-3xl md:text-6xl font-bold text-white tracking-widest z-10 opacity-90 text-center px-4">
          ADVERTISEMENT
        </h2>
      </div>

      {/*  Notifications Section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* User Approved */}
        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0F1E3D]">
              User Approved
            </p>
            <p className="text-xs text-gray-500">
              John Doe has been approved by HR.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              2 min ago
            </p>
          </div>
        </div>

        {/* Pending Ticket */}
        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0F1E3D]">
              Pending Ticket
            </p>
            <p className="text-xs text-gray-500">
              Ticket #4557 is awaiting admin response.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              5 min ago
            </p>
          </div>
        </div>

        {/* New Service Request */}
        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Info className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0F1E3D]">
              New Service Request
            </p>
            <p className="text-xs text-gray-500">
              A new service request has been added by Sales.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              10 min ago
            </p>
          </div>
        </div>

        {/* Payment Failed */}
        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <XCircle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0F1E3D]">
              Payment Failed
            </p>
            <p className="text-xs text-gray-500">
              Invoice #55231 failed during online processing.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              1 hr ago
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
