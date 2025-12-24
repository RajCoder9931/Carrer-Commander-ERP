import { useState } from 'react';
import { X, Briefcase, Monitor, Home, GraduationCap, UserPlus,Box, Moon, Sofa, Hammer, Paintbrush, Hotel, Bed, TrendingUp, Pill, Truck, Beer, Heart, Building, FlaskConical, Plane, Printer, ShoppingBag, Trophy, Tv, Users, Utensils, } from 'lucide-react';
import { AddUserModal } from '../components/modals/AddUserModal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function AllIndustriesModal({ isOpen, onClose }: Props) {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  if (!isOpen) return null;

   const industries = [
    {
      name: "HR Industry",
      icon: Briefcase,
      color: "bg-purple-600",
      subtitle: "Human Resources",
    },
    {
      name: "IT Industry",
      icon: Monitor,
      color: "bg-orange-500",
      subtitle: "Information Technology",
    },
    {
      name: "Real Estate Industry",
      icon: Home,
      color: "bg-yellow-500",
      subtitle: "Property Management",
    },
    {
      name: "Education Industry",
      icon: GraduationCap,
      color: "bg-emerald-500",
      subtitle: "Learning & Development",
    },
    {
      name: "3D Signage Industry",
      icon: Box,
      color: "bg-blue-500",
      subtitle: "Visual Advertising",
    },
    {
      name: "Astrology Industry",
      icon: Moon,
      color: "bg-indigo-500",
      subtitle: "Consulting Services",
    },
    {
      name: "Automobile Industry",
      icon: Truck,
      color: "bg-red-500",
      subtitle: "Transport & Manufacturing",
    },
    {
      name: "Beverage Industry",
      icon: Beer,
      color: "bg-amber-500",
      subtitle: "Food & Drink",
    },
    {
      name: "Dating Industry",
      icon: Heart,
      color: "bg-pink-500",
      subtitle: "Social Connection",
    },
    {
      name: "Events Industry",
      icon: Users,
      color: "bg-cyan-500",
      subtitle: "Event Management",
    },
    {
      name: "Fashion Industry",
      icon: ShoppingBag,
      color: "bg-rose-500",
      subtitle: "Apparel & Design",
    },
    {
      name: "Food Venture Industry",
      icon: Utensils,
      color: "bg-orange-600",
      subtitle: "Culinary Services",
    },
    {
      name: "Furniture Industry",
      icon: Sofa,
      color: "bg-brown-500",
      subtitle: "Interior Furnishing",
    },
    {
      name: "Hardware and Ceramic Industry",
      icon: Hammer,
      color: "bg-gray-500",
      subtitle: "Construction Materials",
    },
    {
      name: "Home Decor & Interior Designing",
      icon: Paintbrush,
      color: "bg-teal-600",
      subtitle: "Interior Architecture",
    },
    {
      name: "Hospitality and Management",
      icon: Hotel,
      color: "bg-blue-600",
      subtitle: "Service Management",
    },
    {
      name: "Hotel and Homestay Industry",
      icon: Bed,
      color: "bg-purple-500",
      subtitle: "Accommodation",
    },
    {
      name: "Infrastructure and Supplies",
      icon: Building,
      color: "bg-slate-500",
      subtitle: "Construction & Supplies",
    },
    {
      name: "Investment Banking & Stock Market",
      icon: TrendingUp,
      color: "bg-green-600",
      subtitle: "Finance & Trading",
    },
    {
      name: "Media and Entertainment",
      icon: Tv,
      color: "bg-red-600",
      subtitle: "Broadcasting & Media",
    },
    {
      name: "Petrochemical Industry",
      icon: FlaskConical,
      color: "bg-yellow-600",
      subtitle: "Chemical Processing",
    },
    {
      name: "Pharmaceutical Industry",
      icon: Pill,
      color: "bg-emerald-600",
      subtitle: "Healthcare & Pharma",
    },
    {
      name: "Printing Industry",
      icon: Printer,
      color: "bg-cyan-600",
      subtitle: "Publishing & Print",
    },
    {
      name: "Sports Industry",
      icon: Trophy,
      color: "bg-orange-400",
      subtitle: "Athletics & Recreation",
    },
    {
      name: "Tours and Travels Industry",
      icon: Plane,
      color: "bg-sky-500",
      subtitle: "Tourism & Logistics",
    },
  ];
  // demo repeat a list
  const fullList = Array(4).fill(industries).flat();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-[95%] max-w-6xl rounded-2xl shadow-xl p-6 md:p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F1E3D]">
            All Industries
          </h2>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
              Add Industrie
            </button>
            <button
  onClick={() => setIsAddUserOpen(true)}
  className="flex items-center justify-center gap-2 px-4 py-2 
             bg-[#6200EE] text-white rounded-lg 
             hover:bg-indigo-700 transition-colors 
             shadow-md shadow-indigo-200 font-medium text-sm"
>
  <UserPlus className="h-4 w-4" />
  Add User
</button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto pr-2">
          {fullList.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl border bg-white hover:shadow-md transition"
              >
                <div
                  className={`w-10 h-10 rounded-full ${ind.color} flex items-center justify-center`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#0F1E3D] truncate">
                    {ind.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {ind.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-12 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold"
          >
            BACK
          </button>

          <AddUserModal
  isOpen={isAddUserOpen}
  onClose={() => setIsAddUserOpen(false)}
/>

        </div>
      </div>
    </div>
  );
}
 