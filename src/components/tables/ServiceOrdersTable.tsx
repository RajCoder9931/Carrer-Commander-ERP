// const orders = [{
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Pending'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Pending'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Completed'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Pending'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Completed'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Completed'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Completed'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Pending'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Cancelled'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Cancelled'
// }, {
//   id: 'SO-1001',
//   customer: 'Amit Kumar',
//   unit: 'IT / Investop',
//   assigned: 'R. Dutta',
//   value: '₹ 150',
//   status: 'Pending'
// }];
// const getStatusColor = (status: string) => {
//   switch (status) {
//     case 'Pending':
//       return 'bg-indigo-50 text-indigo-600';
//     case 'Completed':
//       return 'bg-green-50 text-green-600';
//     case 'Cancelled':
//       return 'bg-red-50 text-red-600';
//     default:
//       return 'bg-gray-50 text-gray-600';
//   }
// };
// export function ServiceOrdersTable() {
//   return <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-50 border-b border-gray-200">
//             <tr>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Order #
//               </th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Customer
//               </th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Industry / Unit
//               </th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Assigned
//               </th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Value
//               </th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {orders.map((order, index) => <tr key={index} className="hover:bg-gray-50 transition-colors">
//                 <td className="px-6 py-4 text-sm text-gray-600">{order.id}</td>
//                 <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                   {order.customer}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-600">
//                   {order.unit}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-600">
//                   {order.assigned}
//                 </td>
//                 <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                   {order.value}
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className={`px-3 py-1 text-xs font-medium rounded-md ${getStatusColor(order.status)}`}>
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex justify-center gap-2">
//                     <button className="px-4 py-1.5 border border-gray-300 text-gray-600 text-xs font-medium rounded hover:bg-gray-50">
//                       View
//                     </button>
//                     <button className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded hover:bg-indigo-700 shadow-sm shadow-indigo-200">
//                       Edit
//                     </button>
//                   </div>
//                 </td>
//               </tr>)}
//           </tbody>
//         </table>
//       </div>
 
//     </div>;
// }


// new code 
import { useState, useMemo } from "react";
import { OrderModal } from "./OrderModal";

type Order = {
  id: string;
  customer: string;
  unit: string;
  assigned: string;
  value: string;
  status: string;
};

const initialOrders: Order[] = [
  { id: "SO-1001", customer: "Amit Kumar", unit: "IT / Investop", assigned: "R. Dutta", value: "₹ 150", status: "Pending" },
  { id: "SO-1002", customer: "Rahul Singh", unit: "HR / Career", assigned: "M. Verma", value: "₹ 300", status: "Completed" },
  { id: "SO-1003", customer: "Priya Sharma", unit: "Finance / Accounting", assigned: "N. Gupta", value: "₹ 450", status: "Pending" },
  { id: "SO-1004", customer: "Suresh Yadav", unit: "Marketing / Sales", assigned: "A. Soni", value: "₹ 200", status: "Completed" },
  { id: "SO-1005", customer: "Neha Verma", unit: "Design / Creative", assigned: "V. Patel", value: "₹ 350", status: "Pending" },
  { id: "SO-1006", customer: "Vikram Singh", unit: "Operations / Logistics", assigned: "S. Mehra", value: "₹ 500", status: "Completed" },
  { id: "SO-1007", customer: "Rita Agarwal", unit: "IT / Development", assigned: "P. Chatterjee", value: "₹ 400", status: "Pending" },
  { id: "SO-1008", customer: "Manish Kumar", unit: "HR / Talent Acquisition", assigned: "L. Singh", value: "₹ 250", status: "Completed" },
  { id: "SO-1009", customer: "Geeta Rani", unit: "Research / Analytics", assigned: "R. Verma", value: "₹ 380", status: "Pending" },
  { id: "SO-1010", customer: "Arvind Patel", unit: "Legal / Compliance", assigned: "J. Shah", value: "₹ 550", status: "Completed" },
];

export function ServiceOrdersTable() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  // modal
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [modalMode, setModalMode] = useState<"view" | "edit">("view");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // pagination
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return orders.slice(start, start + ITEMS_PER_PAGE);
  }, [orders, currentPage]);

  const openModal = (order: Order, mode: "view" | "edit") => {
    setSelectedOrder(order);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleUpdate = (updatedOrder: Order) => {
    setOrders(prev =>
      prev.map(o => (o.id === updatedOrder.id ? updatedOrder : o))
    );
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {["Order", "Customer", "Unit", "Assigned", "Value", "Status", "Actions"].map(h => (
                <th
                  key={h}
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {paginatedOrders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{order.id}</td>
                <td className="px-6 py-4 text-sm font-medium">{order.customer}</td>
                <td className="px-6 py-4 text-sm">{order.unit}</td>
                <td className="px-6 py-4 text-sm">{order.assigned}</td>
                <td className="px-6 py-4 text-sm">{order.value}</td>
                <td className="px-6 py-4 text-sm">{order.status}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(order, "view")}
                      className="px-4 py-1.5 border text-xs rounded"
                    >
                      View
                    </button>
                    <button
                      onClick={() => openModal(order, "edit")}
                      className="px-4 py-1.5 bg-indigo-600 text-white text-xs rounded"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
            {Math.min(currentPage * ITEMS_PER_PAGE, orders.length)} of{" "}
            {orders.length} results
          </p>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-3 py-1 border rounded text-sm disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded text-sm ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white"
                    : "border text-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-3 py-1 border rounded text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <OrderModal
        isOpen={isModalOpen}
        mode={modalMode}
        order={selectedOrder}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdate}
      />
    </>
  );
}
