import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  mode: "view" | "edit";
  order: any | null;
  onClose: () => void;
  onUpdate: (updatedOrder: any) => void;
}

export function OrderModal({ isOpen, mode, order, onClose, onUpdate }: Props) {
  const [formData, setFormData] = useState<any>(order);

  useEffect(() => {
    setFormData(order);
  }, [order]);

  if (!isOpen || !order) return null;

  const isEdit = mode === "edit";

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#0F1E3D]">
            {isEdit ? "Edit Order" : "View Order"}
          </h2>
          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {["id", "customer", "unit", "assigned", "value", "status"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
                  {field}
                </label>

                {isEdit ? (
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                    {order[field]}
                  </p>
                )}
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-lg text-sm font-medium"
          >
            Back
          </button>

          {isEdit && (
            <button
              onClick={() => {
                onUpdate(formData);
                onClose();
              }}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium"
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
