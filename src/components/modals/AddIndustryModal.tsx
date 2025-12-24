import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (industry: any) => void;
}

export function AddIndustryModal({ isOpen, onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newIndustry = {
      id: Date.now(),
      name,
      code,
      description,
    };

    onAdd(newIndustry);
    onClose();

    setName("");
    setCode("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#0F1E3D]">
            Add Industry
          </h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Industry Name"
            className="w-full border rounded-lg px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            placeholder="Industry Code"
            className="w-full border rounded-lg px-3 py-2"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />

          <textarea
            placeholder="Description"
            className="w-full border rounded-lg px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold"
          >
            Add Industry
          </button>
        </form>
      </div>
    </div>
  );
}
