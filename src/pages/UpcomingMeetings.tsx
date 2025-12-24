import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { MeetingsTable } from '../components/tables/MeetingsTable';

export function UpcomingMeetings() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'today' | 'week' | 'month'>('today');

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-bold text-[#0F1E3D]">
        Today - Upcoming Meetings
      </h2>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div className="flex flex-col sm:flex-row gap-4">

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search meetings, Employee..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200
              text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          {/* Filters */}
          <div className="bg-white border border-gray-200 p-1 rounded-lg flex">
            <button
              onClick={() => setFilter('today')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md
                ${filter === 'today'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Today
            </button>

            <button
              onClick={() => setFilter('week')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md
                ${filter === 'week'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              This Week
            </button>

            <button
              onClick={() => setFilter('month')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md
                ${filter === 'month'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              This Month
            </button>
          </div>
        </div>

        <button className="flex items-center gap-2 h-10 px-5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          <Plus className="h-4 w-4" />
          Add Meeting
        </button>
      </div>

      <MeetingsTable search={search} filter={filter} />
    </div>
  );
}
