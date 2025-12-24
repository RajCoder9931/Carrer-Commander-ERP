import { useEffect,useState } from "react";
import { Monitor, Plus, UserPlus, Settings, } from "lucide-react"; 
import { IndustryCard } from "../components/dashboard/IndustryCard";
import { StatsCard } from "../components/dashboard/StatsCard";
import { TicketSummaryChart } from "../components/dashboard/TicketSummaryChart";
import { KeyUnitsCard } from "../components/dashboard/KeyUnitsCard";
import { EmployeesTable } from "../components/dashboard/EmployeesTable";

import { AddUserModal } from "../components/modals/AddUserModal";
import { EditPermissionsModal } from "../components/modals/EditPermissionsModal";
import { AddIndustryModal } from "../components/modals/AddIndustryModal";

export function Dashboard() {
  const [industries, setIndustries] = useState<any[]>([]);
  const [isAddIndustryOpen, setIsAddIndustryOpen] = useState(false);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditPermissionsOpen, setIsEditPermissionsOpen] = useState(false);
 
  useEffect(() => {
    const storedIndustries = localStorage.getItem("erp_industries");
    if (storedIndustries) {
      setIndustries(JSON.parse(storedIndustries));
    }
  }, []);
 
  const handleAddIndustry = (industry: any) => {
    const updatedIndustries = [...industries, industry];
    setIndustries(updatedIndustries);
    localStorage.setItem(
      "erp_industries",
      JSON.stringify(updatedIndustries)
    );
  };

  return (
    <div className="space-y-6 md:space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-[#0F1E3D]">
          Super Admin Dashboard
        </h1>

        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-96 h-10 px-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 text-sm"
        />
      </div>

      {/* Banner */}
      <div className="bg-[#0F1E3D] rounded-xl h-40 md:h-64 flex items-center justify-center">
        <h2 className="text-3xl md:text-6xl font-bold text-white">
          ADVERTISEMENT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-6">
          {/* Industry Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-[#0F1E3D]">
              All Industries
            </h2>

            <div className="flex gap-3">
              <button
                onClick={() => setIsAddIndustryOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-indigo-200 text-indigo-600 rounded-lg"
              >
                <Plus className="h-4 w-4" />
                Add Industry
              </button>

              <button
                onClick={() => setIsAddUserOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                <UserPlus className="h-4 w-4" />
                Add User
              </button>
            </div>
          </div>

          {/* INDUSTRIES GRID */}
          {industries.length === 0 ? (
            <div className="text-gray-400 text-sm">
              No industries added yet.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.slice(0, 4).map((ind) => (
                <IndustryCard
                  key={ind.id}
                  name={ind.name}
                  subtitle={ind.code}
                  icon={Monitor} color={"purple"}              />
              
              ))}
            </div>
          )}

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TicketSummaryChart />
            <KeyUnitsCard />
          </div>
        </div>

         {/* Right Column - Stats & Overview */}
      <div className="col-span-1 lg:col-span-4 space-y-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F1E3D]">
            Industries Overview
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <StatsCard value="10k" label="Job Openings" />
          <StatsCard value="25k" label="Active Services" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <StatsCard value="05m" label="Monthly Revenue" />
          <StatsCard value="300" label="Active User" />
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-[#0F1E3D] mb-4 text-lg">
            Quick Action
          </h3>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <button onClick={() => setIsAddUserOpen(true)} className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 text-xs md:text-sm font-medium text-gray-700">
              <UserPlus className="h-4 w-4 shrink-0" /> Add User
            </button>
            <button className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 text-xs md:text-sm font-medium text-gray-700">
              <Settings className="h-4 w-4 shrink-0" /> System Settings
            </button>
            <button className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 text-xs md:text-sm font-medium text-gray-700">
              <Plus className="h-4 w-4 shrink-0" /> Create Ticket
            </button>
            <button className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 text-xs md:text-sm font-medium text-gray-700">
              <Monitor className="h-4 w-4 shrink-0" /> Approve Request
            </button>
          </div>
        </div>
      </div>
      </div>

      <EmployeesTable />

      {/* MODALS */}
      <AddIndustryModal
        isOpen={isAddIndustryOpen}
        onClose={() => setIsAddIndustryOpen(false)}
        onAdd={handleAddIndustry}
      />

      <AddUserModal
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        onEditPermissions={() => {
          setIsAddUserOpen(false);
          setIsEditPermissionsOpen(true);
        }}
      />

      <EditPermissionsModal
        isOpen={isEditPermissionsOpen}
        onClose={() => setIsEditPermissionsOpen(false)}
      />  
    </div>
  );
} 