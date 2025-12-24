// import { NavLink, useNavigate } from 'react-router-dom';
// import { Home, BarChart2, Bell, Settings, User, FileText, X } from 'lucide-react';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const navigation = [
//   {
//     name: 'User Access Management',
//     href: '/',
//     icon: Home
//   },
//   {
//     name: 'Service / Order Management',
//     href: '/service-orders',
//     icon: FileText
//   },
//   {
//     name: 'Analytics & Reporting',
//     href: '/analytics',
//     icon: BarChart2
//   },
//   {
//     name: 'Notifications',
//     href: '/notification',
//     icon: Bell
//   },
//   {
//     name: 'Settings',
//     href: '/settings',
//     icon: Settings
//   }
// ];

// const upcomingMeetings = [
//   {
//     id: 1,
//     name: 'PROJECT #001',
//     project: 'Google Meet',
//     time: '10:00 AM'
//   },
//   {
//     id: 2,
//     name: 'PROJECT #002',
//     project: 'Google Meet',
//     time: '12:30 PM'
//   },
//   {
//     id: 3,
//     name: 'PROJECT #003',
//     project: 'Google Meet',
//     time: '3:00 PM'
//   }
// ];

// export function Sidebar({ isOpen, onClose }: SidebarProps) {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed lg:static inset-y-0 left-0 z-50
//           w-[280px] bg-[#0F1E3D] flex flex-col p-4 gap-4
//           transform transition-transform duration-200
//           ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//           h-full overflow-y-auto rounded-2xl 
//         `}
//       >
//         {/* Mobile Close */}
//         <div className="flex justify-end lg:hidden">
//           <button onClick={onClose} className="text-white p-2">
//             <X className="h-6 w-6" />
//           </button>
//         </div>
//         {/* Profile */}
//         <div className="space-y-3">
//           {/* Role */}
//           <div className="flex items-center gap-2 text-white px-2">
//             <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
//               <User className="h-4 w-4 text-white" />
//             </div>
//             <span className="text-sm font-medium">Super Admin</span>
//           </div>

//           {/* User Card */}
//           <div className="bg-[#1A2B4D] rounded-xl p-4 flex items-center gap-3">
//             <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
//               <User className="h-6 w-6" />
//             </div>

//             <div className="overflow-hidden">
//               <p className="text-white font-medium truncate">Raj Ravi</p>
//               <p className="text-gray-400 text-xs truncate">
//                 raviraj@gmail.com
//               </p>
//             </div>
//           </div>
//         </div>


//         {/* Navigation */}
//         <nav className="bg-white rounded-xl py-2 overflow-hidden">
//           {navigation.map(item => (
//             <NavLink
//               key={item.name}
//               to={item.href}
//               onClick={() => window.innerWidth < 1024 && onClose()}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
//                 ${isActive
//                   ? 'bg-[#0F1E3D] text-white'
//                   : 'text-gray-700 hover:bg-gray-50'
//                 }`
//               }
//             >
//               <item.icon className="h-5 w-5" />
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/*  Upcoming Meetings Widget  */}
//         <div className="bg-white rounded-xl p-4 flex-1 flex flex-col min-h-[200px]">
//           <h3 className="text-[#0F1E3D] font-bold mb-4">
//             Today Upcoming Meetings
//           </h3>

//           <div className="space-y-4 flex-1">
//             {upcomingMeetings.map(meeting => (
//               <div key={meeting.id} className="flex items-center gap-3">
//                 <div className="h-9 w-9 rounded-full bg-[#0F1E3D] flex items-center justify-center text-white">
//                   <User className="h-4 w-4" />
//                 </div>

//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-semibold text-[#0F1E3D] truncate">
//                     {meeting.name}
//                   </p>
//                   <p className="text-xs text-gray-500 truncate">
//                     {meeting.project}
//                   </p>
//                 </div>

//                 <span className="text-xs text-gray-400 whitespace-nowrap">
//                   {meeting.time}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Redirect to meetings page */}
//           <button
//             onClick={() => {
//               navigate('/meetings');
//               window.innerWidth < 1024 && onClose();
//             }}
//             className="text-indigo-600 text-sm font-medium mt-4 hover:underline"
//           >
//             View All
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }


// local email integarate


import { NavLink, useNavigate } from 'react-router-dom';
import { Home, BarChart2, Bell, Settings, User, FileText, X, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'User Access Management', href: '/dashboard', icon: Home },
  { name: 'Service / Order Management', href: '/service-orders', icon: FileText },
  { name: 'Analytics & Reporting', href: '/analytics', icon: BarChart2 },
  { name: 'Notifications', href: '/notification', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings }
];

const upcomingMeetings = [
  { id: 1, name: 'PROJECT #001', project: 'Google Meet', time: '10:00 AM' },
  { id: 2, name: 'PROJECT #002', project: 'Google Meet', time: '12:30 PM' },
  { id: 3, name: 'PROJECT #003', project: 'Google Meet', time: '3:00 PM' }
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();

  const userEmail =
    localStorage.getItem('erp_user_email') || 'guest@erp.com';

  const avatarLetter = userEmail.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem('erp_user_email');
    navigate('/login');
    window.innerWidth < 1024 && onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-[280px] bg-[#0F1E3D] flex flex-col p-4 gap-4
          transform transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          h-full overflow-y-auto rounded-2xl
        `}
      >
        {/* Mobile Close */}
        <div className="flex justify-end lg:hidden">
          <button onClick={onClose} className="text-white p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Profile */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white px-2">
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium">Super Admin</span>
          </div>

          <div className="bg-[#1A2B4D] rounded-xl p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
              {avatarLetter}
            </div>

            <div className="overflow-hidden">
              <p className="text-white font-medium truncate">
                Logged User
              </p>
              <p className="text-gray-400 text-xs truncate">
                {userEmail}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white rounded-xl py-2 overflow-hidden">
          {navigation.map(item => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => window.innerWidth < 1024 && onClose()}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
                ${
                  isActive
                    ? 'bg-[#0F1E3D] text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Upcoming Meetings */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="text-[#0F1E3D] font-bold mb-4">
            Today Upcoming Meetings
          </h3>

          <div className="space-y-4">
            {upcomingMeetings.map(meeting => (
              <div key={meeting.id} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#0F1E3D] flex items-center justify-center text-white">
                  <User className="h-4 w-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#0F1E3D] truncate">
                    {meeting.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {meeting.project}
                  </p>
                </div>

                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {meeting.time}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              navigate('/meetings');
              window.innerWidth < 1024 && onClose();
            }}
            className="text-indigo-600 text-sm font-medium mt-4 hover:underline"
          >
            View All
          </button>
        </div>

        {/* LOGOUT SECTION (SEPARATE DIV) */}
        <div className="bg-[#1A2B4D] rounded-xl p-3 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 text-red-400 hover:text-red-300 text-sm font-semibold transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
