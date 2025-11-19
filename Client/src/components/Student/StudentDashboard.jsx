import { useContext } from "react";
import { MOCK_DATA } from "../../assets/mockData";
import { PortalContext } from "../Context/PortalProvider";
import { Card, ProgressRing } from "./SharedComponentStudent";

const StudentDashboard = () => {
  const usePortal= ()=>useContext(PortalContext);
  const { user } = usePortal();
  const totalLessons = MOCK_DATA.lessons.length;
  const completedLessons = MOCK_DATA.lessons.filter(l => l.status === 'Completed').length;
  const completionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <p className="text-sm font-semibold text-blue-700">Welcome back, {user?.name}!</p>
        <h2 className="text-3xl font-extrabold text-blue-900 mt-1">Your Digital Classroom Awaits.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Overall Course Progress" className="col-span-1 flex flex-col items-center">
          <ProgressRing percentage={completionPercentage} color="text-green-500" />
          <p className="mt-3 text-sm text-gray-600">{completedLessons} of {totalLessons} modules completed.</p>
        </Card>
        <Card title="Latest Assignment" className="col-span-2">
          {MOCK_DATA.assignments[1] ? (
            <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-lg text-yellow-800">{MOCK_DATA.assignments[1].title}</p>
              <p className="text-sm text-gray-600 mt-1">Due: {MOCK_DATA.assignments[1].dueDate}</p>
              <p className="text-sm text-gray-500">Status: {MOCK_DATA.assignments[1].status}</p>
              <button className="mt-3 text-blue-600 text-sm font-medium hover:underline">Go to Assignment</button>
            </div>
          ) : <p className="text-gray-500">No active assignments.</p>}
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;