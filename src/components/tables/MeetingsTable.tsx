import { MoreVertical } from 'lucide-react';

interface Meeting {
  project: string;
  platform: string;
  date: string;  
  time: string;
  status: string;
}

interface Props {
  search: string;
  filter: 'today' | 'week' | 'month';
}

export function MeetingsTable({ search, filter }: Props) {
  const meetings: Meeting[] = [
    {
      project: 'PROJECT #001',
      platform: 'Google Meet',
      date: 'Dec 20, 2025',
      time: '10:00 AM',
      status: 'Scheduled'
    },
    {
      project: 'PROJECT #002',
      platform: 'Google Meet',
      date: 'Dec 20, 2025',
      time: '10:00 AM',
      status: 'Scheduled'
    },
    {
      project: 'PROJECT #003',
      platform: 'Google Meet',
      date: 'Dec 21, 2025',
      time: '10:00 AM',
      status: 'Scheduled'
    },
    {
      project: 'PROJECT #004',
      platform: 'Google Meet',
      date: 'Dec 21, 2025',
      time: '10:00 AM',
      status: 'Scheduled'
    }
  ];

  const today = new Date();

  const filteredMeetings = meetings.filter((item) => {
    const meetingDate = new Date(item.date);

    // Search filter
    const searchMatch =
      item.project.toLowerCase().includes(search.toLowerCase()) ||
      item.platform.toLowerCase().includes(search.toLowerCase());

    if (!searchMatch) return false;

    //  Date filter
    if (filter === 'today') {
      return meetingDate.toDateString() === today.toDateString();
    }

    if (filter === 'week') {
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      return meetingDate >= startOfWeek && meetingDate <= endOfWeek;
    }

    if (filter === 'month') {
      return (
        meetingDate.getMonth() === today.getMonth() &&
        meetingDate.getFullYear() === today.getFullYear()
      );
    }

    return true;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
              Employee
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
              Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase">
              Edit
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {filteredMeetings.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500">
                No meetings found
              </td>
            </tr>
          ) : (
            filteredMeetings.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      P
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F1E3D]">
                        {item.project}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.platform}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {item.date}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {item.time}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreVertical className="h-4 w-4 text-gray-500" />
                  </button>
                </td>

              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}
