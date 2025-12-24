import { BoxIcon } from 'lucide-react';
interface IndustryCardProps {
  name: string;
  subtitle: string;
  color: 'purple' | 'orange' | 'yellow' | 'teal';
  icon: BoxIcon;
}
const colorMap = {
  purple: {
    bg: 'bg-[#6200EE]',
    light: 'bg-purple-50'
  },
  orange: {
    bg: 'bg-[#FF6D00]',
    light: 'bg-orange-50'
  },
  yellow: {
    bg: 'bg-[#FFC107]',
    light: 'bg-yellow-50'
  },
  teal: {
    bg: 'bg-[#00BFA5]',
    light: 'bg-teal-50'
  } // Updated teal
};
export function IndustryCard({
  name,
  subtitle,
  color,
  icon: Icon
}: IndustryCardProps) {
  const colors = colorMap[color];
  return <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 md:gap-4 hover:shadow-md transition-shadow cursor-pointer h-full">
    <div className={`h-10 w-10 md:h-12 md:w-12 rounded-full ${colors.bg} flex items-center justify-center text-white shrink-0 shadow-sm`}>
      <Icon className="h-5 w-5 md:h-6 md:w-6" />
    </div>
    <div className="min-w-0">
      <h3 className="font-bold text-[#0F1E3D] text-sm md:text-base truncate">
        {name}
      </h3>
      <p className="text-gray-500 text-[10px] md:text-xs truncate">
        {subtitle}
      </p>
    </div>
  </div>;
}