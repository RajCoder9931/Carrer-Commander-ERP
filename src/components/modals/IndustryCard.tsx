import {
    LucideIcon,
    Briefcase,
    Monitor,
    Home,
    GraduationCap,
  } from "lucide-react";
  
  interface IndustryCardProps {
    name: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
  }
  
  const iconThemeMap = new Map<LucideIcon, { bg: string; icon: string }>([
    [Briefcase, { bg: "bg-purple-100", icon: "text-purple-600" }],   // HR
    [Monitor, { bg: "bg-orange-100", icon: "text-orange-600" }],     // IT
    [Home, { bg: "bg-yellow-100", icon: "text-yellow-600" }],        // Real Estate
    [GraduationCap, { bg: "bg-teal-100", icon: "text-teal-600" }],    // Education
  ]);
  
  export function IndustryCard({
    name,
    subtitle,
    description,
    icon: Icon,
  }: IndustryCardProps) {
     const theme =
      iconThemeMap.get(Icon) ?? {
        bg: "bg-indigo-100",
        icon: "text-indigo-600",
      };
  
    return (
      <div className="bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="flex gap-3">
          {/* Icon */}
          <div
            className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${theme.bg}`}
          >
            <Icon className={`h-5 w-5 ${theme.icon}`} />
          </div>
  
          {/* Text */}
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-[#0F1E3D] truncate">
              {name}
            </h3>
  
            <p className="text-xs text-gray-500 truncate">
              {subtitle}
            </p>
  
            {/* Description */}
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  