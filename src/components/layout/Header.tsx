import { Headset, Menu } from 'lucide-react';
interface HeaderProps {
  onMenuClick: () => void;
}
export function Header({
  onMenuClick
}: HeaderProps) {
  return <header className="h-16 md:h-20 bg-[#0F1E3D] px-4 md:px-8 flex items-center justify-between border-b border-gray-800 shrink-0 sticky top-0 z-30 relative">
    <div className="flex items-center gap-4">
      <button onClick={onMenuClick} className="lg:hidden text-white p-1 hover:bg-white/10 rounded-md">
        <Menu className="h-6 w-6" />
      </button>

      <div className="flex items-center gap-3">
        <div className="w-10 h-8 md:w-16 md:h-10 bg-gray-300 rounded opacity-20 hidden sm:block"></div>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-white text-lg md:text-2xl font-bold tracking-wide truncate">
          ERP (CAREER COMMANDER)
        </h1>

      </div>
    </div>

    <div className="flex items-center gap-3 md:gap-6">
      <button className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 border border-white/30 rounded-md text-white hover:bg-white/10 transition-colors text-sm md:text-base">
        <Headset className="h-4 w-4 md:h-5 md:w-5" />
        <span className="font-medium hidden sm:inline">SUPPORT</span>
      </button>
    </div>
  </header>;
}