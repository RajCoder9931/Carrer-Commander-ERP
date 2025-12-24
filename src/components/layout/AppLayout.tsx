import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex flex-col overflow-hidden">

      {/* Header */}
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <br />
      {/* Body Wrapper   */}
      <div className="flex flex-1 overflow-hidden rounded-2xl mx-3 mb-3">

        {/* Sidebar  */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content  */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 w-full">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
