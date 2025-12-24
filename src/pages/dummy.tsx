import { useState } from 'react';
import { Briefcase, Monitor, Home, GraduationCap, Plus, UserPlus, ArrowRight } from 'lucide-react';
import { IndustryCard } from '../components/dashboard/IndustryCard';
import { StatsCard } from '../components/dashboard/StatsCard';
import { TicketSummaryChart } from '../components/dashboard/TicketSummaryChart';
import { KeyUnitsCard } from '../components/dashboard/KeyUnitsCard';
import { EmployeesTable } from '../components/dashboard/EmployeesTable';
import { AddUserModal } from '../components/modals/AddUserModal';
import { EditPermissionsModal } from '../components/modals/EditPermissionsModal';
import { AllIndustriesModal } from './AllIndustriesModal';

export function Dummy() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditPermissionsOpen, setIsEditPermissionsOpen] = useState(false);
  const [isAllIndustriesOpen, setIsAllIndustriesOpen] = useState(false);

  const industries = [{
    name: 'HR Industry',
    subtitle: 'Career Commanders',
    color: 'purple',
    icon: Briefcase
  }, {
    name: 'IT Industry',
    subtitle: 'Inavsys IT Consultants',
    color: 'orange',
    icon: Monitor
  }, {
    name: 'Real Estate Industry',
    subtitle: 'Elite Estate Solutions',
    color: 'yellow',
    icon: Home
  }, {
    name: 'Education Industry',
    subtitle: 'Dolthano Legends Education',
    color: 'teal',
    icon: GraduationCap
  }
  ];
  return <div className="space-y-6 md:space-y-8 pb-8">
    {/* Header Section - Mobile Optimized */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h1 className="text-xl md:text-2xl font-bold text-[#0F1E3D]">
        Super Admin Dashboard
      </h1>
      <div className="w-full md:w-auto">
        <input type="text" placeholder="Search..." className="w-full md:w-96 h-10 px-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
      </div>
    </div>

    {/* Hero Banner - Responsive Height/Text */}
    <div className="bg-[#0F1E3D] rounded-xl md:rounded-2xl h-40 md:h-64 flex items-center justify-center relative overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
      <h2 className="text-3xl md:text-6xl font-bold text-white tracking-widest z-10 opacity-90 text-center px-4">
        ADVERTISEMENT
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
      {/* Left Column - Industries */}
      <div className="col-span-1 lg:col-span-8 space-y-6 md:space-y-8">
        {/* Industries Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F1E3D]">
            All Industries
          </h2>
          <div className="flex gap-3">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-indigo-200 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium text-sm shadow-sm">
              <Plus className="h-4 w-4" />
              Add Industrie
            </button>
            <button onClick={() => setIsAddUserOpen(true)} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[#6200EE] text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 font-medium text-sm">
              <UserPlus className="h-4 w-4" />
              Add User
            </button>
          </div>
        </div>

        {/* Industries Grid - Responsive: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {industries.slice(0, 4).map((ind, idx) => (
            <IndustryCard
              key={idx}
              name={ind.name}
              subtitle={ind.subtitle}
              color={ind.color}
              icon={ind.icon}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setIsAllIndustriesOpen(true)}
            className="text-[#6200EE] font-bold text-sm flex items-center gap-1"
          >
            View All <ArrowRight className="h-4 w-4" />
          </button>
          <AllIndustriesModal
            isOpen={isAllIndustriesOpen}
            onClose={() => setIsAllIndustriesOpen(false)}
            industries={industries}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-80 md:h-auto">
            <TicketSummaryChart />
          </div>
          <div className="h-auto">
            <KeyUnitsCard />
          </div>
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

    <div className="overflow-x-auto">
      <EmployeesTable />
    </div>

    {/* Modals */}
    <AddUserModal isOpen={isAddUserOpen} onClose={() => setIsAddUserOpen(false)} onEditPermissions={() => {
      setIsAddUserOpen(false);
      setIsEditPermissionsOpen(true);
    }} />

    <EditPermissionsModal isOpen={isEditPermissionsOpen} onClose={() => {
      setIsEditPermissionsOpen(false);
      setIsAddUserOpen(true);
    }} />
  </div>;
}
// Helper component for Quick Action icons
function Settings(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>;
}
