import { useMemo, useState } from "react";
import toast from "react-hot-toast";

type Employee = {
  id: string;
  name: string;
  unit: string;
  role: string;
  status: "active" | "inactive";
};

const initialEmployees: Employee[] = [
  { id: "0001", name: "Aarav Sharma", unit: "IT", role: "Software Engineer", status: "active" },
  { id: "0002", name: "Neha Verma", unit: "HR", role: "HR Manager", status: "active" },
  { id: "0003", name: "Rohan Mehta", unit: "Finance", role: "Accountant", status: "inactive" },
  { id: "0004", name: "Priya Singh", unit: "Marketing", role: "Marketing Lead", status: "active" },
  { id: "0005", name: "Kunal Patel", unit: "IT", role: "Project Manager", status: "active" },
];

export function EmployeesTable() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [unitFilter, setUnitFilter] = useState<string>("");

  const units = useMemo(
    () => Array.from(new Set(employees.map(e => e.unit))),
    [employees]
  );

  const filteredEmployees = employees.filter(emp => {
    const statusMatch =
      statusFilter === "all" || emp.status === statusFilter;
    const unitMatch =
      !unitFilter || emp.unit === unitFilter;
    return statusMatch && unitMatch;
  });

  // when the user is Approved then its works
   const handleApprove = (id: string, name: string) => {
    setEmployees(prev =>
      prev.map(emp =>
        emp.id === id ? { ...emp, status: "active" } : emp
      )
    );

    toast.success(`${name} approved successfully`, {
      duration: 2000,
    });
  };
// when the user is cancelled  
  const handleCancel = (id: string, name: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));

    toast.error(`${name} removed`, {
      duration: 2000,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-gray-100">
        <h3 className="font-bold text-[#0F1E3D] text-xl">Employees</h3>

        <div className="flex gap-2 items-center">
          {(["all", "active", "inactive"] as const).map(type => (
            <button
              key={type}
              onClick={() => setStatusFilter(type)}
              className={`px-4 py-1.5 text-sm font-medium rounded-md ${
                statusFilter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-50 text-indigo-600"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}

          <select
            value={unitFilter}
            onChange={(e) => setUnitFilter(e.target.value)}
            className="ml-2 pl-3 pr-8 py-1.5 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-md appearance-none cursor-pointer focus:outline-none"
          >
            <option value="">All Units</option>
            {units.map(unit => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {["Id", "Name", "Unit", "Role", "Status", "Action"].map(h => (
                <th
                  key={h}
                  className="px-6 py-4 text-left text-xs font-bold text-[#0F1E3D] uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredEmployees.map(emp => (
              <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-500">{emp.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{emp.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{emp.unit}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{emp.role}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      emp.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCancel(emp.id, emp.name)}
                      className="px-3 py-1 border border-gray-300 text-gray-600 text-xs font-medium rounded hover:bg-gray-50"
                    >
                      CANCEL
                    </button>
                    <button
                      onClick={() => handleApprove(emp.id, emp.name)}
                      className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded hover:bg-indigo-700 shadow-sm shadow-indigo-200"
                    >
                      APPROVE
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400 text-sm">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
