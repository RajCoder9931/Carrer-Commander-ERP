const units = [{
  name: 'Invensys (IT)',
  modules: 'Modules: MSP, Tickets'
}, {
  name: 'Career Commanders (HR)',
  modules: 'Modules: MSP, Tickets'
}, {
  name: 'Career Commanders (HR)',
  modules: 'Modules: MSP, Tickets'
}];
export function KeyUnitsCard() {
  return <div className="bg-white p-6 rounded-xl shadow-sm h-full">
    <h3 className="font-bold text-[#0F1E3D] mb-4">Key Units</h3>
    <div className="space-y-4">
      {units.map((unit, index) => <div key={index} className="border border-gray-100 rounded-lg p-4 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-[#0F1E3D] text-sm">{unit.name}</h4>
          <p className="text-xs text-gray-500 mt-1">{unit.modules}</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
          Active
        </span>
      </div>)}
    </div>
  </div>;
}