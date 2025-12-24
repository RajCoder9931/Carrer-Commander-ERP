import { UserPlus, Edit2 } from 'lucide-react';
interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEditPermissions: () => void;
}
export function AddUserModal({
  isOpen,
  onClose,
  onEditPermissions
}: AddUserModalProps) {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
      <div className="flex flex-col items-center mb-8">
        <div className="h-16 w-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-indigo-200">
          <UserPlus className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-[#0F1E3D]">Add User</h2>
      </div>

      <form className="space-y-5">
        <div>
          <input type="text" placeholder="Name" className="w-full h-12 px-4 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-indigo-500 text-gray-900" />
        </div>

        <div>
          <input type="email" placeholder="Email Id" className="w-full h-12 px-4 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-indigo-500 text-gray-900" />
        </div>

        <div className="relative">
          <select className="w-full h-12 px-4 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-indigo-500 text-gray-500 appearance-none cursor-pointer">
            <option value="" disabled selected>
              Industry
            </option>
            <option value="it">IT Industry</option>
            <option value="hr">HR Industry</option>
            <option value="real-estate">Real Estate</option>
            <option value="education">Education</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="w-full h-12 px-4 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-indigo-500 text-gray-500 appearance-none cursor-pointer">
            <option value="" disabled selected>
              Assigned Role
            </option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors" onClick={onEditPermissions}>
          <span className="text-gray-500">Edit Permissions</span>
          <Edit2 className="h-4 w-4 text-indigo-500" />
        </div>

        <div className="flex gap-4 mt-8 pt-4">
          <button type="button" onClick={onClose} className="flex-1 h-12 border border-gray-200 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
            BACK
          </button>
          <button type="submit" className="flex-1 h-12 bg-indigo-600 rounded-lg font-semibold text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-colors">
            CREATE
          </button>
        </div>
      </form>
    </div>
  </div>;
}