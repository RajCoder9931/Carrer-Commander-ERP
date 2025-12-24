import { useState } from 'react';
interface EditPermissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function EditPermissionsModal({
  isOpen,
  onClose
}: EditPermissionsModalProps) {
  const [permissions, setPermissions] = useState(Array(15).fill(false).map((_, i) => ({
    id: i,
    enabled: i % 3 === 0
  })));
  const togglePermission = (id: number) => {
    setPermissions(permissions.map(p => p.id === id ? {
      ...p,
      enabled: !p.enabled
    } : p));
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-white rounded-2xl w-full max-w-4xl p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#0F1E3D]">Edit Permission</h2>
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-8">
        {permissions.map(permission => <div key={permission.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
          <span className="text-gray-500">Email Id</span>
          <button onClick={() => togglePermission(permission.id)} className={`w-12 h-6 rounded-full relative transition-colors duration-200 ease-in-out ${permission.enabled ? 'bg-gray-800' : 'bg-gray-300'}`}>
            <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${permission.enabled ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        </div>)}
      </div>

      <div className="flex gap-4 justify-center max-w-md mx-auto">
        <button type="button" onClick={onClose} className="flex-1 h-12 border border-gray-200 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
          BACK
        </button>
        <button type="button" onClick={onClose} className="flex-1 h-12 bg-indigo-600 rounded-lg font-semibold text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-colors">
          UPDATE
        </button>
      </div>
    </div>
  </div>;
}