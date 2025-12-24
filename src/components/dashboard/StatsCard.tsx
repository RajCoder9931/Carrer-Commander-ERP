interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}
export function StatsCard({
  value,
  label,
  className = ''
}: StatsCardProps) {
  return <div className={`bg-white p-8 rounded-xl shadow-sm flex flex-col items-center justify-center text-center h-full ${className}`}>
    <span className="text-4xl font-bold text-[#0F1E3D] mb-2">{value}</span>
    <span className="text-gray-500 font-medium">{label}</span>
  </div>;
}